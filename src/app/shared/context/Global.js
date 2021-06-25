import React from 'react';

const GlobalContext = React.createContext();
GlobalContext.displayName = 'GlobalContext';

export const useGlobalContext = () => React.useContext(GlobalContext);

export const GlobalProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={[globalState, dispatch]}>{children}</GlobalContext.Provider>
  );
};