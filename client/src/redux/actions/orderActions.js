import ACTIONS from '.';

export const dispatchHandleOrder = (data) => {
    return {
        type: ACTIONS.CREATE_ORDER,
        payload: data,
    };
};
