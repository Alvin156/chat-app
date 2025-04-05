import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ws from './middleware/ws';
import meta from './reducers/meta';
import messages from './reducers/messages';
import rest from './middleware/rest';

const store = configureStore({
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .prepend(ws)
            .prepend(rest),
    reducer: {
        meta,
        entities: combineReducers({
            messages,
        })
    },
});

export type Store = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export default store;
