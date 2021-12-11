import axios from 'axios';

export const fetchPayment = async (
    listOderItems,
    addressShipping,
    itemsPrice,
    totalPrice,
    userId,
    userName
) => {
    return await axios.post('/api/order/payment', {
        listOderItems,
        addressShipping,
        itemsPrice,
        totalPrice,
        userId,
        userName,
    });
};

export const fetchGetUserOrders = async (token, id) => {
    return await axios.get(`/api/order/find/${id}`, {
        headers: { Authorization: token },
    });
};

export const fetchGetOrder = async (idOrder) => {
    return await axios.post('/api/order/search', { idOrder });
};
