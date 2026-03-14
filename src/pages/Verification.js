/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuth } from 'firebase/auth';
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert } from '@mui/material';


// redux
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from '../redux/store';
import { sendEmail } from '../redux/slices/user/emailVerification';


const Verification = () => {
  const { t } = useTranslation();
  const { isVerificationEmailSent, error, isLoading } = useSelector((state) => state.emailVerification);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = getAuth();
  const handleClick = () => {
    dispatch(sendEmail())
  }

  React.useEffect(() => {
  if(isVerificationEmailSent){
    navigate('/user/signup/step-four');
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVerificationEmailSent])

  return (
    <div>
      <div className="row">
        <div className="col l4 s12 offset-l4">
          <br />
          <br />
          <div className="card-panel" style={{ borderRadius: '10px' }}>
            <div className="container">
              {error && <Alert severity="error">{error}</Alert>}
              <center>
                <h3 className="btn-color">{t('verification.title')}</h3>
                <br />
                <p>
                  {t('verification.emailSentTo')} <b>{auth.currentUser.email}</b>
                </p>
                <br />
                <p>{t('verification.resendInfo')}</p>
                <br />
                <LoadingButton type="submit" variant="contained" color='info' className="btn btn-full" loading={isLoading} onClick = {handleClick}>
                  {t('verification.confirmEmail')}
                </LoadingButton>
                <br />
                <br />
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
