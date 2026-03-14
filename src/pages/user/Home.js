/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useAuth from '../../hooks/useAuth';


// redux
import { useDispatch, useSelector } from '../../redux/store';
import { fetchUserTrades } from '../../redux/slices/trades/userTrades';




const Home = () => {
  const { t } = useTranslation();
  const { deposits, balance,user, profits,withdrawal } = useAuth(); 
  const { trades, error } = useSelector((state) => state.userTrades);
 const [container, setContainer] = React.useState()
  const authCredential = getAuth();
  const dispatch = useDispatch();
  
  
  React.useEffect(() => {
    dispatch(fetchUserTrades())
  },[])



  React.useEffect(() => {
    if (trades) {
      const tradesInterface = trades
      .filter(trade => trade.userId === authCredential.currentUser.uid)
      .map((trade) => (
        {
          id: trade.id,
          userId: authCredential.currentUser.uid,
          month: trade.month,
          day: trade.day,
          imageUrl: trade.imageUrl,
          traderName: trade.traderName,
          positions: trade.positions,
          currencyPair: trade.currencyPair,
          name: trade.name,
          status : trade.status,
          amount : trade.amount
        }
      ))
      setContainer(tradesInterface)
    }
  }, [trades])

 
  return (
    <main className="app-py-1" style={{ height: '100vh' }}>
      <div className="fade-appear-done fade-enter-done">
        <div>
          <div>
            <div className="pc-container" style={{ margin: 'auto' }}>
              <div className="row">
                <div className="col l4 s12">
                  <div className="center">
                    <div className="row">
                      <Stack direction={'row'}>
                      <div className="col l6 s6">
                        <h3 className="notranslate" style={{ margin: '0px', padding: '0px',color:"white" }}>
                          ${balance}
                        </h3>
                        <span style={{ fontSize: '10px',color:"white" }}>{t('dashboard.balance')}</span>
                      </div>
                      <div className="col l6 s6">
                        <h3 style={{ margin: '0px', padding: '0px',color:"white" }}>${profits}</h3>
                        <span style={{ fontSize: '10px',color:"white" }}>{t('dashboard.profits')}</span>
                      </div>
                      <div className="col l6 s6">
                        <h3 style={{ margin: '0px', padding: '0px',color:"white" }}>${deposits}</h3>
                        <span style={{ fontSize: '10px',color:"white" }}>{t('dashboard.deposit')}</span>
                      </div>
                      <div className="col l6 s6">
                        <h3 style={{ margin: '0px', padding: '0px',color:"white" }}>${withdrawal}</h3>
                        <span style={{ fontSize: '10px',color:"white" }}>{t('dashboard.withdrawals')}</span>
                      </div>
                      </Stack>
                    </div>
                    <br />
                    <center>
                      <progress value={Number(user.signalStrenght)} max={100} style={{ width: '80%', display: 'block' }} />
                    </center>
                    <span style={{ fontSize: '10px',color:"white" }}>{t('dashboard.signalStrength')}</span>
                    <br />
                    <br />
                  </div>
                  <div className="pc-container row center" style={{ margin: 'auto' }}>
                    <div className="col l6 s4">
                      <div className="center" style={{ color: 'white' }}>
                        <Link to="/user/deposits/crypto" style={{ color: 'white' }}>
                          <div
                            style={{
                              background: 'rgb(50, 167, 226)',
                              color: 'white',
                              padding: '1rem',
                              borderRadius: '10px',
                            }}
                          >
                            <p
                              className="material-icons notranslate"
                              style={{ fontSize: '30px', margin: '0px', padding: '0px', }}
                            >
                              attach_money
                            </p>
                          </div>
                        </Link>
                        {t('dashboard.fundAccount')}
                        <br />
                        <br />
                      </div>
                    </div>
                    <div className="col l6 s4">
                      <div className="center" style={{ color: 'white' }}>
                        <Link to="/user/trading/traders" style={{ color: 'white' }}>
                          <div
                            style={{
                              background: 'rgb(255, 135, 0)',
                              color: 'white',
                              padding: '1rem',
                              borderRadius: '10px',
                            }}
                          >
                            <p
                              className="material-icons notranslate"
                              style={{ fontSize: '30px', margin: '0px', padding: '0px' }}
                            >
                              supervised_user_circle
                            </p>
                          </div>
                        </Link>
                        {t('dashboard.copyExperts')}
                        <br />
                        <br />
                      </div>
                    </div>
                    <div className="col l6 s4">
                      <div className="center" style={{ color: 'white' }}>
                        <Link to="/user/trading/markets" style={{ color: 'white' }}>
                          <div
                            style={{
                              background: 'rgb(34, 176, 125)',
                              color: 'white',
                              padding: '1rem',
                              borderRadius: '10px',
                            }}
                          >
                            <p
                              className="material-icons notranslate"
                              style={{ fontSize: '30px', margin: '0px', padding: '0px' }}
                            >
                              store
                            </p>
                          </div>
                        </Link>
                        {t('dashboard.assetMarkets')}
                        <br />
                        <br />
                      </div>
                    </div>
                    <div className="col l6 s4">
                      <div className="center" style={{ color: 'white' }}>
                        <Link to="/user/trading/watchlist" style={{ color: 'white' }}>
                          <div
                            style={{
                              background: 'rgb(181, 72, 198)',
                              color: 'white',
                              padding: '1rem',
                              borderRadius: '10px',
                            }}
                          >
                            <p
                              className="material-icons notranslate"
                              style={{ fontSize: '30px', margin: '0px', padding: '0px' }}
                            >
                              star
                            </p>
                          </div>
                        </Link>
                        {t('dashboard.savedAssets')}
                        <br />
                        <br />
                      </div>
                    </div>
                    <div className="col l6 s4">
                      <div className="center" style={{ color: 'white' }}>
                        <Link to="/user/traderoom" style={{ color: 'white' }}>
                          <div
                            style={{
                              background: 'rgb(225, 85, 93)',
                              color: 'white',
                              padding: '1rem',
                              borderRadius: '10px',
                            }}
                          >
                            <p
                              className="material-icons notranslate"
                              style={{ fontSize: '30px', margin: '0px', padding: '0px' }}
                            >
                              bar_chart
                            </p>
                          </div>
                        </Link>
                        {t('dashboard.tradingRoom')}
                        <br />
                        <br />
                      </div>
                    </div>
                    <div className="col l6 s4">
                      <div className="center" style={{ color: 'white' }}>
                        <Link to="/user/bots" style={{ color: 'white' }}>
                          <div
                            style={{
                              background: 'rgb(82, 82, 152)',
                              color: 'white',
                              padding: '1rem',
                              borderRadius: '10px',
                            }}
                          >
                            <p
                              className="material-icons notranslate"
                              style={{ fontSize: '30px', margin: '0px', padding: '0px' }}
                            >
                              access_time
                            </p>
                          </div>
                        </Link>
                        {t('dashboard.aiBots')}
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col l8 s12">
                  <center>
                    <ul className="tabs bg">
                      <li className="tab col s6">
                        <Link to="#closed" className="active">
                          <span className="material-icons notranslate">hourglass_full</span>
                          <span>{t('dashboard.closed')}</span>
                        </Link>
                      </li>
                      <li className="tab col s6">
                        <Link to="#open">
                          <span className="material-icons notranslate">hourglass_top</span>
                          <span>{t('dashboard.active')}</span>
                        </Link>
                      </li>
                      <li className="indicator" style={{ left: '0px', right: '398px' }} />
                    </ul>
                  </center>
                  <div id="closed" className="active">
                    <div className="app-py-1">
                      <ul className="collection">
                        {
                          !container ? (
                            <li className="collection-item app-py-2">
                            <p id="no-data" style={{ textAlign: 'center' }}>
                              <span className="app-font-normal">{t('common.noData')}</span>
                              <p style={{color:"red"}}>{error}</p>
                            </p>
                          </li>
                          ):
                          container.map((trade, index) =>(
                                <li className="collection-item" style={{cursor: 'pointer', paddingLeft: '0px', paddingRight: '0px'}} key = {trade.id+index}>
                                <div className="row">
                                  <div className="col l2 s2">
                                    <center>{trade.month}<br /><span style={{fontSize: '23px'}}>{trade.day}</span></center>
                                  </div>
                                  <div className="col l1 s1">
                                    <div className="app-trade-icon-container"><img src={trade.imageUrl} alt='' className="app-trade-icon" /></div>
                                  </div>
                                  <div className="col l6 s6">{trade.positions} {trade.currencyPair}<br />{trade.traderName}</div>
                                  <div className="col l3 s3"><span style={{color: trade.status === 'WON' ? 'green' : trade.status === 'PENDING' ? 'grey' : 'red' }}>${trade.amount}</span></div>
                                </div>
                              </li>
                              ) )
                            }
                      </ul>
                    </div>
                  </div>
                  <div id="open" style={{ display: 'none' }}>
                    <div className="app-py-1">
                      <ul className="collection">
                        <li className="collection-item app-py-2">
                          <p id="no-data" style={{ textAlign: 'center' }}>
                            <span className="app-font-normal">{t('dashboard.noOpenPositions')}</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="fixed-footer mobile-bg">
              <ul className="tabs">
                <li className="tab col s6">
                  <Link className="active" to="/user">
                    <span className="material-icons notranslate">assessment</span>
                    <span>{t('dashboard.trading')}</span>
                  </Link>
                </li>
                <li className="tab col s6">
                  <Link className to="/user">
                    <span className="material-icons notranslate">copyright</span>
                    <span>{t('dashboard.mining')}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
