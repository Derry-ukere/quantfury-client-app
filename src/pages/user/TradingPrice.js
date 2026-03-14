import React from 'react';
import { useTranslation } from 'react-i18next';

const TradingPrice = () => {
  const { t } = useTranslation();
  return (
  <div>
    <main className="app-py-1" style={{ height: '100vh' }}>
      <div className="fade-appear-done fade-enter-done">
        <div className="container center">
          <h2 className=" center">{t('tradingPlans.title')}</h2>
          <br />
          <div className="row">
            <div className="col l3 s12 wow fadeInUp slow">
              <div className="card hoverable app-py-1 app-px-2" style={{ borderRadius: '10px' }}>
                <center>
                  <span>{t('tradingPlans.starterPackage')}</span>
                  <br />
                  <span className="alt-color" style={{ fontSize: '38px', fontWeight: 'bold' }}>
                    $1000
                  </span>
                  <br />
                  <span className="alt-color">{t('tradingPlans.minimum')}</span>
                  <br />
                  <br />
                  <p>{t('tradingPlans.minDeposit')} $1000</p>
                  <p>{t('tradingPlans.maxDeposit')} $10000 </p>
                  <p>{t('tradingPlans.referralBonus')}</p>
                  <p>{t('tradingPlans.fullItSupport')}</p>
                  <br />
                  <a className="btn " href="/user/deposits/crypto/1000">
                    {t('tradingPlans.purchasePlan')}
                  </a>
                </center>
              </div>
            </div>
            <div className="col l3 s12 wow fadeInUp slow">
              <div className="card hoverable app-py-1 app-px-2" style={{ borderRadius: '10px' }}>
                <center>
                  <span>{t('tradingPlans.premiumPackage')}</span>
                  <br />
                  <span className="alt-color" style={{ fontSize: '38px', fontWeight: 'bold' }}>
                    $10000
                  </span>
                  <br />
                  <span className="alt-color">{t('tradingPlans.minimum')}</span>
                  <br />
                  <br />
                  <p>{t('tradingPlans.minDeposit')} $10000</p>
                  <p>{t('tradingPlans.maxDeposit')} $20000 </p>
                  <p>{t('tradingPlans.referralBonus')}</p>
                  <p>{t('tradingPlans.fullItSupport')}</p>
                  <br />
                  <a className="btn " href="/user/deposits/crypto/20000">
                    {t('tradingPlans.purchasePlan')}
                  </a>
                </center>
              </div>
            </div>
            <div className="col l3 s12 wow fadeInUp slow">
              <div className="card hoverable app-py-1 app-px-2" style={{ borderRadius: '10px' }}>
                <center>
                  <span>{t('tradingPlans.masterPackage')}</span>
                  <br />
                  <span className="alt-color" style={{ fontSize: '38px', fontWeight: 'bold' }}>
                    $20000
                  </span>
                  <br />
                  <span className="alt-color">{t('tradingPlans.minimum')}</span>
                  <br />
                  <br />
                  <p>{t('tradingPlans.minDeposit')} $20000</p>
                  <p>{t('tradingPlans.maxDeposit')} $50000 </p>
                  <p>{t('tradingPlans.referralBonus')}</p>
                  <p>{t('tradingPlans.fullItSupport')}</p>
                  <br />
                  <a className="btn " href="/user/deposits/crypto/50000">
                    {t('tradingPlans.purchasePlan')}
                  </a>
                </center>
              </div>
            </div>
            <div className="col l3 s12 wow fadeInUp slow">
              <div className="card hoverable app-py-1 app-px-2" style={{ borderRadius: '10px' }}>
                <center>
                  <span>{t('tradingPlans.proPackage')}</span>
                  <br />
                  <span className="alt-color" style={{ fontSize: '38px', fontWeight: 'bold' }}>
                    $50000
                  </span>
                  <br />
                  <span className="alt-color">{t('tradingPlans.minimum')}</span>
                  <br />
                  <br />
                  <p>{t('tradingPlans.minDeposit')} $50000</p>
                  <p>{t('tradingPlans.maxDeposit')} $999999 </p>
                  <p>{t('tradingPlans.referralBonus')}</p>
                  <p>{t('tradingPlans.fullItSupport')}</p>
                  <br />
                  <a className="btn " href="/user/deposits/crypto/999999">
                    {t('tradingPlans.purchasePlan')}
                  </a>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

}

export default TradingPrice;
