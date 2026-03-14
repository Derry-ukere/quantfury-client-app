/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
// components
import Page from '../Page';
import LoadingScreen from '../LoadingScreen';

import UploadId from '../upload/UploadId';

import { MotionContainer, varBounce } from '../animate';
// assets
import ForbiddenIllustration from '../../assets/illustrations/SeverErrorIllustration';
import useAuth from '../../hooks/useAuth';


// ---------------------------------------------- //

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ------------------------------------------  //

export default function InReview({account_status}) {
    const { t } = useTranslation();
    const {logout} = useAuth();
    const navigate = useNavigate();

    const handleClick = async () => {
       await  logout()
       navigate('/')
    }

    const isValid = account_status === "blocked" || account_status === "suspended" || account_status === "pending"

    

  return (
    <Page title="Quantfury" sx={{ height: 1 }}>
      <RootStyle>
        <Container component={MotionContainer}>
          <Box sx={{maxWidth : isValid ? 480 : "unset", margin: 'auto', textAlign: 'center' }}>
            <m.div variants={varBounce().in}>
              <Typography variant="h3" paragraph>
                {account_status === "void" && ('')}
                {account_status === "pending" && (t('accountStatus.inReview'))}
                {account_status === "suspended" && (t('accountStatus.suspended'))}
                {account_status === "blocked" && (t('accountStatus.blocked'))} 
                {account_status === "declined" && (t('accountStatus.kycDeclined'))} 
              </Typography>
            </m.div>
            {account_status === 'void' && (
              <LoadingScreen />
            )}

            {account_status === 'suspended' && (
            <Typography >
            {t('accountStatus.suspendedMsg')}            </Typography>
            )}

            { account_status === 'pending' && (
            <Typography  >
            {t('accountStatus.pendingMsg')}</Typography>
            )}

            {account_status === 'blocked' && (
            <Typography sx={{ color: 'red' }}>
            {t('accountStatus.blockedMsg')} </Typography>
            )}

            {account_status === 'declined' && (
            <Typography sx={{ color: 'red', paddingX : {sm : 12, md : 20} }}>
                    {t('accountStatus.declinedMsg')}
            </Typography>
            )}

            {account_status === 'declined' && (
             <UploadId/>
            )}
            {isValid && (<div>
             <m.div variants={varBounce().in}>
              <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
            </m.div>
             </div>)}
            <>
            <Button  size="large" variant="contained"  style={{marginTop : 8}} component={RouterLink} onClick={handleClick}>
              {t('common.goToHome')}
            </Button>
            </>
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}

InReview.propTypes = {
    account_status: PropTypes.string,
  };