/* eslint-disable arrow-body-style */
import React from 'react'
import { useTranslation } from 'react-i18next';

 const WatchList = () => {
  const { t } = useTranslation();
  return (
    <div>
        <main className="app-py-1" style={{height: '100vh'}}>
  <div className="fade-appear-done fade-enter-done">
    <div className="container ">
      <center>
        <p><b>{t('watchList.title')}</b></p><br /></center><br /><br />
      <div className="container">
        <ul className="collection">
          <li className="collection-item app-py-1">
            <div className="row">
              <div className="col l1 s2">
                <center><img className="cryptoicons" alt='' src="/assets/icons/pair-icon-cardano.img.svg" style={{borderRadius: '5px'}} /></center>
              </div>
              <div className="col l8 s4">
                <p>Cardano</p><span style={{fontSize: '12px'}}>Cardano</span></div>
              <div className="col l2 s4" style={{paddingTop: '10px'}} />
              <div className="col l1 s2" style={{paddingTop: '10px'}}><span className="material-icons" style={{color: 'gold'}}>star</span></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

export default WatchList
