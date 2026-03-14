/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import useAuth from '../hooks/useAuth';



export default function TemporaryDrawer({ state, setState}) {
  const close = () => {
    setState(false)
  }

  const { t } = useTranslation();
  const { logout, user } = useAuth();
  const { email, displayName,photoURL } = user;
 

  return (
    <div >
      {
        state && (
            <div>
            <ul className="sidenav" id="mobile-demo" style={{ transform: 'translateX(0%)' }}>
              <li onClick={close}>
                <div className="user-view">
                  <div className="background">
                    <img src= "/assets/images/site/Office.jpg" />
                  </div>
                  <Link to="#user">
                    <img className="circle" src= {photoURL} />
                  </Link>
                  <span className="white-text name">{`${displayName}`}</span>
                  <span className="white-text email">{email}</span>
                </div>
              </li>
              <li className="no-padding">
                <ul className="collapsible collapsible-accordion">
                  <li className="active">
                    <div className="collapsible-body" style={{ display: 'block' }}>
                      <ul>
                        <li onClick={close}>
                          <Link className="sidenav-close" to="/">
                            <span className="material-icons notranslate">home</span>{t('common.home')}
                          </Link>
                        </li>
                        <li onClick={close}>
                          <Link className="sidenav-close" to="/user/deposits/list">
                            <span className="material-icons notranslate">input</span>{t('dashboard.deposits')}
                          </Link>
                        </li>
                        <li onClick={close}>
                          <Link className="sidenav-close" to="/user/account">
                            <span className="material-icons notranslate">account_circle</span>{t('dashboard.myAccount')}
                          </Link>
                        </li>
      
                        <li onClick={close}>
                          <Link className="sidenav-close" to="/user/withdrawals">
                            <span className="material-icons notranslate">payments</span>{t('dashboard.withdrawals')}
                          </Link>
                        </li>
                        <li onClick={close}>
                          <Link className="sidenav-close" to="/user/deposits/buy">
                            <span className="material-icons notranslate">shopping_bag</span>{t('dashboard.buyCrypto')}
                          </Link>
                        </li>
                        <li>
                          <a href="#" className="sidenav-close" onClick={() => logout()}>
                            <span className="material-icons notranslate">power_settings_new</span>{t('common.signOut')}
                          </a>
                        </li>
                      </ul>
                    </div>
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
