export const globalState = {
    user: {},
    isLogin: false
};

export const GlobalReducer = (state = globalState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.data,
            };
        case 'UPDATE_LOGIN':
            return {
                ...state,
                isLogin: action.data,
            };
        default:
            throw new Error();
    }
};