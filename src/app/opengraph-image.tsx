import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Tumy.ai - Soluciones de Inteligencia Artificial para Empresas';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            display: 'flex',
          }}
        />

        {/* Glow effect */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            left: '50%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            transform: 'translateX(-50%)',
            display: 'flex',
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
            marginBottom: '32px',
            boxShadow: '0 0 40px rgba(255,255,255,0.15)',
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 1024 1024"
            fill="none"
          >
            <circle cx="350" cy="512" r="200" stroke="#0a0a0a" strokeWidth="80" fill="none" />
            <circle cx="750" cy="300" r="80" fill="#0a0a0a" />
            <circle cx="750" cy="724" r="60" stroke="#0a0a0a" strokeWidth="50" fill="none" />
            <line x1="500" y1="420" x2="690" y2="320" stroke="#0a0a0a" strokeWidth="60" />
            <line x1="500" y1="600" x2="700" y2="700" stroke="#0a0a0a" strokeWidth="60" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-2px',
              display: 'flex',
            }}
          >
            Tumy.ai
          </div>

          {/* Divider */}
          <div
            style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #ffffff, transparent)',
              display: 'flex',
            }}
          />

          {/* Subtitle */}
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 400,
              textAlign: 'center',
              maxWidth: '700px',
              lineHeight: 1.4,
              display: 'flex',
            }}
          >
            Soluciones de Inteligencia Artificial para Empresas
          </div>
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(255,255,255,0.4)',
            fontSize: 16,
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}
        >
          tumy.ai
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
