/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Footer from '../../components/Footer';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { Appdetails } from '../../config';

const font = "'Inter', sans-serif";

export default function MainLayout() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { to: '/', label: t('common.home') },
    { to: '/about', label: t('common.aboutUs') },
    { to: '/contact', label: t('common.contactUs') },
  ];

  const isActive = (path) => pathname === path;

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          background: '#011222',
          padding: '0 20px',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '68px',
          }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Appdetails.logo} alt="logo" style={{ height: '36px' }} />
          </Link>

          {/* Desktop Nav */}
          <div
            className="hide-on-med-and-down"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: font,
                  fontWeight: isActive(link.to) ? 600 : 400,
                  fontSize: '14px',
                  color: isActive(link.to) ? '#fff' : 'rgba(255,255,255,0.65)',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  background: isActive(link.to) ? 'rgba(255,255,255,0.08)' : 'transparent',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}

            <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.12)', margin: '0 8px' }} />

            <Link
              to="/signin"
              style={{
                fontFamily: font, fontWeight: 500, fontSize: '14px',
                color: '#fff', padding: '8px 20px', textDecoration: 'none',
              }}
            >
              {t('common.signIn')}
            </Link>
            <Link
              to="/signup"
              className="btn"
              style={{
                background: '#0a49b7',
                borderRadius: '8px',
                fontFamily: font,
                fontWeight: 600,
                fontSize: '13px',
                textTransform: 'none',
                height: '38px',
                lineHeight: '38px',
                padding: '0 22px',
                boxShadow: '0 2px 8px rgba(10,73,183,0.3)',
              }}
            >
              {t('common.signUp')}
            </Link>
            <div style={{ marginLeft: '8px' }}>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="hide-on-large-only"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
          >
            <span className="material-icons notranslate" style={{ color: '#fff', fontSize: '26px' }}>
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div
            className="hide-on-large-only"
            style={{
              padding: '16px 20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              background: '#011222',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: font, fontWeight: isActive(link.to) ? 600 : 400,
                  fontSize: '15px', color: '#fff', textDecoration: 'none',
                  padding: '12px 16px', borderRadius: '8px',
                  background: isActive(link.to) ? 'rgba(255,255,255,0.06)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '8px 0' }} />
            <Link
              to="/signin"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: font, fontWeight: 400, fontSize: '15px',
                color: '#fff', textDecoration: 'none', padding: '12px 16px',
              }}
            >
              {t('common.signIn')}
            </Link>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: font, fontWeight: 600, fontSize: '14px',
                color: '#fff', textDecoration: 'none', padding: '12px 20px',
                background: '#0a49b7', borderRadius: '8px', textAlign: 'center', marginTop: '4px',
              }}
            >
              {t('common.signUp')}
            </Link>
            <div style={{ marginTop: '8px', paddingLeft: '12px' }}>
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </nav>

      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
