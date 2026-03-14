/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { m, } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';
import { MotionContainer, MotionViewport, varFade,varZoom } from '../components/animate';
import { Appdetails } from '../config';


// redux
import { useDispatch, useSelector } from '../redux/store';
import { getHomePrices } from '../redux/slices/asserts/asserts'

// ----------------------------------------------------------------------

export default function Home() {
  const { t } = useTranslation();
  const { homePrices } = useSelector((state) => state.asserts);
  const dispatch = useDispatch();



  React.useEffect(() => {
    const controller = new AbortController();
    dispatch(getHomePrices(controller))

    return (
      controller.abort
    )
  }, [])



  return (
    <Page title="Home">
      <MotionContainer>
        <main className='true' style={{ minHeight: '80vh' }}>
          <div className="bg bg-secondary app-image-back-1 fade-appear-done fade-enter-done">
            <div className="container">
              <div className="row" style={{ display: 'flex', flexWrap: 'wrap-reverse' }}>
                <div className="col l6 s12 center white-text">
                  <Container component={MotionViewport}>
                    <div className="hide-on-med-and-down">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <m.h1 variants={varFade().inDown} className="white-text">{t('home.financeRedefined')}</m.h1>
                    <m.p variants={varZoom().inUp} style={{ color: 'rgb(165, 189, 217)' }}>{t('home.heroSubtitle')}</m.p>
                    <br />
                    <Link className="btn" to="/signin">
                      {t('home.loginAccount')}
                    </Link>
                    <Link className="btn btn-white-trans" to="/signup">
                      {t('home.createAccount')}
                    </Link>
                    <br />
                    <br />
                    <br />
                    <br />
                  </Container>
                </div>
                <div className="col l6 s12">
                  <center>
                    <br />
                    <img src="/assets/images/site/Landing2.png" className="responsive-img" />
                    <br />
                    <br />
                    <div className="hide-on-med-and-down">
                      <br />
                      <br />
                      <br />
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="tradingview-widget-container">
            <div className="tradingview-widget-container__widget" />
            <div id="tradingview_3e2" />
            <div className="tradingview-widget-copyright" />
            <div>
              <div style={{ width: '100%', height: '46px' }}>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n .tradingview-widget-copyright {\n                        font-size: 13px !important;\n                        line-height: 32px !important;\n                        text-align: center !important;\n                        vertical-align: middle !important;\n                        /* @mixin sf-pro-display-font; */\n                        font-family: -apple-system, BlinkMacSystemFont, "Trebuchet MS", Roboto, Ubuntu, sans-serif !important;\n                        color: #9db2bd !important;\n                    }\n\n                    .tradingview-widget-copyright .blue-text {\n                        color: #2962ff !important;\n                    }\n\n                    .tradingview-widget-copyright a {\n                        text-decoration: none !important;\n                        color: #9db2bd !important;\n                    }\n\n                    .tradingview-widget-copyright a:visited {\n                        color: #9db2bd !important;\n                    }\n\n                    .tradingview-widget-copyright a:hover .blue-text {\n                        color: #1e53e5 !important;\n                    }\n\n                    .tradingview-widget-copyright a:active .blue-text {\n                        color: #1848cc !important;\n                    }\n\n                    .tradingview-widget-copyright a:visited .blue-text {\n                        color: #2962ff !important;\n                    }\n                ',
                  }}
                />
                <iframe
                  scrolling="no"
                  frameBorder={0}
                  src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22title%22%3A%22S%26P%20500%22%2C%22proName%22%3A%22OANDA%3ASPX500USD%22%7D%2C%7B%22title%22%3A%22Shanghai%20Composite%22%2C%22proName%22%3A%22INDEX%3AXLY0%22%7D%2C%7B%22title%22%3A%22EUR%2FUSD%22%2C%22proName%22%3A%22FX_IDC%3AEURUSD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22GBPUSD%22%7D%2C%7B%22description%22%3A%22USDCHF%22%2C%22proName%22%3A%22USDCHF%22%7D%2C%7B%22description%22%3A%22USDJPY%22%2C%22proName%22%3A%22USDJPY%22%7D%2C%7B%22description%22%3A%22USDCNH%22%2C%22proName%22%3A%22USDCNH%22%7D%2C%7B%22description%22%3A%22USDRUB%22%2C%22proName%22%3A%22FOREXCOM%3AUSDRUB%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22FX%3AAUDUSD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22FX%3ANZDUSD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22FX%3AUSDCAD%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22FX%3AUSDSEK%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22FX%3AEURCHF%22%7D%2C%7B%22title%22%3A%22BTC%2FUSD%22%2C%22proName%22%3A%22BITFINEX%3ABTCUSD%22%7D%2C%7B%22title%22%3A%22ETH%2FUSD%22%2C%22proName%22%3A%22BITFINEX%3AETHUSD%22%7D%5D%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22springtrading.live%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D"
                  style={{ boxSizing: 'border-box', height: '46px', width: '100%' }}
                  title="price list"
                />
              </div>
            </div>
          </div>
          <section>
            <Container component={MotionViewport} className="app-py-3">
              <div className="container ">
                <div className="row ">
                  <div
                    className="col l4 s12  app-py-1 wow fadeInUp slow"
                    style={{ display: 'flex', visibility: 'visible' }}
                  >
                    <div style={{ flex: '1 1 0%' }}>
                      <img src="/assets/images/site/Service2.png" style={{ width: '95px' }} />
                    </div>
                    <m.div variants={varFade().inDown} style={{ flex: '4 1 0%' }}>
                      <h3>{t('home.fastWithdrawals')}</h3>
                      <p className="app-f2" style={{ marginTop: '4px', marginBottom: '4px' }}>
                        {t('home.fastWithdrawalsDesc')}
                      </p>
                    </m.div>
                  </div>
                  <m.div
                    variants={varFade().inUp}
                    className="col l4 s12  app-py-1 wow fadeInUp slow"
                    data-wow-delay="0.2s"
                    style={{ display: 'flex', visibility: 'visible', animationDelay: '0.2s' }}
                  >
                    <div style={{ flex: '1 1 0%' }}>
                      <img src="/assets/images/site/Service1.png" style={{ width: '95px' }} />
                    </div>
                    <div style={{ flex: '4 1 0%' }}>
                      <h3>{t('home.friendlyInterface')}</h3>
                      <p className="app-f2" style={{ marginTop: '4px', marginBottom: '4px' }}>
                        {t('home.friendlyInterfaceDesc')}
                      </p>
                    </div>
                  </m.div>
                  <m.div
                    variants={varFade().inUp}
                    className="col l4 s12  app-py-1 wow fadeInUp slow"
                    data-wow-delay="0.4s"
                    style={{ display: 'flex', visibility: 'visible', animationDelay: '0.4s' }}
                  >
                    <div style={{ flex: '1 1 0%' }}>
                      <img src="/assets/images/site/Service3.png" style={{ width: '95px' }} />
                    </div>
                    <div style={{ flex: '4 1 0%' }}>
                      <h3>{t('home.support247')}</h3>
                      <p className="app-f2" style={{ marginTop: '4px', marginBottom: '4px' }}>
                        {t('home.support247Desc')}
                      </p>
                    </div>
                  </m.div>
                </div>
              </div>
            </Container>
          </section>
          <section className="bg app-py-3 ">
            <div className="container app-py-3">
              <div className="row" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <div className="col l6 s12 app-flex-l6 wow fadeInUp slow" style={{ visibility: 'visible' }}>
                  <center>
                    <img
                      src="/assets/images/site/Landing3.png"
                      className="responsive-img"
                      style={{ maxHeight: '60vh' }}
                    />
                    <br />
                    <br />
                  </center>
                </div>
                <Container component={MotionViewport}>
                  <m.div className="col l6 s12 app-flex-l6 wow fadeInUp slow" style={{ visibility: 'visible' }}
                    variants={varFade().inUp}
                  >
                    <h2 className="center">{t(‘home.enjoyPlatform’)}</h2>
                    <p>
                      {t(‘home.smoothExperience’)}
                    </p>
                    <p>
                      {t(‘home.platformCovered’, { appName: Appdetails.name })}
                    </p>
                    <center>
                      <Link className="btn btn-trans" to="/signin">
                        {t(‘home.openInBrowser’)}
                      </Link>
                    </center>
                    <br />
                  </m.div>
                </Container>

              </div>
            </div>
          </section>
          <section className="app-py-3">
            <br />
            <Container component={MotionViewport} className="container">
              <m.div className="row" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap-reverse' }}
                variants={varFade().inLeft}
              >
                <div className="col l6 s12 app-flex-l6">
                  <div>
                    <br />
                    <h2
                      className="app-mobile-center wow fadeInUp slow"
                      style={{ fontWeight: 'bold', visibility: 'visible' }}
                    >
                      {t('home.technicalAnalysis')}
                    </h2>
                    <p
                      className="app-mobile-center  wow fadeInUp slow"
                      style={{ fontSize: '16px', visibility: 'visible' }}
                    >
                      {t('home.technicalAnalysisDesc')}
                    </p>
                    <br />
                  </div>
                </div>
                <div className="col l6 s12 app-flex-l6  wow fadeInUp slow" style={{ visibility: 'visible' }}>
                  <center>
                    <div className="container">
                      <img
                        src="/assets/images/site/Analys.png"
                        className="responsive-img"
                        style={{ maxHeight: '60vh' }}
                      />
                    </div>
                  </center>
                </div>
              </m.div>
            </Container>
          </section>
          <section className="bg app-py-3">
            <br />
            <Container component={MotionViewport} className="container">
              <m.div className="row" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}
                variants={varFade().inRight}>
                <div className="col l6 s12 app-flex-l6 wow fadeInUp slow" style={{ visibility: 'visible' }}>
                  <div className="container">
                    <center>
                      <img src="/assets/images/site/Risk.png" className="responsive-img" style={{ maxHeight: '60vh' }} />
                    </center>
                  </div>
                </div>
                <div className="col l6 s12 app-flex-l6">
                  <br />
                  <h2 className="app-mobile-center wow fadeInUp slow" style={{ visibility: 'visible' }}>
                    {t('home.riskManagement')}
                  </h2>
                  <p className="app-mobile-center wow fadeInUp slow" style={{ visibility: 'visible' }}>
                    {t('home.riskManagementDesc')}
                  </p>
                  <br />
                </div>
              </m.div>
            </Container>
          </section>
          <section className=" app-py-3">
            <Container component={MotionViewport} className="container app-py-1">
              <h3 className="center alt-color wow fadeInUp slow" style={{ visibility: 'visible' }}>
                {t('home.threeSimpleSteps')}
              </h3>
              <div className="row">
                <div className="col l4 s12 app-py-1 wow fadeInUp slow" style={{ display: 'flex', visibility: 'visible' }}>
                  <div style={{ flex: '1 1 0%' }}>
                    <img src="/assets/images/site/Step1.png" />
                  </div>
                  <m.div style={{ flex: '4 1 0%' }}
                    variants={varFade().inUp}
                  >
                    <h3 className="alt-color">{t('home.step1Title')}</h3>{t('home.step1Desc')}
                  </m.div>
                </div>
                <div className="col l4 s12 app-py-1 wow fadeInUp slow" style={{ display: 'flex', visibility: 'visible' }}>
                  <div style={{ flex: '1 1 0%' }}>
                    <img src="/assets/images/site/Step2.png" />
                  </div>
                  <m.div
                  variants={varFade().inDown}
                  style={{ flex: '4 1 0%' }}>
                    <h3 className="alt-color">{t('home.step2Title')}</h3>{t('home.step2Desc')}
                  </m.div>
                </div>
                <div className="col l4 s12 app-py-1 wow fadeInUp slow" style={{ display: 'flex', visibility: 'visible' }}>
                  <div style={{ flex: '1 1 0%' }}>
                    <img src="/assets/images/site/Step3.png" />
                  </div>
                  <m.div
                  variants={varFade().inDown}
                  style={{ flex: '4 1 0%' }}>
                    <h3 className="alt-color">{t('home.step3Title')}</h3>{t('home.step3Desc')}
                  </m.div>
                </div>
              </div>
            </Container>
          </section>
          <section className="bg app-py-3">
            <br />
            <br />
            <Container component={MotionViewport} className="container">
              <div className="container">
                <div>
                  <h2 className="center wow fadeInUp alt-color" style={{ visibility: 'visible' }}>
                    {t('home.whyChooseUs')}
                  </h2>
                  <p className="center wow fadeInUp slow" style={{ visibility: 'visible' }}>
                    {t('home.whyChooseUsSubtitle')}
                  </p>
                  <br />
                  <m.p  
                  variants={varZoom().inUp}
                  className="wow fadeInUp slow" style={{ textAlign: 'justify', visibility: 'visible' }}>
                    {t('home.whyChooseUsDesc1', { appName: Appdetails.name })}
                  </m.p>
                  <p className="wow fadeInUp slow" style={{ textAlign: 'justify', visibility: 'visible' }}>
                    {t('home.whyChooseUsDesc2')}
                  </p>
                  <br />
                  <br />
                </div> 
                <Container component={MotionViewport} className="row">
                  <m.div variants={varFade().inUp} className="col l6 s12 app-py-1 wow fadeInUp" style={{ visibility: 'visible' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ flex: '1 1 0%' }}>
                        <img src="/assets/images/svgs/Toro-Global.svg" style={{ maxHeight: '80px' }} />
                      </div>
                      <div style={{ flex: '4 1 0%' }}>
                        <h6>{t('home.copyTrading')}</h6>
                        <p>
                          {t('home.copyTradingDesc')}{' '}
                          <a className="alt-color" href="/pages/copy-expert-traders">
                            {t('common.learnMore')}
                          </a>
                        </p>
                      </div>
                    </div>
                  </m.div>
                  <m.div variants={varFade().inUp} className="col l6 s12 app-py-1 wow fadeInUp" style={{ visibility: 'visible' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ flex: '1 1 0%' }}>
                        <img src="/assets/images/svgs/Toro-Reliable.svg" style={{ maxHeight: '80px' }} />
                      </div>
                      <div style={{ flex: '4 1 0%' }}>
                        <h6>{t('home.tradeForex')}</h6>
                        <p>
                          {t('home.tradeForexDesc')}{' '}
                          <Link className="alt-color" to="/pages/forex-trading">
                            {t('common.learnMore')}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </m.div>
                  <m.div variants={varFade().inUp} className="col l6 s12 app-py-1 wow fadeInUp" style={{ visibility: 'visible' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ flex: '1 1 0%' }}>
                        <img src="/assets/images/svgs/Toro-Secured.svg" />
                      </div>
                      <div style={{ flex: '4 1 0%' }}>
                        <h6>{t('home.mineCryptocurrencies')}</h6>
                        <p>
                          {t('home.mineCryptocurrenciesDesc')}{' '}
                          <a className="alt-color" href="/pages/bitcoin-mining">
                            {t('common.learnMore')}
                          </a>
                        </p>
                      </div>
                    </div>
                  </m.div>
                  <m.div variants={varFade().inUp} className="col l6 s12 app-py-1 wow fadeInUp" style={{ visibility: 'visible' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ flex: '1 1 0%' }}>
                        <img src="/assets/images/svgs/Toro-Social.svg" />
                      </div>
                      <div style={{ flex: '4 1 0%' }}>
                        <h6>{t('home.cfdStocks')}</h6>
                        <p>
                          {t('home.cfdStocksDesc')}{' '}
                          <a className="alt-color" href="/pages/stocks-trading">
                            {t('common.learnMore')}
                          </a>
                        </p>
                      </div>
                    </div>
                  </m.div>
                </Container>
              </div>
            </Container>
          </section>
          <section className="app-py-3">
            <div>
              <h2 className="center wow fadeInUp slow" style={{ visibility: 'visible' }}>
                {t('home.mineTopCrypto')}
              </h2>
              <br />
              <div className="container">
                <p className="wow fadeInUp slow" style={{ visibility: ‘visible’ }}>
                  {t(‘home.mineTopCryptoDesc1’)}
                </p>
                <p className="wow fadeInUp slow" style={{ visibility: ‘visible’ }}>
                  {t(‘home.mineTopCryptoDesc2’)}
                </p>
              </div>
              <br />
              <Container component = {MotionViewport} className="container row center">
                <m.div  variants={varFade().inLeft} className="col l3 s12">
                  <div className="card-panel wow fadeInUp slow" style={{ visibility: 'visible' }}>
                    <img src="/assets/images/icons/pair-icon-atomusd.img.svg" style={{ height: '56px' }} />
                    <br />
                    <p>Solana</p>
                    <p>{homePrices ? homePrices.solana.usd : 'loading..'}</p>
                  </div>
                  <br />
                </m.div>
                <m.div  variants={varFade().inLeft} className="col l3 s12 ">
                  <div
                    className="card-panel wow fadeInUp slow"
                    data-wow-delay="0.1s"
                    style={{ visibility: 'visible', animationDelay: '0.1s' }}
                  >
                    <img src="/assets/images/icons/pair-icon-btcusd.img.svg" />
                    <p>Bitcoin</p>
                    <p>{homePrices ? homePrices.bitcoin.usd : 'loading..'}</p>
                  </div>
                  <br />
                </m.div>
                <m.div  variants={varFade().inLeft} className="col l3 s12">
                  <div
                    className="card-panel wow fadeInUp slow"
                    data-wow-delay="0.2s"
                    style={{ visibility: 'visible', animationDelay: '0.2s' }}
                  >
                    <img src="/assets/images/icons/pair-icon-ethusd.img.svg" />
                    <br />
                    <p>Ethereum</p>
                    <p>{homePrices ? homePrices.ethereum.usd : 'loading..'}</p>
                  </div>
                  <br />
                </m.div>
                <m.div  variants={varFade().inLeft} className="col l3 s12">
                  <div
                    className="card-panel wow fadeInUp slow"
                    data-wow-delay="0.4s"
                    style={{ visibility: 'visible', animationDelay: '0.4s' }}
                  >
                    <img src="/assets/images/icons/pair-icon-bnbusd.img.svg" />
                    <br />
                    <p>Binance Coin</p>
                    <p>{homePrices ? homePrices.binancecoin.usd : 'loading..'}</p>
                  </div>
                  <br />
                </m.div>
              </Container>
              <br />
            </div>
          </section>
          <section className="bg center app-py-3">
            <div className="container">
              <Container component={MotionViewport} className="row">
                <m.div
                  variants={varFade().inLeft}
                  className="app-my-2 col l4 s12 wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{ visibility: 'visible', animationDelay: '0.4s' }}
                >
                  <img src="/assets/images/site/ServiceVector3.png" className="responsive-img" />
                  <h3 className="h4">{t('home.dailyMiningOutputs')}</h3>
                  <p className="app-mb-2">
                    {t('home.dailyMiningOutputsDesc')}
                  </p>
                </m.div>
                <m.div
                  variants={varFade().inLeft} className="app-my-2 col l4 s12 wow fadeInUp" style={{ visibility: 'visible' }}>
                  <img src="/assets/images/site/ServiceVector1.png" className="responsive-img" />
                  <h3 className="h4">{t(‘home.stateOfTheArtMining’)}</h3>
                  <p className="app-mb-2">
                    {t(‘home.stateOfTheArtMiningDesc’)}
                  </p>
                </m.div>
                <m.div
                  variants={varFade().inLeft}
                  className="app-my-2 col l4 s12 wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{ visibility: 'visible', animationDelay: '0.2s' }}
                >
                  <img src="/assets/images/site/ServiceVector2.png" className="responsive-img" />
                  <h3 className="h4">{t('home.diverseMiningPortfolio')}</h3>
                  <p className="app-mb-2">
                    {t('home.diverseMiningPortfolioDesc')}
                  </p>
                </m.div>
              </Container>
              <Container component={MotionViewport} className="row">
                <m.div
                  variants={varFade().inRight} className="app-my-2 col l4 s12 wow fadeInUp" style={{ visibility: 'visible' }}>
                  <img src="/assets/images/site/ServiceVector45.png" className="responsive-img" />
                  <h3 className="h4">{t(‘home.hardwareRunning’)}</h3>
                  <p className="app-mb-2">
                    {t(‘home.hardwareRunningDesc’)}
                  </p>
                </m.div>
                <m.div
                  variants={varFade().inRight}
                  className="app-my-2 col l4 s12 wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{ visibility: 'visible', animationDelay: '0.2s' }}
                >
                  <img src="/assets/images/site/ServiceVector55.png" className="responsive-img" />
                  <h3 className="h4">{t('home.intuitiveDashboard')}</h3>
                  <p className="app-mb-2">
                    {t('home.intuitiveDashboardDesc')}
                  </p>
                </m.div>
                <m.div
                  variants={varFade().inRight}
                  className="app-my-2 col l4 s12 wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{ visibility: 'visible', animationDelay: '0.4s' }}
                >
                  <img src="/assets/images/site/ServiceVector65.png" className="responsive-img" />
                  <h3 className="h4">{t('home.secureAndPrivate')}</h3>
                  <p className="app-mb-2">
                    {t('home.secureAndPrivateDesc')}
                  </p>
                </m.div>
              </Container>
            </div>
          </section>
        </main>
      </MotionContainer>
    </Page>
  );
}