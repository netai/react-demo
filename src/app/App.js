import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Footer from './common/components/footer/Footer';
import Header from './common/components/header/Header';
import NotFound from './components/not-found/NotFound';
import Login from './components/login/Login';
import { ServerProvider } from './common/context/Server';
import { GlobalProvider } from './common/context/Global';
import AuthRoute from './common/route-guard/AuthRoute';


const Product = lazy(() => import('./modules/product/Product'));

const App = () => {
  return (
    <div className="app-container">
      <GlobalProvider>
      <Header />
      <Container className="app-body" as="article">
          <ServerProvider>
            <Router>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Redirect exact path="/" to="/login" />
                  <Route exact path="/login" component={Login} />
                  <AuthRoute path="/product/*" component={Product}/>
                  <Route path="**" component={NotFound} />
                </Switch>
              </Suspense>
            </Router>
          </ServerProvider>
      </Container>
      <Footer />
      </GlobalProvider>
    </div>
  );
}

export default App;