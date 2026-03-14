import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = i18n.language?.substring(0, 2) || 'it';
  const currentLang = languages.find((l) => l.code === current) || languages[1];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectLanguage = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <span
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') setOpen(!open); }}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 8px' }}
      >
        <span style={{ fontSize: '22px', lineHeight: 1 }}>{currentLang.flag}</span>
        <span style={{ fontSize: '13px' }}>{currentLang.label}</span>
        <span className="material-icons notranslate" style={{ fontSize: '16px' }}>
          {open ? 'expand_less' : 'expand_more'}
        </span>
      </span>

      {open && (
        <ul style={{
          position: 'absolute',
          right: 0,
          top: '100%',
          marginTop: '4px',
          background: '#fff',
          borderRadius: '6px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          listStyle: 'none',
          padding: '4px 0',
          minWidth: '150px',
          zIndex: 1000,
        }}>
          {languages.map((lang) => (
            <li
              key={lang.code}
              role="menuitem"
              tabIndex={0}
              onClick={() => selectLanguage(lang.code)}
              onKeyDown={(e) => { if (e.key === 'Enter') selectLanguage(lang.code); }}
              style={{
                padding: '10px 16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#333',
                background: lang.code === current ? '#f0f0f0' : 'transparent',
                fontSize: '14px',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#f5f5f5'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = lang.code === current ? '#f0f0f0' : 'transparent'; }}
            >
              <span style={{ fontSize: '22px', lineHeight: 1 }}>{lang.flag}</span>
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
