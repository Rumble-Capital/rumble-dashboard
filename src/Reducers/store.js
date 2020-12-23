import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { firestoreReducer, reduxFirestore, getFirestore } from "redux-firestore";
import { dataReducer } from "./dataReducer";
import authReducer from "./authReducer";

import fbConfig from "./fbConfig";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import { createLogger } from "redux-logger";
import { firebaseReducer, reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { wordpressReducer } from "./wordpressReducer";

//define logger
const logger = createLogger({
  predicate: (getState, action) => action.type !== ""
});

const reducers = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  data: dataReducer,
  authError: authReducer,
  wordpress: wordpressReducer
});

export default function configureStore(initialState, history) {
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(logger, thunk.withExtraArgument({ getFirebase, getFirestore }), promise),
      reactReduxFirebase(fbConfig), // redux binding for firebase
      reduxFirestore(fbConfig) // redux bindings for firestore)
    )
  );

  return store;
}
