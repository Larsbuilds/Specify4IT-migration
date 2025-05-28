'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', flag: '🇬🇧' },
  { code: 'de', flag: '🇩🇪' },
];

export function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = useLocale();

  const t = useTranslations('navigation.languages');
  const currentLanguage = languages.find((lang) => lang.code === currentLocale) || languages[0];

  // Get the path without the locale
  const pathWithoutLocale = pathname.replace(/^\/[a-zA-Z-]+(?=\/|$)/, '');

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        setIsOpen(false);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        setIsOpen(!isOpen);
        break;
      case 'ArrowDown':
        if (!isOpen) {
          setIsOpen(true);
        }
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !(e.target as Element).closest('.language-dropdown')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative language-dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="language-menu"
        id="language-button"
      >
        <span className="text-lg" aria-hidden="true">{currentLanguage.flag}</span>
        <span className="text-white">{t(currentLanguage.code)}</span>
        <ChevronDown 
          className={`w-4 h-4 text-white/80 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div 
          id="language-menu"
          className="absolute right-0 mt-2 py-2 w-48 bg-[#1A2B3C] rounded-lg shadow-lg ring-1 ring-white/10 z-50"
          role="listbox"
          aria-orientation="vertical"
          aria-labelledby="language-button"
          tabIndex={-1}
        >
          {languages.map((language) => (
            <Link
              key={language.code}
              href={`/${language.code}${pathWithoutLocale}`}
              className={`flex items-center space-x-3 px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                currentLocale === language.code
                  ? 'text-[#3E7CB1] bg-white/5'
                  : 'text-white'
              }`}
              onClick={() => setIsOpen(false)}
              role="option"
              aria-selected={currentLocale === language.code}
              tabIndex={0}
            >
              <span className="text-lg" aria-hidden="true">{language.flag}</span>
              <span>{t(language.code)}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
