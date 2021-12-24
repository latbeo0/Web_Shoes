import axios from 'axios';

export const fetchUploadImageProduct = async (formData, token) => {
    try {
        return await axios.post('/api/upload/upload_product', formData, {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: token,
            },
        });
    } catch (err) {
        console.log(2);
    }
};

export const fetchAddNewProduct = async (product, token) => {
    try {
        return await axios.post('/api/product/', product, {
            headers: {
                Authorization: token,
            },
        });
    } catch (err) {
        console.log(2);
    }
};

export const fetchGetAllProducts = async () => {
    try {
        return await axios.get('/api/product/', null);
    } catch (err) {
        console.log(2);
    }
};

export const fetchGetProduct = async (id) => {
    try {
        return await axios.get(`/api/product/find/${id}`, null);
    } catch (err) {
        console.log(2);
    }
};

export const fetchUpdateProduct = async (product, token, id) => {
    try {
        return await axios.put(`/api/product/${id}`, product, {
            headers: {
                Authorization: token,
            },
        });
    } catch (err) {
        console.log(2);
    }
};
