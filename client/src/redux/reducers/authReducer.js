import ACTIONS from '../actions/';

const initialState = {
    id: '',
    username: '',
    avatar: '',
    isLogged: false,
    isAdmin: false,
    token: '',
    logAdmin: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN:
            return {
                ...state,
                isLogged: true,
            };

        case ACTIONS.GET_TOKEN:
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                avatar: action.payload.avatar,
                isLogged: true,
                isAdmin: action.payload.isAdmin,
                token: action.payload.access_token,
            };

        case ACTIONS.LOGOUT:
            return {
                id: '',
                username: '',
                avatar: '',
                isLogged: false,
                isAdmin: false,
                token: '',
            };

        case ACTIONS.UPDATE_ACCOUNT:
            return {
                ...state,
                username: action.payload.usernameUd,
                avatar: action.payload.avatarUd,
            };

        case ACTIONS.LOG_ADMIN:
            return {
                ...state,
                logAdmin: true,
            };

        case ACTIONS.OUT_ADMIN:
            return {
                ...state,
                logAdmin: false,
            };

        default:
            return state;
    }
};

export default authReducer;
