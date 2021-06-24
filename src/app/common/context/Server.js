import axios from 'axios';
import React from 'react';

const { createContext, useContext } = React;

const ServerContext = createContext(null);

export const ServerProvider = (props) => {

  const get = (url, reqParam) => {
    return axios.get(url, {params: reqParam});
  };
  
  const post = (url, reqbody) => {
    return axios.get(url, reqbody);
  };

  const value = {
    get: get,
    post: post,
  };

  return (
    <ServerContext.Provider value={value}>
      {props.children}
    </ServerContext.Provider>
  );
};

export const useServer = () => {
  return useContext(ServerContext);
};