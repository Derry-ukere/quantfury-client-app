/* eslint-disable arrow-body-style */
import React from 'react';
import { useTranslation } from 'react-i18next';

const MiningPrice = () => {
  const { t } = useTranslation();
  return (
    <div>
      <main className="app-py-1" style={{ height: '100vh' }}>
        <div className="fade-appear-done fade-enter-done">
          <div className="container center">
            <h2 className=" center">{t('miningPlans.title')}</h2>
            <br />
            <div className="row">
              <div className="col l3 s12 wow fadeInUp slow">
                <div className="card hoverable app-py-1 app-px-2" style={{ borderRadius: '10px' }}>
                  <center>
                    <span>{t('miningPlans.weekContract1')}</span>
                    <br />
                    <span className="alt-color" style={{ fontSize: '38px', fontWeight: 'bold' }}>
                      $500
                    </span>
                    <br />
                    <span className="alt-color">{t('tradingPlans.minimum')}</span>
                    <br />
                    <br />
                    <p>{t('tradingPlans.minDeposit')} $500</p>
                    <p>{t('tradingPlans.maxDeposit')} $999 </p>
                    <p>{t('tradingPlans.referralBonus')}</p>
                    <p>{t('tradingPlans.fullItSupport')}</p>
                    <br />
                    <a className="btn " href="/user/deposits/crypto">
                      {t('tradingPlans.purchasePlan')}
                    </a>
                  </center>
                </div>
              </div>
              <div className="col l3 s12 wow fadeInUp slow">
                <div className="card hoverable app-py-1 app-px-2" style={{ borderRadius: '10px' }}>
                  <center>
                    <span>{t('miningPlans.weekContract2')}</span>
                    <br />
                    <span className="alt-color" style={{ fontSize: '38px', fontWeight: 'bold' }}>
                      $1000
                    </span>
                    <br />
                    <span className="alt-color">{t('tradingPlans.minimum')}</span>
                    <br />
                    <br />
                    <p>{t('tradingPlans.minDeposit')} $1000</p>
                    <p>{t('tradingPlans.maxDeposit')} $2499 </p>
                    <p>{t('tradingPlans.referralBonus')}</p>
                    <p>{t('tradingPlans.fullItSupport')}</p>
                    <br />
                    <a className="btn " href="/user/deposits/crypto">
                      {t('tradingPlans.purchasePlan')}
                    </a>
                  </center>
                </div>
              </div>
              <div className="col l3 s12 wow fadeInUp slow">
                <div className="card hoverable app-py-1 app-px-2" style={{ borderRadius: '10px' }}>
                  <center>
                    <span>{t('miningPlans.weekContract3')}</span>
                    <br />
                    <span className="alt-color" style={{ fontSize: '38px', fontWeight: 'bold' }}>
                      $2500
                    </span>
                    <br />
                    <span className="alt-color">{t('tradingPlans.minimum')}</span>
                    <br />
                    <br />
                    <p>{t('tradingPlans.minDeposit')} $2500</p>
                    <p>{t('tradingPlans.maxDeposit')} $5499 </p>
                    <p>{t('tradingPlans.referralBonus')}</p>
                    <p>{t('tradingPlans.fullItSupport')}</p>
                    <br />
                    <a className="btn " href="/user/deposits/crypto">
                      {t('tradingPlans.purchasePlan')}
                    </a>
                  </center>
                </div>
              </div>
              <div className="col l3 s12 wow fadeInUp slow">
                <div className="card hoverable app-py-1 app-px-2" style={{ borderRadius: '10px' }}>
                  <center>
                    <span>{t('miningPlans.weekContract4')}</span>
                    <br />
                    <span className="alt-color" style={{ fontSize: '38px', fontWeight: 'bold' }}>
                      $5500
                    </span>
                    <br />
                    <span className="alt-color">{t('tradingPlans.minimum')}</span>
                    <br />
                    <br />
                    <p>{t('tradingPlans.minDeposit')} $5500</p>
                    <p>{t('tradingPlans.maxDeposit')} $ </p>
                    <p>{t('tradingPlans.referralBonus')}</p>
                    <p>{t('tradingPlans.fullItSupport')}</p>
                    <br />
                    <a className="btn " href="/user/deposits/crypto">
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
};

export default MiningPrice;
