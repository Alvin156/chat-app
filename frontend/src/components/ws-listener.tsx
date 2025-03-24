import { useEffect } from "react";
import ws from "../services/ws-services";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../store/store";
import { listendToWs } from "../store/reducers/meta";

export default function WSListener() {
    const dispatch = useDispatch();
    const hasListenedToWs = useSelector<Store>(
        (store) => store.meta.hasListendToWs
    );

    useEffect(() => {
        if (hasListenedToWs) return;

        // WS: Events go here
        ws.on("RECEIVE_MESSAGE", (message) => {
            console.log(message);
        });

        dispatch(listendToWs());
    }, [hasListenedToWs]);

    return null;
}
