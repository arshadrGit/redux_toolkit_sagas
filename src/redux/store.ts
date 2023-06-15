import { applyMiddleware, legacy_createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore } from "redux-persist";
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import reducers from '../redux/reducers/rootReducer';
import sagas from '../redux/sagas';

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: () => __DEV__ });

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
    reducers,
    applyMiddleware(loggerMiddleware, thunk, sagaMiddleware)
);
//persist data
export const persistor = persistStore(store);
// run the saga
sagaMiddleware.run(sagas);

export default store;