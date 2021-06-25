import './App.css';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { GlobalProvider } from './shared/context/Global';
import { GlobalReducer, globalState } from './shared/reducer/Global';
import Footer from './shared/components/footer/Footer';
import Header from './shared/components/header/Header';
import AuthRoute from './shared/route/AuthRoute';
import NotFound from './components/not-found/NotFound';
import Login from './components/login/Login';
const Product = lazy(() => import('./modules/product/Product'));

const App = () => {

  return (
    <div className="app-container">
      <GlobalProvider initialState={globalState} reducer={GlobalReducer}>
        <Header />
        <Container className="app-body" as="article">
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Redirect exact path="/" to="/login" />
                <Route exact path="/login" component={Login} />
                <AuthRoute path="/product/*" component={Product} />
                <Route path="**" component={NotFound} />
              </Switch>
            </Suspense>
          </Router>
        </Container>
        <Footer />
      </GlobalProvider>
    </div>
  );
}

export default App;