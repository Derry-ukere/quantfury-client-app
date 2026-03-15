import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';
import { Appdetails } from '../config';

const font = "'Inter', sans-serif";

export default function ContactUs() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    { icon: 'mail', value: Appdetails.email, label: t('common.email') },
    { icon: 'phone', value: Appdetails.phone, label: t('contact.phoneLabel') },
    { icon: 'location_on', value: Appdetails.address, label: t('contact.addressLabel') },
  ].filter((item) => item.value);

  return (
    <Page title="Contact Us">
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
            {t('contact.subtitle')}
          </p>
          <h1 style={{
            fontFamily: font, fontWeight: 800, fontSize: '42px',
            lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.5px',
          }}>
            {t('contact.title')}
          </h1>
          <p style={{
            fontFamily: font, fontWeight: 400, fontSize: '17px',
            color: 'rgba(255,255,255,0.7)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7,
          }}>
            {t('contact.description')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: '80px 0', background: '#f8f9fb' }}>
        <div className="container">
          <div className="row">
            {/* Contact Info */}
            <div className="col l5 s12" style={{ marginBottom: '32px' }}>
              <h3 style={{
                fontFamily: font, fontWeight: 800, fontSize: '24px',
                color: '#011222', marginBottom: '8px', letterSpacing: '-0.3px',
              }}>
                {t('contact.infoTitle')}
              </h3>
              <p style={{
                fontFamily: font, fontWeight: 400, fontSize: '14px',
                color: '#5a6a7e', lineHeight: 1.7, marginBottom: '32px',
              }}>
                {t('contact.infoDesc')}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {contactItems.map((item) => (
                  <div key={item.icon} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '12px',
                      background: 'rgba(10,73,183,0.08)', display: 'flex',
                      alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <span className="material-icons notranslate" style={{ fontSize: '22px', color: '#0a49b7' }}>
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <div style={{
                        fontFamily: font, fontWeight: 600, fontSize: '12px',
                        textTransform: 'uppercase', letterSpacing: '0.5px',
                        color: '#5a6a7e', marginBottom: '4px',
                      }}>
                        {item.label}
                      </div>
                      <div style={{
                        fontFamily: font, fontWeight: 500, fontSize: '15px', color: '#011222',
                      }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div style={{
                marginTop: '36px', padding: '24px',
                background: '#fff', borderRadius: '14px', border: '1px solid #eef0f4',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px',
                }}>
                  <span className="material-icons notranslate" style={{ fontSize: '20px', color: '#22b07d' }}>
                    schedule
                  </span>
                  <span style={{
                    fontFamily: font, fontWeight: 700, fontSize: '14px', color: '#011222',
                  }}>
                    {t('contact.hoursTitle')}
                  </span>
                </div>
                <p style={{
                  fontFamily: font, fontWeight: 400, fontSize: '13px',
                  color: '#5a6a7e', lineHeight: 1.7, margin: 0,
                }}>
                  {t('contact.hoursDesc')}
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="col l6 offset-l1 s12">
              <div style={{
                background: '#fff', borderRadius: '16px', padding: '40px 32px',
                border: '1px solid #eef0f4', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}>
                {submitted ? (
                  <div className="center-align" style={{ padding: '40px 0' }}>
                    <div style={{
                      width: '64px', height: '64px', borderRadius: '50%',
                      background: 'rgba(76,175,80,0.1)', display: 'inline-flex',
                      alignItems: 'center', justifyContent: 'center', marginBottom: '20px',
                    }}>
                      <span className="material-icons notranslate" style={{ fontSize: '32px', color: '#4caf50' }}>
                        check
                      </span>
                    </div>
                    <h4 style={{
                      fontFamily: font, fontWeight: 700, fontSize: '20px',
                      color: '#011222', marginBottom: '8px',
                    }}>
                      {t('contact.successTitle')}
                    </h4>
                    <p style={{
                      fontFamily: font, fontWeight: 400, fontSize: '14px',
                      color: '#5a6a7e', lineHeight: 1.6,
                    }}>
                      {t('contact.successDesc')}
                    </p>
                  </div>
                ) : (
                  <>
                    <h4 style={{
                      fontFamily: font, fontWeight: 700, fontSize: '20px',
                      color: '#011222', marginBottom: '4px', marginTop: 0,
                    }}>
                      {t('contact.formTitle')}
                    </h4>
                    <p style={{
                      fontFamily: font, fontWeight: 400, fontSize: '13px',
                      color: '#5a6a7e', marginBottom: '28px',
                    }}>
                      {t('contact.formSubtitle')}
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="name" style={{
                          fontFamily: font, fontWeight: 600, fontSize: '13px',
                          color: '#011222', display: 'block', marginBottom: '6px',
                        }}>
                          {t('contact.name')}
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          style={{
                            width: '100%', padding: '12px 14px', borderRadius: '8px',
                            border: '1px solid #dde0e7', fontFamily: font, fontSize: '14px',
                            outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => { e.target.style.borderColor = '#0a49b7'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#dde0e7'; }}
                        />
                      </div>
                      <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="email" style={{
                          fontFamily: font, fontWeight: 600, fontSize: '13px',
                          color: '#011222', display: 'block', marginBottom: '6px',
                        }}>
                          {t('common.email')}
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          style={{
                            width: '100%', padding: '12px 14px', borderRadius: '8px',
                            border: '1px solid #dde0e7', fontFamily: font, fontSize: '14px',
                            outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => { e.target.style.borderColor = '#0a49b7'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#dde0e7'; }}
                        />
                      </div>
                      <div style={{ marginBottom: '24px' }}>
                        <label htmlFor="message" style={{
                          fontFamily: font, fontWeight: 600, fontSize: '13px',
                          color: '#011222', display: 'block', marginBottom: '6px',
                        }}>
                          {t('contact.message')}
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          style={{
                            width: '100%', padding: '12px 14px', borderRadius: '8px',
                            border: '1px solid #dde0e7', fontFamily: font, fontSize: '14px',
                            outline: 'none', boxSizing: 'border-box', resize: 'vertical',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => { e.target.style.borderColor = '#0a49b7'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#dde0e7'; }}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-large"
                        style={{
                          width: '100%', background: '#0a49b7', borderRadius: '8px',
                          fontFamily: font, fontWeight: 600, fontSize: '14px',
                          textTransform: 'none', height: '48px', lineHeight: '48px',
                          boxShadow: '0 4px 14px rgba(10,73,183,0.3)',
                        }}
                      >
                        {t('contact.sendMessage')}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
