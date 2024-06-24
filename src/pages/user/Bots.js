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
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';

// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getAllBots } from '../../redux/slices/bots/getAllBots';

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
    // const { success } = useSelector((state) => state.copyTraderReducer);

    React.useEffect(() => {
        dispatch(getAllBots())
      }, [])

    //   React.useEffect(() => {
    //     if (allTraders) {
    //       const cloned = allTraders.map((trader) => (
    //         {
    //           loading: false,
    //           copied: trader.subscribers.includes(auth.currentUser.uid),
    //           wins: trader.wins,
    //           losses: trader.losses,
    //           winRate: trader.winRate,
    //           lossRate: trader.lossRate,
    //           imageUrl: trader.imageUrl,
    //           id: trader.id,
    //           name: trader.name
    //         }
    //       ))
    //       setContainer(cloned)
    //     }
    //   }, [allTraders])
    
    
  const classes = useStyles();

  const handleSubscribe = (botId) => {
    console.log(`Subscribed to bot with ID: ${botId}`);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom align="center" sx={{color: "white"}}>
        Ai Powered Trading Bots
      </Typography>
      <Grid container spacing={4}>
        {bots.map((bot) => (
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
                <Button
                  className={classes.button}
                  size="small"
                  color="primary"
                  onClick={() => handleSubscribe(bot.id)}
                >
                  Subscribe
                </Button>
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
