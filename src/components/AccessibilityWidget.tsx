import React, { useState, useEffect, useRef } from 'react';
import { Settings, X, Type, Contrast, Underline, Eye, MoveVertical, RotateCcw, Accessibility } from 'lucide-react';

interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'xlarge';
  highContrast: boolean;
  underlineLinks: boolean;
  readableFont: boolean;
  lineHeight: boolean;
}

const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'normal',
    highContrast: false,
    underlineLinks: false,
    readableFont: false,
    lineHeight: false,
  });
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      applySettings(parsedSettings);
    }
  }, []);

  // Focus trap for modal
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        } else if (e.key === 'Escape') {
          setIsOpen(false);
          triggerRef.current?.focus();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      firstElement?.focus();

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  // Apply settings to the document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Remove existing classes
    root.classList.remove(
      'a11y-font-large', 'a11y-font-xlarge',
      'a11y-contrast',
      'a11y-underline-links',
      'a11y-readable-font',
      'a11y-lineheight'
    );

    // Apply new classes
    if (newSettings.fontSize === 'large') {
      root.classList.add('a11y-font-large');
    } else if (newSettings.fontSize === 'xlarge') {
      root.classList.add('a11y-font-xlarge');
    }

    if (newSettings.highContrast) {
      root.classList.add('a11y-contrast');
    }

    if (newSettings.underlineLinks) {
      root.classList.add('a11y-underline-links');
    }

    if (newSettings.readableFont) {
      root.classList.add('a11y-readable-font');
    }

    if (newSettings.lineHeight) {
      root.classList.add('a11y-lineheight');
    }
  };

  // Save settings to localStorage
  const saveSettings = (newSettings: AccessibilitySettings) => {
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    setSettings(newSettings);
    applySettings(newSettings);
  };

  // Reset all settings
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 'normal',
      highContrast: false,
      underlineLinks: false,
      readableFont: false,
      lineHeight: false,
    };
    saveSettings(defaultSettings);
  };

  // Toggle individual settings
  const toggleSetting = (key: keyof AccessibilitySettings, value?: AccessibilitySettings[keyof AccessibilitySettings]) => {
    const newSettings = {
      ...settings,
      [key]: value !== undefined ? value : !settings[key],
    };
    saveSettings(newSettings);
  };

  return (
    <>
      {/* Widget Button */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 min-h-[44px] min-w-[44px]"
        aria-label={isOpen ? "סגור אפשרויות נגישות" : "פתח אפשרויות נגישות"}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="h-6 w-6" />
      </button>

      {/* Widget Panel */}
      {isOpen && (
        <div
          ref={modalRef}
          id="accessibility-panel"
          className="fixed bottom-20 left-2 right-2 sm:left-4 sm:right-auto z-50 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 sm:p-6 w-auto sm:w-80 max-w-[calc(100vw-1rem)] sm:max-w-[calc(100vw-2rem)]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="accessibility-title"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 id="accessibility-title" className="text-lg font-bold text-gray-900">
              אפשרויות נגישות
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
              aria-label="סגור פאנל נגישות"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Settings */}
          <div className="space-y-4">
            {/* Font Size */}
            <div>
              <label htmlFor="a11y-text-size" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Type className="h-4 w-4" />
                גודל טקסט
              </label>
              <div className="flex gap-2">
                {[
                  { value: 'normal', label: 'רגיל' },
                  { value: 'large', label: 'גדול' },
                  { value: 'xlarge', label: 'גדול מאוד' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => toggleSetting('fontSize', option.value)}
                    className={`px-3 py-2 sm:py-1 text-xs sm:text-sm rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 min-h-[44px] ${
                      settings.fontSize === option.value
                        ? 'bg-sky-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <label htmlFor="a11y-contrast" className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer">
                <Contrast className="h-4 w-4" />
                ניגודיות גבוהה
              </label>
              <input
                id="a11y-contrast"
                type="checkbox"
                checked={settings.highContrast}
                onChange={() => toggleSetting('highContrast')}
                className="sr-only"
              />
              <button
                onClick={() => toggleSetting('highContrast')}
                className={`relative inline-flex h-7 w-12 sm:h-6 sm:w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 min-h-[44px] min-w-[44px] ${
                  settings.highContrast ? 'bg-sky-500' : 'bg-gray-200'
                }`}
                aria-pressed={settings.highContrast}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Underline Links */}
            <div className="flex items-center justify-between">
              <label htmlFor="a11y-underline-links" className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer">
                <Underline className="h-4 w-4" />
                הדגשת קישורים
              </label>
              <input
                id="a11y-underline-links"
                type="checkbox"
                checked={settings.underlineLinks}
                onChange={() => toggleSetting('underlineLinks')}
                className="sr-only"
              />
              <button
                onClick={() => toggleSetting('underlineLinks')}
                className={`relative inline-flex h-7 w-12 sm:h-6 sm:w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 min-h-[44px] min-w-[44px] ${
                  settings.underlineLinks ? 'bg-sky-500' : 'bg-gray-200'
                }`}
                aria-pressed={settings.underlineLinks}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.underlineLinks ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Readable Font */}
            <div className="flex items-center justify-between">
              <label htmlFor="a11y-readable-font" className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer">
                <Eye className="h-4 w-4" />
                פונט קריא
              </label>
              <input
                id="a11y-readable-font"
                type="checkbox"
                checked={settings.readableFont}
                onChange={() => toggleSetting('readableFont')}
                className="sr-only"
              />
              <button
                onClick={() => toggleSetting('readableFont')}
                className={`relative inline-flex h-7 w-12 sm:h-6 sm:w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 min-h-[44px] min-w-[44px] ${
                  settings.readableFont ? 'bg-sky-500' : 'bg-gray-200'
                }`}
                aria-pressed={settings.readableFont}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.readableFont ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Line Height */}
            <div className="flex items-center justify-between">
              <label htmlFor="a11y-line-height" className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer">
                <MoveVertical className="h-4 w-4" />
                מרווח שורות מוגדל
              </label>
              <input
                id="a11y-line-height"
                type="checkbox"
                checked={settings.lineHeight}
                onChange={() => toggleSetting('lineHeight')}
                className="sr-only"
              />
              <button
                onClick={() => toggleSetting('lineHeight')}
                className={`relative inline-flex h-7 w-12 sm:h-6 sm:w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 min-h-[44px] min-w-[44px] ${
                  settings.lineHeight ? 'bg-sky-500' : 'bg-gray-200'
                }`}
                aria-pressed={settings.lineHeight}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.lineHeight ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSettings}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 sm:py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 min-h-[44px]"
            >
              <RotateCcw className="h-4 w-4" />
              איפוס הגדרות
            </button>
          </div>

          {/* Info */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              ההגדרות נשמרות בדפדפן שלכם
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityWidget;
