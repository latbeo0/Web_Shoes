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
