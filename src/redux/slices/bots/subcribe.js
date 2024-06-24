/* eslint-disable consistent-return */
// firebase
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { doc, getFirestore, getDocs,arrayRemove, collection,updateDoc,arrayUnion, query, where } from 'firebase/firestore';
import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../../store';
import { FIREBASE_API } from '../../../config';

const firebaseApp = initializeApp(FIREBASE_API);
const DB = getFirestore(firebaseApp);

// -------------------------------------------------------//

const initialState = {
  isLoading: false,
  error : null,
  success : false
};

const slice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
      state.success = false;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // SUCCESS
    traderCopied(state, action) {
        state.isLoading = false;
        state.success = action.payload;
      },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { hasError, startLoading, sentVerificationEmail, resetState } = slice.actions;

// ----------------------------------------------------------------------


export function subscribeBot(botid) {
    return async () => {
      dispatch(slice.actions.startLoading());
      const auth = getAuth();
      let status
      try {
        const botRef = doc(DB, 'bots', `${botid}`);
       const isCopied = await isBotSubscribed(botid);
       if(isCopied){
        await updateDoc(botRef, {
            subscribersList: arrayRemove(auth.currentUser.uid)
      })
      .then(() => {
           status = 'Removed'
         
      });
       }else{
        // Atomically add a new region to the "regions" array field.
        await updateDoc(botRef, {
            subscribersList: arrayUnion(auth.currentUser.uid)
        })
        .then(() => {
          status = 'Copied'
        });
       }
       dispatch(slice.actions.traderCopied(status));
      } catch (error) {
        const errorMessage = error.message;
        dispatch(slice.actions.hasError(errorMessage));
      }
      return status;
    };
  }

 async function isBotSubscribed(botid) {
    const auth = getAuth();
      try {
        const container = []
        const q = query(collection(DB, 'bots'), where('id', '==', botid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          container.push(doc.data());
        });
        return container[0].subscribersList.includes(auth.currentUser.uid)
      } catch (error) {
        const errorMessage = error.message;
        console.error(errorMessage)
      }
  
  }
