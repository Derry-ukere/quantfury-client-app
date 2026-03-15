/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Appdetails } from '../config';
import { getSettingsDetails } from '../utils/compute';
import LanguageSwitcher from './LanguageSwitcher';

const font = "'Inter', sans-serif";

function Footer() {
  const { t } = useTranslation();
  const [settings, setSettings] = useState({});

  useEffect(() => {
    async function fetchData() {
      const settingsObject = await getSettingsDetails();
      setSettings(settingsObject);
    }
    fetchData();
  }, []);

  const linkStyle = {
    fontFamily: font,
    fontWeight: 400,
    fontSize: '14px',
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
    transition: 'color 0.2s',
  };

  const headingStyle = {
    fontFamily: font,
    fontWeight: 700,
    fontSize: '14px',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '18px',
  };

  return (
    <footer style={{ background: '#011222', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container" style={{ padding: '48px 0 32px' }}>
        <div className="row" style={{ marginBottom: 0 }}>
          {/* Brand */}
          <div className="col l5 s12" style={{ marginBottom: '32px' }}>
            <img src={Appdetails.logo} style={{ height: '40px', marginBottom: '16px' }} />
            {(settings.contactDetails?.email || Appdetails.email) && (
              <p style={{ fontFamily: font, fontSize: '13px', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-icons notranslate" style={{ fontSize: '16px' }}>mail</span>
                {settings.contactDetails?.email || Appdetails.email}
              </p>
            )}
            {Appdetails.phone && (
              <p style={{ fontFamily: font, fontSize: '13px', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-icons notranslate" style={{ fontSize: '16px' }}>phone</span>
                {Appdetails.phone}
              </p>
            )}
          </div>

          {/* Quick Links */}
          <div className="col l3 s6" style={{ marginBottom: '24px' }}>
            <div style={headingStyle}>{t('footer.quickLinks')}</div>
            <Link to="/" style={linkStyle}>{t('common.home')}</Link>
            <Link to="/about" style={linkStyle}>{t('common.aboutUs')}</Link>
            <Link to="/contact" style={linkStyle}>{t('common.contactUs')}</Link>
          </div>

          {/* Account */}
          <div className="col l2 s6" style={{ marginBottom: '24px' }}>
            <div style={headingStyle}>{t('footer.myAccount')}</div>
            <Link to="/signin" style={linkStyle}>{t('common.signIn')}</Link>
            <Link to="/signup" style={linkStyle}>{t('footer.createAccount')}</Link>
          </div>

          {/* Language */}
          <div className="col l2 s12" style={{ marginBottom: '24px' }}>
            <div style={headingStyle}>{t('languageSwitcher.language')}</div>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Divider + Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '20px',
          marginTop: '12px',
        }}>
          <p style={{
            fontFamily: font, fontWeight: 400, fontSize: '12px',
            color: 'rgba(255,255,255,0.35)', margin: 0, textAlign: 'center',
          }}>
            {new Date().getFullYear()} {Appdetails.name || 'QuantFury'}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
