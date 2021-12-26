import ACTIONS from './';

export const dispatchProvince = (data) => {
    return {
        type: ACTIONS.GET_ALL_PROVINCE,
        payload: data,
    };
};

export const dispatchDistrict = (data) => {
    return {
        type: ACTIONS.GET_ALL_DISTRICT,
        payload: data,
    };
};

export const dispatchWard = (data) => {
    return {
        type: ACTIONS.GET_ALL_WARD,
        payload: data,
    };
};
