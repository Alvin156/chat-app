import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ws from "./middleware/ws";
import meta from "./reducers/meta";

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(ws),
    reducer: {
        meta,
    },
});

export type Store = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export default store;
