import ACTIONS from '../actions/';

// const initialState = {
//     id: '',
//     name: '',
//     description: '',
//     imgPrimary: '',
//     imgSecondary: '',
//     listImg: [],
//     gender: [],
//     productLine: '',
//     category: '',
//     collections: '',
//     material: '',
//     state: '',
//     price: 0,
//     style: '',
//     inStock: false,
//     detail: [],
// };

const initialState = [];

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_PRODUCTS:
            return [...action.payload];

        default:
            return state;
    }
};

export default productReducer;
