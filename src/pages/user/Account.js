/* eslint-disable arrow-body-style */
import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Account = () => {
  const { t } = useTranslation();
  return (
    <main className="app-py-1" style={{ height: '100vh' }}>
      <div className="fade-appear-done fade-enter-done">
        <br />
        <h1 className="center">{t('settings.title')}</h1>
        <br />
        <div className="container">
          <div className="row">
            <div className="col l6 s12 offset-l3">
              <ul className="collection">
                <Link className="collection-item bg" to="/user/auth/profile">
                  <li>
                    <div
                      style={{
                        padding: '1rem 1rem 0.8rem',
                        background: 'rgb(50, 167, 226)',
                        borderRadius: '10px',
                        display: 'inline-block',
                        marginRight: '1rem',
                      }}
                    >
                      <span
                        className="material-icons notranslate"
                        style={{ fontSize: '30px', margin: '0px', padding: '0px', color: 'white' }}
                      >
                        person
                      </span>
                    </div>
                    {t('settings.myProfile')}
                  </li>
                </Link>
                <Link className="collection-item bg" to="/user/auth/address">
                  <li>
                    <div
                      style={{
                        padding: '1rem 1rem 0.8rem',
                        background: 'rgb(34, 176, 125)',
                        borderRadius: '10px',
                        display: 'inline-block',
                        marginRight: '1rem',
                      }}
                    >
                      <span
                        className="material-icons notranslate"
                        style={{ fontSize: '30px', margin: '0px', padding: '0px', color: 'white' }}
                      >
                        home
                      </span>
                    </div>
                    {t('settings.updateAddress')}
                  </li>
                </Link>
                <Link className="collection-item bg" to="/user/auth/password">
                  <li>
                    <div
                      style={{
                        padding: '1rem 1rem 0.8rem',
                        background: 'rgb(50, 167, 226)',
                        borderRadius: '10px',
                        display: 'inline-block',
                        marginRight: '1rem',
                      }}
                    >
                      <span
                        className="material-icons notranslate"
                        style={{ fontSize: '30px', margin: '0px', padding: '0px', color: 'white' }}
                      >
                        lock
                      </span>
                    </div>
                    {t('settings.changePassword')}
                  </li>
                </Link>
                <Link className="collection-item bg" to="/user/signup/step-four">
                  <li>
                    <div
                      style={{
                        padding: '1rem 1rem 0.8rem',
                        background: 'rgb(82, 82, 152)',
                        borderRadius: '10px',
                        display: 'inline-block',
                        marginRight: '1rem',
                      }}
                    >
                      <span
                        className="material-icons notranslate"
                        style={{ fontSize: '30px', margin: '0px', padding: '0px', color: 'white' }}
                      >
                        verified_user
                      </span>
                    </div>
                    {t('settings.accountVerifications')}
                  </li>
                </Link>
                <Link className="collection-item bg" to="/user/upload-profile-photo">
                  <li>
                    <div
                      style={{
                        padding: '1rem 1rem 0.8rem',
                        background: 'rgb(82, 82, 152)',
                        borderRadius: '10px',
                        display: 'inline-block',
                        marginRight: '1rem',
                      }}
                    >
                      <span
                        className="material-icons notranslate"
                        style={{ fontSize: '30px', margin: '0px', padding: '0px', color: 'white' }}
                      >
                        verified_user
                      </span>
                    </div>
                    {t('settings.uploadProfilePhoto')}
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Account;
