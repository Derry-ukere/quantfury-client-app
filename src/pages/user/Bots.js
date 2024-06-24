/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Container,
  CardActions,
  Box,
  Alert,
  Snackbar
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';
import { getAuth } from 'firebase/auth';
import LoadingButton from '@mui/lab/LoadingButton';
import useAuth from '../../hooks/useAuth';




// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getAllBots } from '../../redux/slices/bots/getAllBots';
import { subscribeBot } from '../../redux/slices/bots/subcribe';


const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  media: {
    height: 140,
    width: 140,
    borderRadius: '50%',
    margin: 'auto',
    marginTop: '15px',
  },
  avatar: {
    backgroundColor: deepPurple[500],
  },
  container: {
    paddingTop: '20px',
  },
  button: {
    width: '100%',
  },
  bio: {
    marginTop: '15px',
    marginBottom: '15px',
  },
});


const BotsList = () => {
    const dispatch = useDispatch();
    const { bots } = useSelector((state) => state.allBots);
    const { success } = useSelector((state) => state.subcribe);
    const { deposits } = useAuth();

    const auth = getAuth();
    const [container, setContainer] = React.useState(null)
    const [error, setError] = React.useState(false);



    React.useEffect(() => {
        dispatch(getAllBots())
      }, [])

      React.useEffect(() => {
        if (bots) {
          const cloned = bots.map((bot) => (
            {
              loading: false,
              subscribed: bot.subscribersList.includes(auth.currentUser.uid),
              winRate: bot.winRate,
              lossRate: bot.lossRate,
              Imageurl: bot.Imageurl,
              id: bot.id,
              name: bot.botName,
              creator: bot.creator,
              info: bot.info,
              subscribers :bot.subscribers,
              subscribersList : bot.subscribersList,
              totalLosses : bot.totalLosses,
              totalTrades : bot.totalTrades,
              
            }
          ))
          setContainer(cloned)
        }
      }, [bots])
    
    
  const classes = useStyles();

  const handleSubscribe = (botId, index) => {
    if ((deposits === 0)) {
        setError(true)
        return
      }
    const LoadingState = [...container];
    LoadingState[index].loading = true;
    setContainer(LoadingState)

    dispatch(subscribeBot(botId)).then((res) => {
        const LoadingState = [...container];
        LoadingState[index].loading = false;
        LoadingState[index].subscribed = res === 'Copied';
        setContainer(LoadingState)
      })
  };


  return (
    <Container className={classes.container}>
         <Snackbar
          open={success}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert severity="success" sx={{ width: '100%' }}>
            successfull
          </Alert>
        </Snackbar>
        <Snackbar
          open={error}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert severity="error" sx={{ width: '100%' }}>
            Deposit account before you  subcribe to a Bot
          </Alert>
        </Snackbar>
      <Typography variant="h4" gutterBottom align="center" sx={{color: "white"}}>
        Ai Powered Trading Bots
      </Typography>
      <Grid container spacing={4}>
        {container && container.map((bot, index) => (
          <Grid item key={bot.id} xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={bot.Imageurl}
                title={bot.botName}
              />
              <CardContent>
                <Typography variant="h6" component="div" align="center">
                  {bot.botName}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  by {bot.creator}
                </Typography>
                <Box className={classes.bio}>
                  <Typography variant="body2" color="textSecondary">
                    {bot.info}
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  <strong>Win Rate:</strong> {bot.winRate}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Loss Rate:</strong> {bot.lossRate}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Total Trades:</strong> {bot.totalTrades}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Total Losses:</strong> {bot.totalLosses}
                </Typography>
              </CardContent>
              <CardActions>
                <LoadingButton  className={classes.button} color={bot.subscribed ? 'error' : 'primary'} loading={bot.loading} onClick={() => handleSubscribe(bot.id, index)}>{bot.subscribed ? 'Subscribed' : "Subscribe"}</LoadingButton>
                <Button
                  className={classes.button}
                  size="small"
                  color="secondary"
                >
                  {bot.subscribers} Subscribers
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BotsList;
