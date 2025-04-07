import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rest from './middleware/rest';
import ws from './middleware/ws';
import config from './reducers/config';
import messages from './reducers/messages';
import meta from './reducers/meta';

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
            .prepend(ws)
            .prepend(rest),
    reducer: {
        meta,
        config,
        entities: combineReducers({
            messages,
        }),
    },
});

export type Store = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export default store;
