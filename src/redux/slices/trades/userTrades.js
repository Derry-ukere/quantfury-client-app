/* eslint-disable consistent-return */
// firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, query, } from 'firebase/firestore';
import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../../store';
import { FIREBASE_API } from '../../../config';

const firebaseApp = initializeApp(FIREBASE_API);
const DB = getFirestore(firebaseApp);

// -------------------------------------------------------//

const initialState = {
  isLoading: false,
  error: null,
  trades : null,
};

const slice = createSlice({
  name: 'user-trade',
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
    success(state, payload) {
      state.trades = payload.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { hasError, startLoading, } = slice.actions;

// ----------------------------------------------------------- //

export const fetchUserTrades = () => async () => {
    dispatch(slice.actions.startLoading());
    try {
      // Create a query against the collection.
      const container = [];
      const q = query(collection(DB, 'trades'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        container.push(doc.data());
      });
      dispatch(slice.actions.success(container));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(slice.actions.hasError(errorMessage));
      console.error(errorMessage);
    }
   
  }

