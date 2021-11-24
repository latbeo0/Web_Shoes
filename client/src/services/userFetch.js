import axios from 'axios';

export const fetchRegister = async (username, email, password) => {
    return await axios.post('/api/auth/register', {
        username,
        email,
        password,
    });
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

export const fetchUpdateAccount = async (username, avatar, auth) => {
    return await axios.put(
        `/api/user/${auth.id}`,
        {
            username: username,
            avatar: avatar,
        },
        {
            headers: { Authorization: auth.token },
        }
    );
};
