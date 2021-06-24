import './Login.css';
import Config from '../../Config';

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useServer } from '../../common/context/Server';
import { useGlobal } from '../../common/context/Global';

const Login = (props) => {

  const server = useServer();
  const global = useGlobal();

  const init = () => {
    const userData = sessionStorage.getItem('USER');
    if(userData) {
      const reqParam = {
        token: userData.token
      }
      server.get(Config.API.LOGIN_BY_TOKEN, reqParam).then(res => {
        global.fn.set('user', res.data);
        global.fn.set('isAutheticated', true);
        sessionStorage.setItem('USER', JSON.stringify(res.data));
        props.history.push('/product/list');
      });
    }
  }

  init();

  const login = (e) => {
    e.preventDefault();
    const reqbody = {
      username: '',
      password: ''
    }
    server.post(Config.API.LOGIN, reqbody).then(res => {
      global.fn.set('user', res.data);
      global.fn.set('isAutheticated', true);
      sessionStorage.setItem('USER', JSON.stringify(res.data));
      props.history.push('/product/list');
    });
  }

  return (
    <div className="app-login">
      <div className="login-window">
        <div className="page-header">
          <h3 className="page-title">Login</h3>
        </div>
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={login}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
