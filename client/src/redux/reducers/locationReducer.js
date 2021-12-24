import ACTIONS from '../actions/';

const initialState = {
    province: [],
    district: [],
    ward: [],
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_PROVINCE:
            return {
                ...state,
                province: action.payload,
            };

        case ACTIONS.GET_ALL_DISTRICT:
            return {
                ...state,
                district: action.payload,
            };

        case ACTIONS.GET_ALL_WARD:
            return {
                ...state,
                ward: action.payload,
            };

        default:
            return state;
    }
};

export default locationReducer;
