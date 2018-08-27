import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer, { persistConfig } from './redux-reducer';
import RouteHistory from '../react-router/route-history';

/** Async ajax 지원을 위한 open source로 redux-saga 채택  */
const saga = createSagaMiddleware();
/**
 * 아래 코드로 인해 Redux store가 생성되며,
 * react-router, redux-devttol, redux-saga 등의 middleware들을 적용해 준 상태입니다.
 */
const store = createStore(
  connectRouter(RouteHistory)(rootReducer) /* preload state */,
  composeWithDevTools(applyMiddleware(saga, routerMiddleware(RouteHistory)))
);
const persistor = persistStore(store);

export default () => {
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./redux-reducer');
      store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
    });
  }
  return { store, persistor };
};
