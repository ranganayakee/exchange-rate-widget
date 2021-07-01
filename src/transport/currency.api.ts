import { get } from './api';

export const getAll = () => {
    return get(`https://open.exchangerate-api.com/v6/latest`);
};

