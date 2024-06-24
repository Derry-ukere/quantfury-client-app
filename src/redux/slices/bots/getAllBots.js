// firebase
import { initializeApp } from 'firebase/app';
import { getFirestore,query,collection,getDocs } from 'firebase/firestore';

import { createSlice } from '@reduxjs/toolkit';

import { dispatch } from '../../store';
import { FIREBASE_API } from '../../../config';

const firebaseApp = initializeApp(FIREBASE_API);
const DB = getFirestore(firebaseApp);

// -------------------------------------------------------//

const initialState = {
  isLoading: false,
  error: null,
  bots: false,
};

const slice = createSlice({
  name: 'get-bots',
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
    // success state
    success(state,payload) {
    state.isLoading = false;
    state.bots = payload.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { hasError, startLoading, sentVerificationEmail, resetState } = slice.actions;

// ----------------------------------------------------------------------


export function getAllBots() {
    return async () => {
      dispatch(slice.actions.startLoading());
      try {
        const container = []
        const q = query(collection(DB, 'bots'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          container.push(doc.data());
        });
        console.log('bots', container)
        dispatch(slice.actions.success(container));
      } catch (error) {
        const errorMessage = error.message;
        dispatch(slice.actions.hasError(errorMessage));
      }
    };
  }


