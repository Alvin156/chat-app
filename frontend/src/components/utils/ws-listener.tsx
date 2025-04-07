import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ws from '../../services/ws-services';
import { actions as messages } from '../../store/reducers/messages';
import { listendToWs, ready } from '../../store/reducers/meta';
import { Store } from '../../store/store';

export default function WSListener() {
    const dispatch = useDispatch();
    const hasListenedToWs = useSelector<Store>(
        (store) => store.meta.hasListendToWs
    );

    useEffect(() => {
        if (hasListenedToWs) return;

        // WS: Events go here
        ws.on('RECEIVE_MESSAGE', (message) => {
            dispatch(messages.created(message));
        });

        dispatch(listendToWs());
    }, [dispatch, hasListenedToWs]);

    useEffect(() => {
        dispatch(ready());
    }, [dispatch]);

    return null;
}
