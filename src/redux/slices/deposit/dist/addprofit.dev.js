"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.depositprofits = depositprofits;
exports.resetState = exports.sentVerificationEmail = exports.startLoading = exports.hasError = exports["default"] = void 0;

var _auth = require("firebase/auth");

var _app = require("firebase/app");

var _firestore = require("firebase/firestore");

var _uuid = require("uuid");

var _toolkit = require("@reduxjs/toolkit");

var _store = require("../../store");

var _config = require("../../../config");

// firebase
var firebaseApp = (0, _app.initializeApp)(_config.FIREBASE_API);
var DB = (0, _firestore.getFirestore)(firebaseApp); // -------------------------------------------------------//

var initialState = {
  isLoading: false,
  error: null,
  depositComplete: false,
  walletId: null,
  cyptoAmount: null,
  id: null,
  allDeposits: null,
  qrCode: null
};
var slice = (0, _toolkit.createSlice)({
  name: 'deposit-funds',
  initialState: initialState,
  reducers: {
    // START LOADING
    startLoading: function startLoading(state) {
      state.isLoading = true;
    },
    // HAS ERROR
    hasError: function hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Send reset password email
    success: function success(state) {
      state.isLoading = false;
      state.depositComplete = true;
    }
  }
}); // Reducer

var _default = slice.reducer; // Actions

exports["default"] = _default;
var _slice$actions = slice.actions,
    hasError = _slice$actions.hasError,
    startLoading = _slice$actions.startLoading,
    sentVerificationEmail = _slice$actions.sentVerificationEmail,
    resetState = _slice$actions.resetState; // ----------------------------------------------------------------------

exports.resetState = resetState;
exports.sentVerificationEmail = sentVerificationEmail;
exports.startLoading = startLoading;
exports.hasError = hasError;

function depositprofits() {
  return function _callee() {
    var auth, uuid, profitIdId, errorMessage;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _store.dispatch)(slice.actions.startLoading());
            auth = (0, _auth.getAuth)();

            try {
              uuid = (0, _uuid.v4)();
              profitIdId = uuid;
              (0, _firestore.setDoc)((0, _firestore.doc)(DB, 'withdrawals', "".concat(profitIdId)), {
                user_id: auth.currentUser.uid,
                amount: '1.860000000008',
                status: "approved"
              }).then(function () {
                console.log('profit trade added');
              });
            } catch (error) {
              errorMessage = error.message;
              console.error('err add profit', errorMessage);
            }

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  };
}

;