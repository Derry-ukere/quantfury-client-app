import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';
import { Appdetails } from '../config';

const styles = {
  section: {
    padding: '80px 0',
  },
  sectionAlt: {
    padding: '80px 0',
    background: '#f8f9fb',
  },
  heading: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 800,
    color: '#011222',
    fontSize: '32px',
    lineHeight: 1.2,
    marginBottom: '12px',
    letterSpacing: '-0.5px',
  },
  subheading: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    color: '#5a6a7e',
    fontSize: '16px',
    lineHeight: 1.7,
    maxWidth: '600px',
    margin: '0 auto 40px',
  },
  cardPanel: {
    borderRadius: '16px',
    padding: '36px 24px',
    minHeight: '240px',
    border: '1px solid #eef0f4',
    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
    transition: 'box-shadow 0.2s ease, transform 0.2s ease',
  },
  iconCircle: (bg) => ({
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    background: bg,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  }),
  cardTitle: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
    fontSize: '17px',
    color: '#011222',
    marginBottom: '8px',
    marginTop: '0',
  },
  cardDesc: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    color: '#5a6a7e',
    fontSize: '14px',
    lineHeight: 1.7,
  },
  btnPrimary: {
    background: '#0a49b7',
    borderRadius: '8px',
    padding: '0 32px',
    height: '48px',
    lineHeight: '48px',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: '14px',
    letterSpacing: '0.3px',
    textTransform: 'none',
    boxShadow: '0 4px 14px rgba(10,73,183,0.3)',
  },
  btnOutline: {
    background: 'transparent',
    border: '2px solid rgba(255,255,255,0.4)',
    borderRadius: '8px',
    padding: '0 32px',
    height: '48px',
    lineHeight: '44px',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: '14px',
    letterSpacing: '0.3px',
    textTransform: 'none',
  },
  statNumber: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 800,
    fontSize: '36px',
    color: '#fff',
    lineHeight: 1,
    marginBottom: '4px',
  },
  statLabel: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: '13px',
    color: 'rgba(255,255,255,0.7)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
};

export default function Landing() {
  const { t } = useTranslation();
  const appName = Appdetails.name || 'QuantFury';

  return (
    <Page title="Home">
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, #011222 0%, #0a2a52 50%, #0a49b7 100%)',
          color: '#fff',
          padding: '100px 0 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle background pattern */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(10,73,183,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(10,73,183,0.2) 0%, transparent 40%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row" style={{ marginBottom: 0 }}>
            <div className="col l7 s12">
              <p style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '13px',
                textTransform: 'uppercase', letterSpacing: '2px', color: '#6db3f8', marginBottom: '16px',
              }}>
                {t('landing.tagline')}
              </p>
              <h1 style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '48px',
                lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-1px',
              }}>
                {t('home.financeRedefined')}
              </h1>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '18px',
                color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '36px', maxWidth: '500px',
              }}>
                {t('home.heroSubtitle')}
              </p>
              <Link to="/signup" className="btn btn-large" style={styles.btnPrimary}>
                {t('landing.getStarted')}
              </Link>
              <Link
                to="/signin"
                className="btn btn-large"
                style={{ ...styles.btnOutline, marginLeft: '12px' }}
              >
                {t('common.signIn')}
              </Link>
            </div>
            <div className="col l5 s12 center-align hide-on-med-and-down" style={{ paddingTop: '20px' }}>
              <img
                src={Appdetails.logo}
                alt={appName}
                className="responsive-img"
                style={{ maxHeight: '180px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ background: '#0a2a52', padding: '32px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="row" style={{ marginBottom: 0 }}>
            {[
              { num: '150+', label: t('landing.statAssets') },
              { num: '24/7', label: t('landing.statSupport') },
              { num: '0%', label: t('landing.statCommission') },
              { num: '100%', label: t('landing.statSecure') },
            ].map((s) => (
              <div className="col l3 m6 s6 center-align" key={s.label} style={{ padding: '12px 0' }}>
                <div style={styles.statNumber}>{s.num}</div>
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Three Steps */}
      <div style={styles.section}>
        <div className="container">
          <div className="center-align">
            <h2 style={styles.heading}>{t('home.threeSimpleSteps')}</h2>
            <p style={styles.subheading}>{t('landing.stepsSubtitle')}</p>
          </div>
          <div className="row">
            {[
              { title: t('home.step1Title'), desc: t('home.step1Desc'), icon: 'person_add', bg: 'rgba(10,73,183,0.1)', color: '#0a49b7' },
              { title: t('home.step2Title'), desc: t('home.step2Desc'), icon: 'account_balance_wallet', bg: 'rgba(34,176,125,0.1)', color: '#22b07d' },
              { title: t('home.step3Title'), desc: t('home.step3Desc'), icon: 'trending_up', bg: 'rgba(255,135,0,0.1)', color: '#ff8700' },
            ].map((step, i) => (
              <div className="col l4 s12" key={step.title}>
                <div className="card-panel center-align" style={styles.cardPanel}>
                  <div style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '48px',
                    color: '#eef0f4', marginBottom: '16px', lineHeight: 1,
                  }}>
                    0{i + 1}
                  </div>
                  <div style={styles.iconCircle(step.bg)}>
                    <span className="material-icons notranslate" style={{ fontSize: '28px', color: step.color }}>
                      {step.icon}
                    </span>
                  </div>
                  <h5 style={styles.cardTitle}>{step.title}</h5>
                  <p style={styles.cardDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div style={styles.sectionAlt}>
        <div className="container">
          <div className="center-align">
            <h2 style={styles.heading}>{t('home.whyChooseUs')}</h2>
            <p style={styles.subheading}>{t('home.whyChooseUsSubtitle')}</p>
          </div>
          <div className="row">
            {[
              { title: t('home.copyTrading'), desc: t('home.copyTradingDesc'), icon: 'groups', bg: 'rgba(181,72,198,0.1)', color: '#b548c6' },
              { title: t('home.tradeForex'), desc: t('home.tradeForexDesc'), icon: 'swap_horiz', bg: 'rgba(10,73,183,0.1)', color: '#0a49b7' },
              { title: t('home.mineCryptocurrencies'), desc: t('home.mineCryptocurrenciesDesc'), icon: 'dns', bg: 'rgba(34,176,125,0.1)', color: '#22b07d' },
              { title: t('home.cfdStocks'), desc: t('home.cfdStocksDesc'), icon: 'candlestick_chart', bg: 'rgba(255,135,0,0.1)', color: '#ff8700' },
            ].map((item) => (
              <div className="col l3 m6 s12" key={item.title} style={{ marginBottom: '16px' }}>
                <div className="card-panel" style={{ ...styles.cardPanel, textAlign: 'left' }}>
                  <div style={styles.iconCircle(item.bg)}>
                    <span className="material-icons notranslate" style={{ fontSize: '26px', color: item.color }}>
                      {item.icon}
                    </span>
                  </div>
                  <h6 style={styles.cardTitle}>{item.title}</h6>
                  <p style={styles.cardDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Features */}
      <div style={styles.section}>
        <div className="container">
          <div className="row valign-wrapper">
            <div className="col l6 s12">
              <p style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '12px',
                textTransform: 'uppercase', letterSpacing: '2px', color: '#0a49b7', marginBottom: '12px',
              }}>
                {t('landing.platformLabel')}
              </p>
              <h2 style={{ ...styles.heading, textAlign: 'left' }}>{t('home.enjoyPlatform')}</h2>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 400, color: '#5a6a7e',
                fontSize: '15px', lineHeight: 1.8, marginBottom: '32px',
              }}>
                {t('home.smoothExperience')}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: 'insights', title: t('home.technicalAnalysis'), desc: t('landing.technicalShort') },
                  { icon: 'shield', title: t('home.riskManagement'), desc: t('landing.riskShort') },
                  { icon: 'dashboard', title: t('home.intuitiveDashboard'), desc: t('home.intuitiveDashboardDesc') },
                ].map((f) => (
                  <div key={f.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={styles.iconCircle('rgba(10,73,183,0.08)')}>
                      <span className="material-icons notranslate" style={{ fontSize: '24px', color: '#0a49b7' }}>
                        {f.icon}
                      </span>
                    </div>
                    <div>
                      <div style={{
                        fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '15px',
                        color: '#011222', marginBottom: '4px',
                      }}>
                        {f.title}
                      </div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#5a6a7e', lineHeight: 1.6 }}>
                        {f.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col l6 s12 hide-on-med-and-down center-align">
              <div style={{
                background: 'linear-gradient(135deg, #011222, #0a49b7)',
                borderRadius: '24px',
                padding: '48px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
              }}>
                <img
                  src={Appdetails.logo}
                  alt={appName}
                  className="responsive-img"
                  style={{ maxHeight: '100px', marginBottom: '12px' }}
                />
                {[
                  { icon: 'flash_on', text: t('home.fastWithdrawals') },
                  { icon: 'devices', text: t('home.friendlyInterface') },
                  { icon: 'verified_user', text: t('home.secureAndPrivate') },
                ].map((item) => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff' }}>
                    <span className="material-icons notranslate" style={{ fontSize: '20px', color: '#6db3f8' }}>
                      {item.icon}
                    </span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '14px' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0a49b7 0%, #0a2a52 100%)',
          padding: '80px 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '36px',
            color: '#fff', marginBottom: '16px', letterSpacing: '-0.5px',
          }}>
            {t('landing.ctaTitle')}
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '16px',
            color: 'rgba(255,255,255,0.7)', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.7,
          }}>
            {t('landing.ctaSubtitle')}
          </p>
          <Link to="/signup" className="btn btn-large" style={{
            background: '#fff', color: '#0a49b7', borderRadius: '8px', fontFamily: "'Inter', sans-serif",
            fontWeight: 700, fontSize: '15px', padding: '0 40px', height: '52px', lineHeight: '52px',
            textTransform: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          }}>
            {t('landing.getStarted')}
          </Link>
        </div>
      </div>
    </Page>
  );
}
