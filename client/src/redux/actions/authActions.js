import ACTIONS from './';

export const dispatchLogin = () => {
    return {
        type: ACTIONS.LOGIN,
    };
};

export const dispatchAccessToken = (res) => {
    return {
        type: ACTIONS.GET_TOKEN,
        payload: res.data,
    };
};

export const dispatchLogout = () => {
    return {
        type: ACTIONS.LOGOUT,
    };
};

export const dispatchGetAddress = (res) => {
    return {
        type: ACTIONS.GET_USER,
        payload: res.data,
    };
};
