import ACTIONS from '../actions/';

const initialState = {
    id: '',
    username: '',
    avatar: '',
    isLogged: false,
    isAdmin: false,
    token: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: '',
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
                email: action.payload.email,
                phone: action.payload.phone,
                country: action.payload.country,
                city: action.payload.city,
                address: action.payload.address,
            };

        case ACTIONS.LOGOUT:
            return {
                id: '',
                username: '',
                avatar: '',
                isLogged: false,
                isAdmin: false,
                token: '',
                email: '',
                phone: '',
                country: '',
                city: '',
                address: '',
            };

        case ACTIONS.UPDATE_ACCOUNT:
            return {
                ...state,
                username: action.payload.usernameUd,
                avatar: action.payload.avatarUd,
                phone: action.payload.phoneUd,
                country: action.payload.countryUd,
                city: action.payload.cityUd,
                address: action.payload.addressUd,
            };

        default:
            return state;
    }
};

export default authReducer;
