import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'meta',
    initialState: {
        userId: '',
        hasListendToWs: false,
    },
    reducers: {
        setUserId: (action, { payload }) => {
            action.userId = payload;
        },
        listendToWs: (action) => {
            action.hasListendToWs = true;
        },
    },
});

export const { setUserId, listendToWs } = slice.actions;
export default slice.reducer;
