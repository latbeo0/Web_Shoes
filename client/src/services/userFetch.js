import axios from 'axios';

export const fetchRegister = async (username, email, password) => {
    try {
        return await axios.post('/api/auth/register', {
            username,
            email,
            password,
        });
    } catch (err) {
        console.log(1);
    }
};

export const fetchActiveEmail = async (activation_token) => {
    return await axios.post('/api/auth/activation', {
        activation_token,
    });
};

export const fetchLogin = async (email, password) => {
    return await axios.post('/api/auth/login', {
        email,
        password,
    });
};

export const fetchGetAccessToken = async () => {
    return await axios.post('/api/user/refresh_token', null);
};

export const fetchFindUser = async (token) => {
    const res = await axios.get('/api/user/find', {
        headers: { Authorization: token },
    });
    return res;
};

export const fetchForgotPassword = async (email) => {
    return await axios.post('/api/user/forgot', { email });
};

export const fetchResetPassword = async (password, token) => {
    return await axios.post(
        '/api/user/reset',
        { password },
        {
            headers: { Authorization: token },
        }
    );
};

export const fetchLogout = async () => {
    return await axios.get('/api/user/logout', null);
};

export const fetchChangeAvatar = async (formData, token) => {
    return await axios.post('/api/upload/upload_avatar', formData, {
        headers: {
            'content-type': 'multipart/form-data',
            Authorization: token,
        },
    });
};

export const fetchUpdateAccount = async (dataUd, auth) => {
    return await axios.put(
        `/api/user/${auth.id}`,
        {
            username: dataUd.username,
            avatar: dataUd.avatar,
            addressShipping: dataUd.addressShipping,
        },
        {
            headers: { Authorization: auth.token },
        }
    );
};

export const fetchGetAllUsers = async (token) => {
    const res = await axios.get('/api/user/', {
        headers: { Authorization: token },
    });
    return res;
};
