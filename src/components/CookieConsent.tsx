import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from './Button';

interface CookieConsentProps {
  colors?: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
}

export function CookieConsent({ colors = {
  cream: '#FEFBF8',
  dark: '#1E2A45',
  accent: '#184A5A',
  light: '#7A95AB'
} }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('stratri-cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('stratri-cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('stratri-cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('stratri-cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom duration-500"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div 
        className="max-w-6xl mx-auto rounded-lg shadow-2xl border-2"
        style={{ 
          backgroundColor: colors.cream,
          borderColor: colors.accent
        }}
      >
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Cookie size={24} style={{ color: colors.accent }} />
              <h3 
                id="cookie-consent-title"
                className="font-serif text-xl sm:text-2xl font-medium"
                style={{ color: colors.dark }}
              >
                Cookie Settings
              </h3>
            </div>
            <button
              onClick={handleRejectAll}
              className="rounded-full p-2 hover:bg-black/5 transition-colors"
              aria-label="Close and reject optional cookies"
            >
              <X size={20} style={{ color: colors.dark }} />
            </button>
          </div>

          {/* Description */}
          <p 
            id="cookie-consent-description"
            className="text-sm sm:text-base leading-relaxed mb-6 max-w-4xl"
            style={{ color: `${colors.dark}CC` }}
          >
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
            You can choose which cookies to accept. Read our{' '}
            <a 
              href="/privacy" 
              className="underline hover:no-underline font-medium"
              style={{ color: colors.accent }}
            >
              Privacy Policy
            </a>
            {' '}and{' '}
            <a 
              href="/cookies" 
              className="underline hover:no-underline font-medium"
              style={{ color: colors.accent }}
            >
              Cookie Policy
            </a>
            {' '}for more details.
          </p>

          {/* Customization Panel */}
          {isCustomizing && (
            <div className="mb-6 space-y-4 border-t pt-6" style={{ borderColor: `${colors.dark}15` }}>
              {/* Necessary Cookies */}
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="necessary-cookies"
                  checked={true}
                  disabled
                  className="mt-1 w-5 h-5 rounded border-2 cursor-not-allowed"
                  style={{ 
                    borderColor: colors.light,
                    backgroundColor: colors.accent,
                    opacity: 0.5
                  }}
                />
                <div className="flex-1">
                  <label 
                    htmlFor="necessary-cookies" 
                    className="font-sans font-medium text-sm block mb-1"
                    style={{ color: colors.dark }}
                  >
                    Necessary Cookies (Required)
                  </label>
                  <p className="text-xs" style={{ color: `${colors.dark}99` }}>
                    Essential for the website to function properly. Cannot be disabled.
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="analytics-cookies"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="mt-1 w-5 h-5 rounded border-2 cursor-pointer accent-stratri-accent"
                  style={{ borderColor: colors.light }}
                />
                <div className="flex-1">
                  <label 
                    htmlFor="analytics-cookies" 
                    className="font-sans font-medium text-sm block mb-1 cursor-pointer"
                    style={{ color: colors.dark }}
                  >
                    Analytics Cookies
                  </label>
                  <p className="text-xs" style={{ color: `${colors.dark}99` }}>
                    Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="marketing-cookies"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="mt-1 w-5 h-5 rounded border-2 cursor-pointer accent-stratri-accent"
                  style={{ borderColor: colors.light }}
                />
                <div className="flex-1">
                  <label 
                    htmlFor="marketing-cookies" 
                    className="font-sans font-medium text-sm block mb-1 cursor-pointer"
                    style={{ color: colors.dark }}
                  >
                    Marketing Cookies
                  </label>
                  <p className="text-xs" style={{ color: `${colors.dark}99` }}>
                    Used to track visitors across websites to display relevant and engaging advertisements.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {isCustomizing ? (
              <>
                <Button
                  onClick={handleSavePreferences}
                  variant="primary"
                  className="flex-1 sm:flex-none sm:min-w-[160px]"
                >
                  Save Preferences
                </Button>
                <Button
                  onClick={() => setIsCustomizing(false)}
                  variant="secondary"
                  className="flex-1 sm:flex-none"
                >
                  Back
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={handleAcceptAll}
                  variant="primary"
                  className="flex-1 sm:flex-none sm:min-w-[160px]"
                >
                  Accept All
                </Button>
                <Button
                  onClick={handleRejectAll}
                  variant="secondary"
                  className="flex-1 sm:flex-none sm:min-w-[160px]"
                >
                  Reject All
                </Button>
                <button
                  onClick={() => setIsCustomizing(true)}
                  className="flex-1 sm:flex-none px-6 py-3 text-sm font-sans font-medium rounded-md transition-all duration-200 hover:underline"
                  style={{ color: colors.accent }}
                >
                  Customize
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
