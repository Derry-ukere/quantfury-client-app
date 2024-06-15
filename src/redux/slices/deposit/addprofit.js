// firebase
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { doc, setDoc, getFirestore,serverTimestamp} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';


import { createSlice } from '@reduxjs/toolkit';

import { dispatch } from '../../store';
import { FIREBASE_API } from '../../../config';

const firebaseApp = initializeApp(FIREBASE_API);
const DB = getFirestore(firebaseApp);

// -------------------------------------------------------//

const initialState = {
  isLoading: false,
  error: null,
  depositComplete: false,
  walletId: null,
  cyptoAmount: null,
  id: null,
  allDeposits: null,
  qrCode : null
};

const slice = createSlice({
  name: 'deposit-funds',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Send reset password email
    success(state) {
      state.isLoading = false;
      state.depositComplete = true;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { hasError, startLoading, sentVerificationEmail, resetState } = slice.actions;

// ----------------------------------------------------------------------

export function depositprofits() {
  return async () => {
    dispatch(slice.actions.startLoading());
    const auth = getAuth();
    try {
        const uuid = uuidv4();
        const profitIdId = uuid;
         setDoc(doc(DB, 'withdrawals', `${profitIdId}`), {
          user_id: auth.currentUser.uid,
          amount: '1.860000000008',
          status: "approved"
        }).then(() => {
          console.log('profit trade added')
        });
      } catch (error) {
        const errorMessage = error.message;
        console.error('err add profit', errorMessage)
      }
  };
};

