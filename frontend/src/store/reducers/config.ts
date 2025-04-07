import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'config',
    initialState: {
        isModalOpen: false,
    },
    reducers: {
        toggleModal: (config, { payload }) => {
            config.isModalOpen = payload;
        },
    },
});

export const { toggleModal } = slice.actions;
export default slice.reducer;
