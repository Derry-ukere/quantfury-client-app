/* eslint-disable arrow-body-style */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { Typography, Stack } from '@mui/material';

//
import { useTranslation } from 'react-i18next';
import { UploadAvatar } from '../components/upload';

// redux
import { useDispatch, useSelector } from '../redux/store';
import { uploadIds } from '../redux/slices/uploads/uploadId';

const Identity = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, isLoading } = useSelector((state) => state.uploadId);

  const [fileOne, setFileOne] = React.useState(null)
  const [fileTwo, setFileTwo] = React.useState(null)

  const [avatarFrontUrl, setfrontAvatarUrl] = React.useState(null);
  const [avatarBackUrl, setBackAvatarUrl] = React.useState(null);

  const handleFrontDropAvatar = React.useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      setFileOne(file)
      setfrontAvatarUrl(
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
    }
  }, []);

  const handleBackDropAvatar = React.useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      setFileTwo(file)
      setBackAvatarUrl(
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(uploadIds(fileOne, fileTwo))
  }

  React.useEffect(() => {
    if (success) {
      navigate('/user');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success])

  return (
    <div>
      <br />
      <div className="row">
        <div className="col l4 s12 offset-l4">
          <div className="card-panel">
            <h3 className="btn-color center">{t('identity.title')}</h3>
            <p style={{ textAlign: 'justify' }}>
              {t('identity.description')}
            </p>
            <center>
              <br />
              <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  <div>
                    <div className="file-field input-field">
                      <UploadAvatar
                        accept="image/*"
                        file={avatarFrontUrl}
                        onDrop={handleFrontDropAvatar}
                        helperText={
                          <Typography
                            variant="caption"
                            sx={{
                              mt: 2,
                              mx: 'auto',
                              display: 'block',
                              textAlign: 'center',
                              color: 'text.secondary',
                            }}
                          >
                            {t('identity.frontId')}
                            <br /> {t('identity.maxSize')}
                          </Typography>
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="file-field input-field">
                      <UploadAvatar
                        accept="image/*"
                        file={avatarBackUrl}
                        onDrop={handleBackDropAvatar}
                        helperText={
                          <Typography
                            variant="caption"
                            sx={{
                              mt: 2,
                              mx: 'auto',
                              display: 'block',
                              textAlign: 'center',
                              color: 'text.secondary',
                            }}
                          >
                            {t('identity.backId')}
                            <br /> {t('identity.maxSize')}
                          </Typography>
                        }
                      />
                    </div>
                  </div>
                </Stack>

                <div>
                  <LoadingButton type="submit" variant='contained' fullWidth color='info' loading={isLoading}>
                    {t('identity.upload')}
                  </LoadingButton>
                </div>
              </form>
            </center>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Identity;
