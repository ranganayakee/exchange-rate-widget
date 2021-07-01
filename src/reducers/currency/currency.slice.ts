import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { thunk } from '../common/action-utils';
import * as api from '../../transport/currency.api';
import { CurrencyCollection } from './currency.types';
import { toCurrencyCollection } from './currency.mapper';
import { defaultCurrencyCollection } from './currency.defaults.types';

export const getCurrencies = (request = thunk) =>
    request({
        execute: (_state, service = api) => service.getAll(),
        succeeded: (data) => getCurrenciesSuccess(toCurrencyCollection(data)),
    });

export interface CurrencyState {
    collection: CurrencyCollection;
}

export const initialState: CurrencyState = {
    collection: { ...defaultCurrencyCollection }
};

const currenciesSlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        getCurrenciesSuccess(state, action: PayloadAction<CurrencyCollection>) {
            state.collection = action.payload;
        }
    }
});
export const { getCurrenciesSuccess } = currenciesSlice.actions;

const currenciesReducer = currenciesSlice.reducer;
export default currenciesReducer;
