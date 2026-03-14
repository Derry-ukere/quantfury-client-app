/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();
  return (
    <div>
      <main className="app-py-1" style={{ height: '100vh' }}>
        <div className="fade-appear-done fade-enter-done">
          <div className="container center">
            <div>
              <b>{t('pricing.title')}</b>
            </div>
            <br />
            <div className="container">
              <ul className="collection">
                <Link className="collection-item bg" to="/user/deposits/trading">
                  <li>{t('pricing.tradingPlans')}</li>
                </Link>
                <Link className="collection-item bg" to="/user/deposits/mining">
                  <li>{t('pricing.miningPlans')}</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
