import ACTIONS from '../actions/';

const initialState = {
    listOderItems: [],
    addressShipping: {},
    itemsPrice: 0,
    totalPrice: 0,
    userId: '',
    userName: '',
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.CREATE_ORDER:
            return {
                ...state,
                listOderItems: action.payload.listOderItems,
                addressShipping: action.payload.addressShipping,
                itemsPrice: action.payload.itemsPrice,
                totalPrice: action.payload.totalPrice,
                userId: action.payload.userId,
                userName: action.payload.userName,
            };

        default:
            return { ...state };
    }
};

export default orderReducer;
