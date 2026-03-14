/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */

// components
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function Home() {
  const { t } = useTranslation();
  return (
    <Page title="About-us">
      <div className="app-relative hero-mixed">
        <div className="overlay1" />

        <div className="fade-appear-done fade-enter-done" style={{ paddingBottom: '6rem', paddingTop: '2rem' }}>
          <h1 className="center app-relative white-text">{t('about.title')}</h1>
          <p className="app-relative center white-text" />
        </div>
      </div>

      <main className style={{ minHeight: '80vh' }}>
        <section className="container app-py-3 fade-appear-done fade-enter-done">
          <div className="card-panel">
            <div className="container">
              <span>
                <br />
              </span>
              <span>
                {t('about.paragraph1')}
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                {t('about.paragraph2')}
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                {t('about.paragraph3')}
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                {t('about.paragraph4')}
                <br />
              </span>
              <span>
                {' '}
                <br />
              </span>
              <span>
                {' '}
                <br />
              </span>
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
}
