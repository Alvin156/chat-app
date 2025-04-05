import { createAction } from '@reduxjs/toolkit';

export const actions = {
    apiCallBegan: createAction<APIArgs>('api/apiCallBegan'),
    apiCallSucceded: createAction<{}>('api/apiCallSucceeded'),
    apiCallFailed: createAction<{}>('api/apiCallFailed'),
};

export interface APIArgs {
    data?: object;
    headers?: object;
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete';
    url: string;
    /** Callback to handle side effects. */
    callback?: (payload: any) => any | Promise<any>;
    errorCallback?: (payload: any) => any | Promise<any>;
}