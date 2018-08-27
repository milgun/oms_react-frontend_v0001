import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import blue from '@material-ui/core/colors/blue';
// Custom library
import setStoreConfig from './lib/redux/redux-store';
import PrivateRoute from './lib/react-router/private-route';
import RouteHistory from './lib/react-router/route-history';
// Container components
import SignForm from './components/auth/Container';
// Page components
import Page from './pages/Page';

/** Material-ui theme setting */
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
/** Get Redux Store */
const mainStore = setStoreConfig();
/** App의 기본 설정들을 위한 Wrapper들을 적용시키는 Functional Component */
const AppWrapper: React.SFC<{}> = props => (
  <Provider store={mainStore.store}>
    <PersistGate loading={null} persistor={mainStore.persistor}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <ConnectedRouter history={RouteHistory}>
            {props.children}
          </ConnectedRouter>
        </CssBaseline>
      </MuiThemeProvider>
    </PersistGate>
  </Provider>
);
/**
 * Routing Entry variable
 * Oms의 컨셉은 React Router를 활용한 표시 데이터의 변경이 아닌,
 * React Loadable을 활용하여 Component를 Dynamic Load 해오기에
 * Router 부분의 Code가 짧습니다.
 */
const AppEntry = ({}) => (
  <Switch>
    <Route path="/signin" component={SignForm} />
    <PrivateRoute
      isAuth={mainStore.store.getState().auth.isSignIn}
      path="/"
      component={Page}
    />
  </Switch>
);
/** App 진입점 */
const App = () => (
  <AppWrapper>
    <AppEntry />
  </AppWrapper>
);

export default hot(module)(App);
