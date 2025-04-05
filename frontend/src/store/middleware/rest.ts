import axios from 'axios';
import { actions as api, APIArgs } from '../server';

export default (store) => (next) => async (action) => {
    if (action.type !== api.apiCallBegan.type) return next(action);

    const { url, method, headers, data, callback, errorCallback } =
        action.payload as APIArgs;

    console.log(data);

    next(action);

    try {
        const { data: payload } = await axios.request({
            baseURL: 'http://localhost:3001',
            url,
            method,
            headers,
            data,
        });

        store.dispatch(api.apiCallSucceded({ url, response: payload }));

        await callback?.(payload);
    } catch (error) {
        const response = (error as any).response;
        store.dispatch(api.apiCallFailed({ url, response }));

        await errorCallback?.(response);
    }
};
