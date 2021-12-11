import ACTIONS from './';

export const dispatchGetAllProducts = (res) => {
    return {
        type: ACTIONS.GET_PRODUCTS,
        payload: res.data.products,
    };
};
