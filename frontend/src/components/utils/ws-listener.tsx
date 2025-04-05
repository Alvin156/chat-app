import { useEffect } from 'react';
import ws from '../../services/ws-services';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../store/store';
import { addUser, listendToWs, ready } from '../../store/reducers/meta';
import { actions as messages } from '../../store/reducers/messages';
import Cookies from 'universal-cookie';

export default function WSListener() {
    const dispatch = useDispatch();
    const hasListenedToWs = useSelector<Store>(
        (store) => store.meta.hasListendToWs
    );

    useEffect(() => {
        if (hasListenedToWs) return;

        // WS: Events go here
        ws.on('RECEIVE_MESSAGE', (message) => {
            console.log(message);
            dispatch(messages.created(message));
        });

        dispatch(listendToWs());
    }, [dispatch, hasListenedToWs]);

    useEffect(() => {
        dispatch(ready());

        const token = new Cookies().get('jwt_token');
        if (token) dispatch(addUser(token));
    }, [dispatch]);

    return null;
}
