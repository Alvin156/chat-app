import { createSlice } from '@reduxjs/toolkit';
import { Params } from '../../types/ws';
import { DispatchFunction } from '../../types/store';
import { actions as api } from '../server';
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';
import { actions as ws } from '../socket';

const slice = createSlice({
    name: 'meta',
    initialState: {
        user: '',
        hasListendToWs: false,
    },
    reducers: {
        listendToWs: (action) => {
            action.hasListendToWs = true;
        },
        addUser: (action, { payload }) => {
            action.user = payload;
        },
    },
});

export const { addUser, listendToWs } = slice.actions;
export default slice.reducer;

const cookies = new Cookies();

export const loginUser: DispatchFunction = (payload: Params.User, cb) => {
    return (dispatch) => {
        dispatch(
            api.apiCallBegan({
                method: 'post',
                url: '/login',
                data: payload,
                callback: ({ token }) => {
                    dispatch(addUser(token));

                    const decoded = jwtDecode(token);
                    cookies.set('jwt_token', token, {
                        expires: new Date(decoded.exp! * 1000),
                    });
                    cb();
                },
            })
        );
    };
};

export const registerUser: DispatchFunction = (payload: Params.User, cb) => {
    return (dispatch) => {
        dispatch(
            api.apiCallBegan({
                method: 'post',
                url: '/register',
                data: payload,
                callback: ({ token }) => {
                    dispatch(addUser(token));

                    const decoded = jwtDecode(token);
                    cookies.set('jwt_token', token, {
                        expires: new Date(decoded.exp! * 1000),
                    });
                    cb();
                },
            })
        );
    };
};

export const ready: DispatchFunction = () => (dispatch) => {
    dispatch(
        ws.wsCallBegan({
            event: 'READY',
            data: { token: cookies.get('jwt_token') },
        })
    );
};
