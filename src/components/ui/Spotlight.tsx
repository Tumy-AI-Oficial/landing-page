import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
    className?: string;
    fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
    return (
        <div className="absolute top-0 left-0 w-full overflow-hidden min-h-screen dark:bg-black/[0.96] bg-white/[0.96]">
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={cn(
                        "absolute inset-0 [background-size:40px_40px]",
                        // En modo oscuro: líneas sutiles (grid original)
                        "dark:[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
                        // En modo claro: líneas con mayor contraste
                        "[background-image:linear-gradient(to_right,rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.2)_1px,transparent_1px)]",
                        // Aplica la máscara personalizada
                        "spotlight-mask"
                    )}
                />
            </div>
            <svg
                className={cn(
                    "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-40",
                    className
                )}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 3787 2842"
                fill="none"
            >
                <g filter="url(#filter)">
                    <ellipse
                        cx="1924.71"
                        cy="273.501"
                        rx="1924.71"
                        ry="273.501"
                        transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
                        fill={fill || "white"}
                        fillOpacity="0.21"
                    ></ellipse>
                </g>
                <defs>
                    <filter
                        id="filter"
                        x="0.860352"
                        y="0.838989"
                        width="3785.16"
                        height="2840.26"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        ></feBlend>
                        <feGaussianBlur
                            stdDeviation="151"
                            result="effect1_foregroundBlur_1065_8"
                        ></feGaussianBlur>
                    </filter>
                </defs>
            </svg>
        </div>
    );
};
