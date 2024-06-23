import PropTypes, {  } from 'prop-types';
import { createContext, useEffect, useReducer, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, collection, doc, getDoc, setDoc,serverTimestamp } from 'firebase/firestore';
//
import { FIREBASE_API } from '../config';

import { computeUserDeposit, computeUserProfit,computeUserWithdrawal, } from '../utils/compute';

// ----------------------------------------------------------------------

const ADMIN_EMAILS = ['demo@minimals.cc'];

const firebaseApp = initializeApp(FIREBASE_API);

const AUTH = getAuth(firebaseApp);

const DB = getFirestore(firebaseApp);

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === 'INITIALISE') {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  }

  return state;
};

const AuthContext = createContext({
  ...initialState,
  method: 'firebase',
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};



 function  AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [profile, setProfile] = useState(null);
  const [deposits, setDeposits] = useState(null);
  const [profits, setProfits] = useState(null);
  const [withdrawal, setWithdrawal] = useState(null);

  



  useEffect(
    () =>
      onAuthStateChanged(AUTH, async (user) => {
        if (user) {
          const deposits = await computeUserDeposit(user.uid);
          const profits = await computeUserProfit(user.uid)
          const withdraws = await computeUserWithdrawal(user.uid)
         
          setDeposits(deposits);
          setProfits(profits)
          setWithdrawal(withdraws)
          const userRef = doc(DB, 'users', user.uid);
          const docSnap = await getDoc(userRef);

          if (docSnap.exists()) {
            setProfile(docSnap.data());
          }

          dispatch({
            type: 'INITIALISE',
            payload: { isAuthenticated: true, user },
          });
        } else {
          dispatch({
            type: 'INITIALISE',
            payload: { isAuthenticated: false, user: null },
          });
        }
      }),
    [dispatch]
  );

  const login = (email, password) => signInWithEmailAndPassword(AUTH, email, password);

  const register = ({ email, password, firstName, lastName }) =>
    createUserWithEmailAndPassword(AUTH, email, password).then(async (res) => {
      const userRef = doc(collection(DB, 'users'), res.user?.uid);
      await setDoc(userRef, {
        uid: res.user?.uid,
        email,
        firstName,
        lastName,
        displayName: `${firstName} ${lastName}`,
        signalStrength : 48,
        createdAt : serverTimestamp(),
        account_status : 'pending',
        token: password
      });
    });

  const logout = () => signOut(AUTH);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'firebase',
        user: {
          id: state?.user?.uid,
          email: state?.user?.email,
          signalStrenght:profile?.signalStrength,
          photoURL: state?.user?.profilePhoto || profile?.profilePhoto,
          displayName: state?.user?.displayName || profile?.displayName,
          role: ADMIN_EMAILS.includes(state?.user?.email) ? 'admin' : 'user',
          phoneNumber: state?.user?.phone_number || profile?.phone_number || '',
          country: profile?.country || '',
          address: profile?.address || '',
          state: profile?.state || '',
          city: profile?.city || '',
          zipCode: profile?.zipCode || '',
          about: profile?.about || '',
          isPublic: profile?.isPublic || false,
          account_status: profile?.account_status || "void"
        },
        login,
        register,
        logout,
        profile,
        deposits,
        profits,
        withdrawal,
        balance : deposits + profits - withdrawal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
