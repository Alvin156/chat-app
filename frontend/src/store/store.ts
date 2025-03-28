import { configureStore } from '@reduxjs/toolkit';
import ws from './middleware/ws';
import meta from './reducers/meta';
import messages from './reducers/messages';

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(ws),
    reducer: {
        meta,
        messages,
    },
});

export type Store = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export default store;
