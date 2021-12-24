import axios from 'axios';

export const fetchProvince = async () => {
    try {
        return await axios.get(
            'https://provinces.open-api.vn/api/p/?depth=2',
            null
        );
    } catch (err) {
        console.log(err);
    }
};

export const fetchDistrict = async () => {
    try {
        return await axios.get(
            'https://provinces.open-api.vn/api/d/?depth=2',
            null
        );
    } catch (err) {
        console.log(err);
    }
};

export const fetchWard = async () => {
    try {
        return await axios.get(
            'https://provinces.open-api.vn/api/w/?depth=2',
            null
        );
    } catch (err) {
        console.log(err);
    }
};
