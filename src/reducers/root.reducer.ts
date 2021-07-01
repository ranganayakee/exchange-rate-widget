import { combineReducers } from 'redux';
import app from './app.slice';
import currencies from './currency/currency.slice';

const rootReducer = combineReducers({
    app,
    currencies,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
