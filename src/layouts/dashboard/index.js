/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useAuth from '../../hooks/useAuth';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { Appdetails } from '../../config';

const SIDEBAR_WIDTH = 260;

const navItems = [
  { to: '/user', icon: 'dashboard', labelKey: 'common.home', exact: true },
  { to: '/user/deposits/list', icon: 'account_balance_wallet', labelKey: 'dashboard.deposits' },
  { to: '/user/withdrawals', icon: 'payments', labelKey: 'dashboard.withdrawals' },
  { to: '/user/deposits/buy', icon: 'currency_bitcoin', labelKey: 'dashboard.buyCrypto' },
  { to: '/user/traderoom', icon: 'candlestick_chart', labelKey: 'dashboard.tradingRoom' },
  { to: '/user/trading/traders', icon: 'groups', labelKey: 'dashboard.copyExperts' },
  { to: '/user/trading/markets', icon: 'trending_up', labelKey: 'dashboard.assetMarkets' },
  { to: '/user/trading/watchlist', icon: 'bookmark', labelKey: 'dashboard.savedAssets' },
  { to: '/user/bots', icon: 'smart_toy', labelKey: 'dashboard.aiBots' },
  { to: '/user/mining', icon: 'hardware', labelKey: 'dashboard.mining' },
];

const settingsItems = [
  { to: '/user/account', icon: 'person', labelKey: 'dashboard.myAccount' },
  { to: '/user/auth/profile', icon: 'manage_accounts', labelKey: 'settings.myProfile' },
  { to: '/user/auth/password', icon: 'lock', labelKey: 'settings.changePassword' },
  { to: '/user/kyc', icon: 'verified_user', labelKey: 'settings.accountVerifications' },
];

export default function DashboardLayout() {
  const { t } = useTranslation();
  const { logout, user } = useAuth();
  const { displayName, email, photoURL } = user;
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const isActive = (path, exact) => exact ? pathname === path : pathname.startsWith(path);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0a1929' }}>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1199,
            transition: 'opacity 0.3s',
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: SIDEBAR_WIDTH,
          background: '#011222',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          zIndex: 1200,
          transform: sidebarOpen ? 'translateX(0)' : `translateX(-${SIDEBAR_WIDTH}px)`,
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
        className="dashboard-sidebar"
      >
        {/* Sidebar header */}
        <div style={{
          padding: '20px 20px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Appdetails.logo} alt="logo" style={{ height: 32 }} />
          </Link>
          <button
            type="button"
            onClick={closeSidebar}
            className="sidebar-close-btn"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 4,
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span className="material-icons notranslate" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 22 }}>close</span>
          </button>
        </div>

        {/* User info */}
        <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img
              src={photoURL || '/assets/images/site/camera.png'}
              alt="avatar"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid rgba(255,255,255,0.1)',
              }}
            />
            <div style={{ minWidth: 0 }}>
              <div style={{
                color: '#fff',
                fontWeight: 600,
                fontSize: 14,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                {displayName}
              </div>
              <div style={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: 12,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                {email}
              </div>
            </div>
          </div>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, padding: '12px 12px 0' }}>
          <div style={{ marginBottom: 8 }}>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, padding: '0 8px' }}>
              Menu
            </span>
          </div>
          {navItems.map((item) => {
            const active = isActive(item.to, item.exact);
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeSidebar}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 12px',
                  borderRadius: 8,
                  marginBottom: 2,
                  textDecoration: 'none',
                  color: active ? '#fff' : 'rgba(255,255,255,0.65)',
                  background: active ? 'rgba(10, 73, 183, 0.25)' : 'transparent',
                  fontWeight: active ? 600 : 400,
                  fontSize: 14,
                  transition: 'all 0.15s',
                }}
              >
                <span className="material-icons notranslate" style={{
                  fontSize: 20,
                  color: active ? '#4d8fea' : 'rgba(255,255,255,0.4)',
                }}>
                  {item.icon}
                </span>
                {t(item.labelKey)}
              </Link>
            );
          })}

          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '12px 8px' }} />

          <div style={{ marginBottom: 8 }}>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, padding: '0 8px' }}>
              {t('settings.title')}
            </span>
          </div>
          {settingsItems.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeSidebar}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 12px',
                  borderRadius: 8,
                  marginBottom: 2,
                  textDecoration: 'none',
                  color: active ? '#fff' : 'rgba(255,255,255,0.65)',
                  background: active ? 'rgba(10, 73, 183, 0.25)' : 'transparent',
                  fontWeight: active ? 600 : 400,
                  fontSize: 14,
                  transition: 'all 0.15s',
                }}
              >
                <span className="material-icons notranslate" style={{
                  fontSize: 20,
                  color: active ? '#4d8fea' : 'rgba(255,255,255,0.4)',
                }}>
                  {item.icon}
                </span>
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        {/* Sign out */}
        <div style={{ padding: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <button
            type="button"
            onClick={() => { closeSidebar(); logout(); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 12px',
              borderRadius: 8,
              width: '100%',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              color: 'rgba(255,255,255,0.65)',
              fontSize: 14,
              transition: 'all 0.15s',
              textAlign: 'left',
            }}
          >
            <span className="material-icons notranslate" style={{ fontSize: 20, color: 'rgba(255,255,255,0.4)' }}>
              logout
            </span>
            {t('common.signOut')}
          </button>
        </div>
      </aside>

      {/* Main content area */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          transition: 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        className="dashboard-main"
      >
        {/* Top header bar */}
        <header style={{
          position: 'sticky',
          top: 0,
          zIndex: 1100,
          background: '#011222',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '0 16px',
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 8,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="material-icons notranslate" style={{ color: '#fff', fontSize: 24 }}>menu</span>
            </button>
            <Link to="/" className="dashboard-logo-header" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={Appdetails.logo} alt="logo" style={{ height: 30 }} />
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <LanguageSwitcher />
            <div className="dashboard-header-name" style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: 14,
              fontWeight: 500,
              padding: '0 8px',
            }}>
              {displayName}
            </div>
            <img
              src={photoURL || '/assets/images/site/camera.png'}
              alt="avatar"
              style={{
                width: 34,
                height: 34,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid rgba(255,255,255,0.1)',
              }}
            />
          </div>
        </header>

        {/* Page content */}
        <main style={{ flex: 1, padding: '24px 16px' }}>
          <Outlet />
        </main>
      </div>

      <style>{`
        /* Desktop: sidebar always visible, pushed layout */
        @media (min-width: 1024px) {
          .dashboard-sidebar {
            transform: translateX(0) !important;
          }
          .dashboard-sidebar .sidebar-close-btn {
            display: none !important;
          }
          .dashboard-main {
            margin-left: ${SIDEBAR_WIDTH}px !important;
          }
          .dashboard-logo-header {
            display: none !important;
          }
        }

        /* Mobile: hide user name in header */
        @media (max-width: 599px) {
          .dashboard-header-name {
            display: none !important;
          }
          .dashboard-main main {
            padding: 16px 12px !important;
          }
        }

        /* Tablet */
        @media (min-width: 600px) and (max-width: 1023px) {
          .dashboard-main main {
            padding: 24px 20px !important;
          }
        }

        /* Desktop content padding */
        @media (min-width: 1024px) {
          .dashboard-main main {
            padding: 28px 32px !important;
          }
        }

        /* Sidebar scrollbar styling */
        .dashboard-sidebar::-webkit-scrollbar {
          width: 4px;
        }
        .dashboard-sidebar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        .dashboard-sidebar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
}
