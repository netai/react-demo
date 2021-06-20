import './App.css';
import React, { Suspense, lazy, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './common/not-found/NotFound';
const Auth = lazy(() => import('./authentication/Auth'));

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app-header"></header>
        <article>
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Redirect exact path="/" to="/auth/login" />
                <Route path="/auth" component={Auth} />
                <Route path="**" component={NotFound} />
              </Switch>
            </Suspense>
          </Router>
        </article>
        <footer className="app-footer"></footer>
      </div>
    );
  }
}

export default App;