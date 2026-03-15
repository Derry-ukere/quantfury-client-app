import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';
import { Appdetails } from '../config';

const font = "'Inter', sans-serif";

export default function AboutUs() {
  const { t } = useTranslation();
  const appName = Appdetails.name || 'QuantFury';

  return (
    <Page title="About Us">
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, #011222 0%, #0a2a52 50%, #0a49b7 100%)',
          color: '#fff',
          padding: '80px 0 70px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(10,73,183,0.3) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{
            fontFamily: font, fontWeight: 600, fontSize: '13px',
            textTransform: 'uppercase', letterSpacing: '2px', color: '#6db3f8', marginBottom: '16px',
          }}>
            {t('about.title')}
          </p>
          <h1 style={{
            fontFamily: font, fontWeight: 800, fontSize: '42px',
            lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.5px',
          }}>
            {t('about.heroHeading')}
          </h1>
          <p style={{
            fontFamily: font, fontWeight: 400, fontSize: '17px',
            color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7,
          }}>
            {t('about.heroSubtitle')}
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className="row">
            <div className="col l5 s12" style={{ marginBottom: '24px' }}>
              <p style={{
                fontFamily: font, fontWeight: 600, fontSize: '12px',
                textTransform: 'uppercase', letterSpacing: '2px', color: '#0a49b7', marginBottom: '12px',
              }}>
                {t('about.missionLabel')}
              </p>
              <h2 style={{
                fontFamily: font, fontWeight: 800, fontSize: '30px',
                color: '#011222', lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '20px',
              }}>
                {t('about.missionTitle')}
              </h2>
              <img
                src={Appdetails.logo}
                alt={appName}
                className="responsive-img"
                style={{ maxHeight: '60px', marginBottom: '16px' }}
              />
            </div>
            <div className="col l7 s12">
              <p style={{
                fontFamily: font, fontWeight: 400, fontSize: '15px',
                lineHeight: 1.9, color: '#3d4f63', marginBottom: '24px',
              }}>
                {t('about.paragraph1')}
              </p>
              <p style={{
                fontFamily: font, fontWeight: 400, fontSize: '15px',
                lineHeight: 1.9, color: '#3d4f63',
              }}>
                {t('about.paragraph2')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology */}
      <div style={{ padding: '80px 0', background: '#f8f9fb' }}>
        <div className="container">
          <div className="center-align">
            <h2 style={{
              fontFamily: font, fontWeight: 800, fontSize: '30px',
              color: '#011222', lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '12px',
            }}>
              {t('about.techTitle')}
            </h2>
            <p style={{
              fontFamily: font, fontWeight: 400, fontSize: '15px',
              color: '#5a6a7e', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.7,
            }}>
              {t('about.techSubtitle')}
            </p>
          </div>
          <div className="row">
            <div className="col l6 s12" style={{ marginBottom: '24px' }}>
              <p style={{
                fontFamily: font, fontWeight: 400, fontSize: '15px',
                lineHeight: 1.9, color: '#3d4f63', marginBottom: '24px',
              }}>
                {t('about.paragraph3')}
              </p>
              <p style={{
                fontFamily: font, fontWeight: 400, fontSize: '15px',
                lineHeight: 1.9, color: '#3d4f63',
              }}>
                {t('about.paragraph4')}
              </p>
            </div>
            <div className="col l6 s12">
              <div className="row" style={{ marginBottom: 0 }}>
                {[
                  { icon: 'security', title: t('home.secureAndPrivate'), desc: t('home.secureAndPrivateDesc'), bg: 'rgba(10,73,183,0.08)', color: '#0a49b7' },
                  { icon: 'flash_on', title: t('home.fastWithdrawals'), desc: t('home.fastWithdrawalsDesc'), bg: 'rgba(34,176,125,0.08)', color: '#22b07d' },
                  { icon: 'support_agent', title: t('home.support247'), desc: t('home.support247Desc'), bg: 'rgba(255,135,0,0.08)', color: '#ff8700' },
                  { icon: 'devices', title: t('home.friendlyInterface'), desc: t('home.friendlyInterfaceDesc'), bg: 'rgba(181,72,198,0.08)', color: '#b548c6' },
                ].map((item) => (
                  <div className="col l6 s12" key={item.title} style={{ marginBottom: '16px' }}>
                    <div style={{
                      background: '#fff',
                      borderRadius: '14px',
                      padding: '24px 18px',
                      border: '1px solid #eef0f4',
                      minHeight: '160px',
                    }}>
                      <div style={{
                        width: '44px', height: '44px', borderRadius: '12px', background: item.bg,
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px',
                      }}>
                        <span className="material-icons notranslate" style={{ fontSize: '22px', color: item.color }}>
                          {item.icon}
                        </span>
                      </div>
                      <div style={{
                        fontFamily: font, fontWeight: 700, fontSize: '14px',
                        color: '#011222', marginBottom: '6px',
                      }}>
                        {item.title}
                      </div>
                      <div style={{
                        fontFamily: font, fontWeight: 400, fontSize: '12px',
                        color: '#5a6a7e', lineHeight: 1.6,
                      }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{
        background: 'linear-gradient(135deg, #0a49b7 0%, #0a2a52 100%)',
        padding: '70px 0', textAlign: 'center',
      }}>
        <div className="container">
          <h3 style={{
            fontFamily: font, fontWeight: 800, fontSize: '28px',
            color: '#fff', marginBottom: '14px', letterSpacing: '-0.3px',
          }}>
            {t('about.ctaTitle')}
          </h3>
          <p style={{
            fontFamily: font, fontWeight: 400, fontSize: '15px',
            color: 'rgba(255,255,255,0.7)', maxWidth: '440px', margin: '0 auto 32px', lineHeight: 1.7,
          }}>
            {t('about.ctaSubtitle')}
          </p>
          <Link to="/signup" className="btn btn-large" style={{
            background: '#fff', color: '#0a49b7', borderRadius: '8px', fontFamily: font,
            fontWeight: 700, fontSize: '14px', padding: '0 36px', height: '48px', lineHeight: '48px',
            textTransform: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          }}>
            {t('landing.getStarted')}
          </Link>
        </div>
      </div>
    </Page>
  );
}
