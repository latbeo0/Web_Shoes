import ACTIONS from './';

export const dispatchHandleCart = (data) => {
    return {
        type: ACTIONS.HANDLE_CART,
        payload: data,
    };
};

export const dispatchMinusQuantity = (index) => {
    return {
        type: ACTIONS.MINUS_QUANTITY,
        payload: index,
    };
};

export const dispatchPlusQuantity = (index) => {
    return {
        type: ACTIONS.PLUS_QUANTITY,
        payload: index,
    };
};

export const dispatchResetCart = () => {
    return {
        type: ACTIONS.RESET_CART,
    };
};
