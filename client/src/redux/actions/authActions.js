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

export const dispatchUpdateAccount = (data) => {
    console.log(data);
    return {
        type: ACTIONS.UPDATE_ACCOUNT,
        payload: data,
    };
};

export const dispatchLogAdmin = () => {
    return {
        type: ACTIONS.LOG_ADMIN,
    };
};

export const dispatchOutAdmin = () => {
    return {
        type: ACTIONS.OUT_ADMIN,
    };
};
