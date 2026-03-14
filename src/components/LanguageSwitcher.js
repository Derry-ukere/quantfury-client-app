import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      value={i18n.language?.substring(0, 2) || 'it'}
      onChange={handleChange}
      style={{
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.3)',
        color: 'inherit',
        padding: '4px 8px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
      }}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code} style={{ color: '#333' }}>
          {lang.flag} {lang.label}
        </option>
      ))}
    </select>
  );
}
