import { createAction } from '@reduxjs/toolkit';
import { WS } from '../types/ws';

export const actions = {
    wsCallBegan: createAction<WSArgs>('api/wsCallBegan'),
    wsCallSucceded: createAction<{}>('api/wsCallSucceeded'),
    wsCallFailed: createAction<{}>('api/wsCallFailed'),
};

export interface WSArgs {
    event: keyof WS.To;
    data: object;
}
