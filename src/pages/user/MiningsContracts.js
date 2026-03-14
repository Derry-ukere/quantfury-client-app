/* eslint-disable arrow-body-style */
import React from 'react'
import { useTranslation } from 'react-i18next';

const MiningsContracts = () => {
  const { t } = useTranslation();
  return (
    <div>
        <main className="app-py-1" style={{height: '100vh'}}>
  <div className="fade-appear-done fade-enter-done">
    <div className="container">
      <div>
        <div className="center"><b>{t('miningContracts.title')}</b></div><br />
        <div className="container">
          <ul className="collection">
            <li className="collection-item app-py-2">
              <p id="no-data" style={{textAlign: 'center'}}><span className="app-font-normal">{t('miningContracts.noContracts')}</span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

export default MiningsContracts