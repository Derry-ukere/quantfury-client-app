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
  Avatar,
  Stack,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';

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
});

const bots = [
  {
    Imageurl: 'https://firebasestorage.googleapis.com/v0/b/quantfury-index.appspot.com/o/candidate%2Fundefined%2Ffirst-logo.png?alt=media&token=53ff9188-9a59-4621-a021-d59fde1cf1d1',
    botName: 'jackpotter',
    creator: 'Ben T.K',
    id: 'ab77244f-ca15-4530-890f-5b4dad4ddaef',
    info: 'The issue with the amount returning undefined might be due to the format of the paymentMethod string you are passing to the function. Specifically, you have double quotes around the BTCWALLETADDRESS case, which might not match the string being passed. Here is the corrected function:',
    lossRate: '0.02%',
    subscribers: '3443',
    totalLosses: '7',
    totalTrades: '32222',
    winRate: '99.98%',
  },
  {
    Imageurl: 'https://firebasestorage.googleapis.com/v0/b/quantfury-index.appspot.com/o/candidate%2Fundefined%2Ffirst-logo.png?alt=media&token=53ff9188-9a59-4621-a021-d59fde1cf1d1',
    botName: 'jackpotter',
    creator: 'Ben T.K',
    id: 'ab77244f-ca15-4530-890f-5b4dad4ddaef',
    info: 'The issue with the amount returning undefined might be due to the format of the paymentMethod string you are passing to the function. Specifically, you have double quotes around the BTCWALLETADDRESS case, which might not match the string being passed. Here is the corrected function:',
    lossRate: '0.02%',
    subscribers: '3443',
    totalLosses: '7',
    totalTrades: '32222',
    winRate: '99.98%',
  },
  {
    Imageurl: 'https://firebasestorage.googleapis.com/v0/b/quantfury-index.appspot.com/o/candidate%2Fundefined%2Ffirst-logo.png?alt=media&token=53ff9188-9a59-4621-a021-d59fde1cf1d1',
    botName: 'jackpotter',
    creator: 'Ben T.K',
    id: 'ab77244f-ca15-4530-890f-5b4dad4ddaef',
    info: 'The issue with the amount returning undefined might be due to the format of the paymentMethod string you are passing to the function. Specifically, you have double quotes around the BTCWALLETADDRESS case, which might not match the string being passed. Here is the corrected function:',
    lossRate: '0.02%',
    subscribers: '3443',
    totalLosses: '7',
    totalTrades: '32222',
    winRate: '99.98%',
  },
  {
    Imageurl: 'https://firebasestorage.googleapis.com/v0/b/quantfury-index.appspot.com/o/candidate%2Fundefined%2Ffirst-logo.png?alt=media&token=53ff9188-9a59-4621-a021-d59fde1cf1d1',
    botName: 'jackpotter',
    creator: 'Ben T.K',
    id: 'ab77244f-ca15-4530-890f-5b4dad4ddaef',
    info: 'The issue with the amount returning undefined might be due to the format of the paymentMethod string you are passing to the function. Specifically, you have double quotes around the BTCWALLETADDRESS case, which might not match the string being passed. Here is the corrected function:',
    lossRate: '0.02%',
    subscribers: '3443',
    totalLosses: '7',
    totalTrades: '32222',
    winRate: '99.98%',
  },
  {
    Imageurl: 'https://firebasestorage.googleapis.com/v0/b/quantfury-index.appspot.com/o/candidate%2Fundefined%2Ffirst-logo.png?alt=media&token=53ff9188-9a59-4621-a021-d59fde1cf1d1',
    botName: 'jackpotter',
    creator: 'Ben T.K',
    id: 'ab77244f-ca15-4530-890f-5b4dad4ddaef',
    info: 'The issue with the amount returning undefined might be due to the format of the paymentMethod string you are passing to the function. Specifically, you have double quotes around the BTCWALLETADDRESS case, which might not match the string being passed. Here is the corrected function:',
    lossRate: '0.02%',
    subscribers: '3443',
    totalLosses: '7',
    totalTrades: '32222',
    winRate: '99.98%',
  },
];

const BotsList = () => {
  const classes = useStyles();

  const handleSubscribe = (botId) => {
    // eslint-disable-next-line no-alert
    alert(`Subscribed to bot with ID: ${botId}`);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom align="center" sx={{color: 'white'}}>
        Bots List
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
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar className={classes.avatar}>
                    {bot.creator.charAt(0)}
                  </Avatar>
                  <Typography variant="h6" component="div">
                    {bot.botName}
                  </Typography>
                </Stack>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ marginTop: '10px' }}
                >
                  {bot.info}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Creator:</strong> {bot.creator}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Subscribers:</strong> {bot.subscribers}
                </Typography>
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
                  variant='outlined'
                >
                  Subscribe
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
