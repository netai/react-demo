import React from 'react';

const { createContext, useContext } = React;

const GlobalContext = createContext(null);

export const GlobalProvider = (props) => {

    const globalValue = {};

    const set = (key, value) => {
        globalValue[key] = value;
    };

    const value = {
        value: globalValue,
        fn: { set }
    };

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export const useGlobal = () => {
    return useContext(GlobalContext);
};