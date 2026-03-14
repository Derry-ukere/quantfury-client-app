/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable arrow-body-style */
import React from 'react'
import { useTranslation } from 'react-i18next';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { t } = useTranslation();
    const user = useAuth();

  return (
    <div>
  <main className="container" style={{height: '100vh'}}>
  <div className="fade-appear-done fade-enter-done">
    <div className="row">
      <div className="col l6 offset-l3 s12">
        <div className="card-panel">
          <center><img src= {`${user.user.photoURL}`} className="circle" width="150px"  height="150px" /><br /> <br />
            <table className="striped"  style={{marginBottom : '100px'}}>
              <tbody>
                <tr>
                  <td style={{textTransform: 'uppercase'}}>{t('profile.email')}</td>
                  <td>{user.user.email}</td>
                </tr>
                <tr>
                  <td style={{textTransform: 'uppercase'}}>{t('profile.mobileNumber')}</td>
                  <td>{user.profile.mobile_number}</td>
                </tr>
                <tr>
                  <td style={{textTransform: 'uppercase'}}>{t('profile.name')}</td>
                  <td>{user.profile.displayName}</td>
                </tr>
                <tr>
                  <td style={{textTransform: 'uppercase'}}>{t('profile.postCode')}</td>
                  <td>{user.profile.post_code}</td>
                </tr>
                <tr>
                  <td style={{textTransform: 'uppercase'}}>{t('profile.city')}</td>
                  <td>{user.profile.city}</td>
                </tr>
                <tr>
                  <td style={{textTransform: 'uppercase'}}>{t('profile.state')}</td>
                  <td>{user.profile.state}</td>
                </tr>
                <tr>
                  <td style={{textTransform: 'uppercase'}}>{t('profile.country')}</td>
                  <td>{user.profile.country}</td>
                </tr>

              </tbody>
            </table>
          </center>
          
         
        </div>
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

export default Profile