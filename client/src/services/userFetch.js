import axios from 'axios';

export const fetchGetAccessToken = async () => {
    return await axios.post('/api/user/refresh_token', null);
};

export const fetchFindUser = async (token) => {
    const res = await axios.get('/api/user/find', {
        headers: { Authorization: token },
    });
    return res;
};

export const fetchLogout = async () => {
    return await axios.get('/api/user/logout', null);
};
