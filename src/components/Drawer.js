/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {Appdetails} from '../config';


export default function TemporaryDrawer({ state, setState}) {
  const close = () => {
    setState(false)
  }
  const { t } = useTranslation();

  return (
    <div >
      {
        state && (
          <div >
            <ul className="sidenav" id="mobile-demo" style={{ transform: 'translateX(0%)' }}>
              <li onClick={close}>
                <div className="user-view" >
                  <div className="background">
                    <img
                      src={Appdetails.logo}
                      className="responsive-img"
                      alt="logo"
                      style={{ height: '19vh' }}
                    />
                  </div>
                </div>
              </li>
              <li className="no-padding">
                <ul>
                  <li onClick={close}>
                    <Link className="sidenav-close" to="/">
                      <span className="material-icons notranslate">home</span>{t('common.home')}
                    </Link>
                  </li>
                  <li onClick={close}>
                    <Link className="sidenav-close" to="/signin">
                      <span className="material-icons notranslate">person_outline</span>{t('common.signIn')}
                    </Link>
                  </li>
                  <li onClick={close}>
                    <Link className="sidenav-close" to="/signup">
                      <span className="material-icons notranslate">person_add</span>{t('common.signUp')}
                    </Link>
                  </li>
                  <li onClick={close}>
                    <Link className="sidenav-close" to="/pages/contact">
                      <span className="material-icons notranslate">mail_outline</span>{t('common.contactUs')}
                    </Link>
                  </li>
                  <li onClick={close}>
                    <Link className="sidenav-close" to="/pages/about-us">
                      <span className="material-icons notranslate">people</span>{t('common.aboutUs')}
                    </Link>
                  </li>
                  <li onClick={close}>
                    <Link className="sidenav-close" to="/pages/privacy-policy">
                      <span className="material-icons notranslate">lock_open</span>{t('nav.privacyPolicies')}
                    </Link>
                  </li>
                  <li onClick={close}>
                    <Link className="sidenav-close" to="/pages/terms-of-service">
                      <span className="material-icons notranslate">folder_open</span>{t('nav.termsOfService')}
                    </Link>
                  </li>
                  <li onClick={close}>
                    <Link className="sidenav-close" to="/pages/forex-trading">
                      <span className="material-icons notranslate">wysiwyg</span>{t('nav.forexTrading')}
                    </Link>
                  </li>
                  <li onClick={close}>
                    <Link className="sidenav-close" to="/pages/stocks-trading">
                      <span className="material-icons notranslate">insert_chart_outlined</span>{t('nav.stocksTrading')}
                    </Link>
                  </li>
                  <li onClick={close}>
                    <Link className="sidenav-close" to="/pages/crypto-trading">
                      <span className="material-icons notranslate">copyright</span>{t('nav.cryptoTrading')}
                    </Link>
                  </li>
                  <li onClick={close}>
                    <Link className="sidenav-close" to="/pages/options-trading">
                      <span className="material-icons notranslate">donut_large</span>{t('nav.optionsTrading')}
                    </Link>
                  </li>
                  <li onClick={close}>
                    <Link className="sidenav-close" to="/pages/copy-expert-traders">
                      <span className="material-icons notranslate">content_copy</span>{t('nav.copyExpertTraders')}
                    </Link>
                  </li>
                  <li onClick={close}>
                    <Link className="sidenav-close" to="/pages/about-mining">
                      <span className="material-icons notranslate">copyright</span>{t('nav.aboutMining')}
                    </Link>
                  </li>
                  <li onClick={close}>
                    <Link className="sidenav-close" to="/pages/bitcoin-mining">
                      <span className="material-icons notranslate">copyright</span>{t('nav.bitcoinMining')}
                    </Link>
                  </li>
                  <li onClick={close}>
                    <Link className="sidenav-close" to="/pages/dogecoin-mining">
                      <span className="material-icons notranslate">copyright</span>{t('nav.dogecoinMining')}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        )
      }
        
    </div>
  );
}
