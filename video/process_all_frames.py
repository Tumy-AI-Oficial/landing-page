import cv2
import numpy as np
import os
import sys

video_path = "video/upscaled-video.mp4"
output_dir = "public/frames"
os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)
if not cap.isOpened():
    print("Error: Could not open video.")
    sys.exit(1)

frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
print(f"Re-estimating background from {frame_count} frames...")

# 1. Estimate background using minimum of 15 sample frames
sample_indices = np.linspace(0, frame_count - 1, 15, dtype=int)
frames_sample = []

for idx in sample_indices:
    cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
    ret, frame = cap.read()
    if ret:
        frames_sample.append(frame)

bg = np.minimum.reduce(frames_sample)

# Reset video capture to start
cap.set(cv2.CAP_PROP_POS_FRAMES, 0)

print("Starting adaptive difference keying with radial edge fading...")

# Crop boundaries
x_start, x_end = 1200, 2400
y_start, y_end = 150, 1350
target_width = 600

crop_bg = bg[y_start:y_end, x_start:x_end]

# Bounding box dimensions for final crop
crop_size = 1000

for idx in range(frame_count):
    ret, frame = cap.read()
    if not ret:
        break

    # Crop to region of interest
    crop_frame = frame[y_start:y_end, x_start:x_end]

    # Compute difference
    diff = cv2.absdiff(crop_frame, crop_bg)
    
    # Calculate background noise in the top-left corner patch (150x150) of the crop
    corner_diff = diff[0:150, 0:150]
    bg_noise = np.max(corner_diff)

    # Set adaptive thresholds dynamically per frame to prevent background leak
    low_thresh = max(7, bg_noise + 3) # Using +3 margin for absolute safety
    high_thresh = max(45, low_thresh + 35)

    max_diff = np.max(diff, axis=2)
    alpha = np.zeros_like(max_diff)

    mask_low = max_diff < low_thresh
    mask_high = max_diff > high_thresh
    mask_mid = ~(mask_low | mask_high)

    alpha[mask_high] = 255
    alpha[mask_mid] = ((max_diff[mask_mid] - low_thresh) / (high_thresh - low_thresh) * 255).astype(np.uint8)

    # Blur mask for smooth edges
    alpha_feathered = cv2.GaussianBlur(alpha, (9, 9), 0)

    # Create RGBA image
    rgba = cv2.cvtColor(crop_frame, cv2.COLOR_BGR2BGRA)
    rgba[:, :, 3] = alpha_feathered

    # Crop tight square around the center to keep it stable
    crop_h, crop_w, _ = rgba.shape
    center_y, center_x = crop_h // 2, crop_w // 2
    
    y1 = max(0, center_y - crop_size // 2)
    y2 = min(crop_h, center_y + crop_size // 2)
    x1 = max(0, center_x - crop_size // 2)
    x2 = min(crop_w, center_x + crop_size // 2)
    
    tight_crop = rgba[y1:y2, x1:x2]

    # Resize to 600x600 for optimal HD detail
    resized = cv2.resize(tight_crop, (target_width, target_width), interpolation=cv2.INTER_AREA)

    # Apply radial fade to alpha channel to guarantee zero edge lines/box shapes
    # Create radial distance map
    Y, X = np.ogrid[:target_width, :target_width]
    center_y, center_x = target_width / 2.0, target_width / 2.0
    dist = np.sqrt((X - center_x)**2 + (Y - center_y)**2)
    # Fade starts at radius 250, reaches 0 at radius 290
    radial_fade = np.clip((290.0 - dist) / 40.0, 0.0, 1.0)
    
    # Apply fade to alpha
    resized[:, :, 3] = (resized[:, :, 3] * radial_fade).astype(np.uint8)

    # Save frame as WebP
    out_path = os.path.join(output_dir, f"frame_{idx:03d}.webp")
    cv2.imwrite(out_path, resized, [int(cv2.IMWRITE_WEBP_QUALITY), 85])

    if idx % 40 == 0:
        print(f"Processed frame {idx}/{frame_count} (noise={bg_noise}, low={low_thresh})")

cap.release()
print("Finished extracting all 240 high-quality frames!")
