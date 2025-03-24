import WSListener from "./components/ws-listener";
import { useDispatch } from "react-redux";
import { actions } from "./store/socket";

function App() {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(
            actions.wsCallBegan({
                event: "SEND_MESSAGE",
                data: {
                    content: "Test message please work",
                },
            })
        );
    };

    return (
        <div>
            <WSListener />
            <div onClick={onClick}>Chat App</div>
        </div>
    );
}

export default App;
