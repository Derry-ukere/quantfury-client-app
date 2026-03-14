/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { Alert } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';
import useAuth from '../../../hooks/useAuth';
//


const RegisterForm = () => {
  const { register } = useAuth();
  const { t } = useTranslation();

  const [defaultValues, setDefaultValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    comfirmPassword: '',
  });
  const [errors, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { password, comfirmPassword } = defaultValues;
      if (password !== comfirmPassword) {
        setError(t('auth.passwordNoMatch'));
        setLoading(false);
        return;
      }
      await register(defaultValues);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        {errors && <Alert severity="error">{errors}</Alert>}
        <div className="input-field">
          <input
            id="email"
            name="email"
            placeholder={t('common.email')}
            required
            type="email"
            value={defaultValues.email}
            onChange={(e) =>
              setDefaultValues({
                ...defaultValues,
                email: e.target.value,
              })
            }
          />
        </div>
        <div className="input-field">
          
          <input
            id="password"
            name="password"
            placeholder={t('common.password')}
            required
            type="password"
            value={defaultValues.password}
            onChange={(e) =>
              setDefaultValues({
                ...defaultValues,
                password: e.target.value,
              })
            }
          />
        </div>
        <div className="input-field">
          <input
            id="comfirm-password"
            name="confirmPassword"
            placeholder={t('auth.confirmPassword')}
            required
            type="password"
            value={defaultValues.comfirmPassword}
            onChange={(e) =>
              setDefaultValues({
                ...defaultValues,
                comfirmPassword: e.target.value,
              })
            }
          />
        </div>
        <div className="input-field">
          <input
            id="firstName"
            name="firstName"
            placeholder={t('auth.firstName')}
            required
            type="text"
            value={defaultValues.firstName}
            onChange={(e) =>
              setDefaultValues({
                ...defaultValues,
                firstName: e.target.value,
              })
            }
          />
        </div>
        <div className="input-field">
          <input
            id="lastName"
            name="lastName"
            placeholder={t('auth.lastName')}
            required
            type="text"
            value={defaultValues.lastName}
            onChange={(e) =>
              setDefaultValues({
                ...defaultValues,
                lastName: e.target.value,
              })
            }
          />
        </div>
        <div>
        <LoadingButton type="submit"  variant="contained"  color='info' className="btn btn-full" loading = {loading}>
          {t('common.signUp')}
        </LoadingButton>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
