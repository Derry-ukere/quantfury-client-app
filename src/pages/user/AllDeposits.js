import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// comp
import DepositComp from '../../components/DepositSingle';

// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getAllDeposits } from '../../redux/slices/deposit/getDeposits';

const AllDeposits = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { allDeposits, error, isLoading } = useSelector((state) => state.getDepositsReducer);
  React.useEffect(() => {
    dispatch(getAllDeposits());
  }, [dispatch]);

  return (
    <div>
      <main className="container" style={{ height: '100vh' }}>
        <div className="fade-appear-done fade-enter-done">
          <div className="container row">
            <div className="col l8 s12">
              <center>
                <Link className="btn " to="/user/deposits/crypto">
                  {t('deposits.newDeposit')}
                </Link>
              </center>
              <h2>{error}</h2>
              <ul className="collection app-mx-1">
                <li className="collection-item">
                  {t('deposits.pendingMessage')}
                  <span style={{ float: 'right', cursor: 'pointer' }}>X</span>
                </li>
              </ul>
              {
                isLoading && <div> {t('deposits.fetchingDeposits')} </div>
              }
              <ul className="collection">
                {allDeposits &&
                  allDeposits.map((dep, i) => (
                    <DepositComp
                      amount={dep.amount}
                      btcAmount={dep.amountInCrypto}
                      destination={dep.destinantion}
                      id={dep.id}
                      status={dep.status}
                      key={i}
                    />
                  ))}
              </ul>
            </div>
            <div className="col l4 s12">
              <ul className="collection">
                <li className="collection-item app-py-2 app-px-2">
                  <center>
                    <img
                      src="/assets/images/site/UserVector2.png"
                      className="responsive-img"
                      style={{ maxHeight: '30vh' }}
                      alt="omage"
                    />
                    <h2 style={{ margin: '0px', padding: '0px' }}>{t('deposits.deposit')}</h2>
                  </center>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllDeposits;
