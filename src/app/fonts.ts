import localFont from 'next/font/local';
import { GeistSans } from 'geist/font/sans';

export const geistSans = GeistSans;

// Only the 4 weights actually used in the UI (mono labels, tags, number codes).
// Removed 10 unused variants (Thin, ExtraLight, Light and all italics) to
// reduce font loading overhead, especially on first visit.
export const ibmPlexMono = localFont({
    variable: '--font-ibm-plex-mono',
    display: 'swap',
    src: [
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
});


