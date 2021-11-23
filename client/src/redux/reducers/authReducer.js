import ACTIONS from '../actions/';

const initialState = {
    id: '',
    username: '',
    avatar: '',
    isLogged: false,
    isAdmin: false,
    token: '',
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

        case ACTIONS.GET_ADDRESS:
            return {
                ...state,
            };

        default:
            return state;
    }
};

export default authReducer;
