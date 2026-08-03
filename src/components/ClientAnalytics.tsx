"use client";
import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function ClientAnalytics() {
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem("cookie-consent");
      if (consent === "accepted") {
        setConsentGranted(true);
      }
    };
    
    // Initial check
    checkConsent();

    // Listen for custom event in case user accepts it right now
    window.addEventListener("cookie-consent-updated", checkConsent);
    return () => window.removeEventListener("cookie-consent-updated", checkConsent);
  }, []);

  if (!consentGranted || !process.env.NEXT_PUBLIC_GA_ID) {
    return null;
  }

  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />;
}
