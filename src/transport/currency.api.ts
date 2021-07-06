import { get } from './api';

export const getAll = () => {
    return get(`http://localhost:4001/exchange-rates/latest`);
};

