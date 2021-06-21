import './App.css';
import React, { Suspense, lazy, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Footer from './common/footer/Footer';
import Header from './common/header/Header';
import NotFound from './components/not-found/NotFound';
import Login from './components/login/Login';

//const Auth = lazy(() => import('./components/Login'));

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <Container className="app-body" as="article">
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Redirect exact path="/" to="/login" />
                <Route exact path="/login" component={Login} />
                <Route path="**" component={NotFound} />
              </Switch>
            </Suspense>
          </Router>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;