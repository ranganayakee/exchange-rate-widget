import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiRequestError } from '../transport/api';
import { CollectionType } from './common/types';

export enum AppNotifyCode {
    Undefined = 0,
    EntitySaveSubmitted,
    EntityDeleteSubmitted
}

export interface AppState {
    isBusy: boolean;
    isError: boolean;
    errorCode?: string;
    errorMessage?: string;
    notify: AppNotifyState;
}

export const initialAppNotifyState: Readonly<AppNotifyState> = {
    code: AppNotifyCode.Undefined,
    entity: undefined
};

export const initialState: Readonly<AppState> = {
    isBusy: false,
    isError: false,
    notify: { ...initialAppNotifyState }
};
export interface AppNotifyState {
    code: AppNotifyCode;
    entity?: CollectionType;
}

export const appNotify = (code: AppNotifyCode, entity: CollectionType) => {
    const DEFAULT_TOAST_DURATION = 2500;

    return (dispatch: any) => {
        dispatch(notify({ code, entity }));
        setTimeout(() => {
            dispatch(dismissNotify());
        }, DEFAULT_TOAST_DURATION);
    };
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        appBusy(state, action: PayloadAction<boolean>) {
            state.isBusy = action.payload;
        },
        requestFailed(state, action: PayloadAction<ApiRequestError>) {
            state.isError = true;
            state.errorCode = action.payload.code;
            state.errorMessage = action.payload.message;
        },
        dismissRequestReturnedError(state) {
            state.isError = false;
            state.errorCode = '';
            state.errorMessage = '';
        },
        notify(state, action: PayloadAction<AppNotifyState>) {
            state.notify = action.payload;
        },
        dismissNotify(state) {
            state.notify = { ...initialAppNotifyState };
        }
    }
});

export const {
    appBusy,
    requestFailed,
    dismissRequestReturnedError,
    notify,
    dismissNotify
} = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;
