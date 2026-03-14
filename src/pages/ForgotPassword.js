/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/autocomplete-valid */
import React from 'react';

import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';

// redux
import { useDispatch,useSelector } from '../redux/store';
import { sendResetPasswordEmail,handleClose } from '../redux/slices/user/resetPassword';


const ForgotPassword = () => {
  const { t } = useTranslation();
  const { sentRestPasswordEmail, error, isLoading } = useSelector((state) => state.resetPassword);

  const [email, setEmail] = React.useState('')
  const dispatch = useDispatch();


  


  React.useEffect(() => {
    console.log({
      sentRestPasswordEmail,
      error, 
      isLoading
    })
  },[error, isLoading, sentRestPasswordEmail])

  const sendResetPaswword = (e) =>{
    e.preventDefault();
    dispatch(sendResetPasswordEmail(email)).then(() => {
      setEmail('')
    })
  }

  return (
    <div>
    <main className style={{ minHeight: '80vh' }}>
    <Snackbar
          open={sentRestPasswordEmail}
          autoHideDuration={1000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
             {t('auth.emailSent')}
          </Alert>
        </Snackbar>
      <div className="row app-py-0 fade-appear-done fade-enter-done">
        <div className="col s12 m12 l4 offset-l4">
          <br />
          <br />
          <div className="card-panel">
            <center>
              <br />
              <div>
                <p>{t('auth.resetPasswordPrompt')}</p>
                <form autoComplete="off" onSubmit={sendResetPaswword}>
                  <div className="input-field">
                    <label className="active" htmlFor="email">
                      {t('common.email')}
                    </label>
                    <input type="email" id="email" name="email" autoComplete="new-email" required value = {email} onChange = {(e) => setEmail(e.target.value)} />
                  </div>
                  <br />
                  <div>
                    <LoadingButton type="submit"  variant="contained"  color='info' className="btn btn-full" loading = {isLoading}>
                      {t('common.submit')}
                    </LoadingButton>
                  </div>
                </form>
              </div>
              <br />
            </center>
          </div>
        </div>
      </div>
      <br />
    </main>
  </div>
  )
}



export default ForgotPassword;
