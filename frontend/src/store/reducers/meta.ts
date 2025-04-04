import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'meta',
    initialState: {
        userId: '',
        hasListendToWs: false,
    },
    reducers: {
        listendToWs: (action) => {
            action.hasListendToWs = true;
        },
    },
});

export const { listendToWs } = slice.actions;
export default slice.reducer;
