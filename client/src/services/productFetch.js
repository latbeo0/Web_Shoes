import axios from 'axios';

export const fetchUploadImageProduct = async (formData, token) => {
    return await axios.post('/api/upload/upload_product', formData, {
        headers: {
            'content-type': 'multipart/form-data',
            Authorization: token,
        },
    });
};

export const fetchAddNewProduct = async (product, token) => {
    return await axios.post('/api/product/', product, {
        headers: {
            Authorization: token,
        },
    });
};

export const fetchGetAllProducts = async () => {
    return await axios.get('/api/product/', null);
};

export const fetchGetProduct = async (id) => {
    return await axios.get(`/api/product/find/${id}`, null);
};

export const fetchUpdateProduct = async (product, token, id) => {
    return await axios.put(`/api/product/${id}`, product, {
        headers: {
            Authorization: token,
        },
    });
};
