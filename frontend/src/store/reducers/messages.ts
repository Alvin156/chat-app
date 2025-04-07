import { createSlice } from '@reduxjs/toolkit';
import { Params } from '../../types/ws';
import { actions as api } from '../socket';
import { DispatchFunction } from '../../types/store';

const slice = createSlice({
    name: 'messages',
    initialState: {
        list: [] as Params.Message[],
        total: {},
    },
    reducers: {
        created: ({ list }, { payload }: { payload: Params.Message }) => {
            const { author, content } = payload;
            list.push({ author, content });
        },
    },
});

export const actions = slice.actions;
export default slice.reducer;

export const createMessage: DispatchFunction = (content) => (dispatch) => {
    dispatch(
        api.wsCallBegan({
            event: 'SEND_MESSAGE',
            data: { content },
        })
    );
};
