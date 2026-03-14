import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'it', label: 'IT' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language?.substring(0, 2) || 'it';

  const handleToggle = () => {
    const next = current === 'en' ? 'it' : 'en';
    i18n.changeLanguage(next);
  };

  const currentLang = languages.find((l) => l.code === current) || languages[1];

  return (
    <span
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') handleToggle(); }}
      style={{ cursor: 'pointer' }}
    >
      <span className="material-icons notranslate" style={{ fontSize: '18px', verticalAlign: 'middle', marginRight: '4px' }}>language</span>
      {currentLang.label}
    </span>
  );
}
