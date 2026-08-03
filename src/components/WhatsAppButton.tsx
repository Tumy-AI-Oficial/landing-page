'use client';
import { FaWhatsapp } from 'react-icons/fa';
import { useI18n } from '@/lib/i18n';

export const WhatsAppButton = () => {
    const { t } = useI18n();
    return (
        <a 
            href="https://wa.me/51908748904" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center p-3.5 md:p-4 
            bg-white/70 dark:bg-black/60 backdrop-blur-2xl 
            border border-neutral-200/60 dark:border-white/10 
            shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]
            text-neutral-800 dark:text-neutral-200
            hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-600 dark:hover:text-green-400
            active:scale-95
            rounded-full transition-all duration-500 ease-out group"
            aria-label={t("whatsapp.ariaLabel")}
        >
            <FaWhatsapp className="w-6 h-6 relative z-10" />
            
            {/* Solo se expande en desktop para no romper el layout en mobile */}
            <span className="hidden md:block max-w-0 overflow-hidden whitespace-nowrap opacity-0 
            group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-3 
            transition-all duration-500 ease-out font-medium text-sm">
                {t("whatsapp.text")}
            </span>
        </a>
    )
}
