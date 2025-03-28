import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createMessage } from './store/reducers/messages';
import { Store } from './store/store';

function App() {
    const dispatch = useDispatch();
    const userId = useSelector((state: Store) => state.meta.userId)
    const messagesList = useSelector((state: Store) => state.messages.list);
    const [content, setContent] = useState('');

    return (
        <div>
            <h2>Chat App</h2>
            <form
                onSubmit={(e) => {
                    const message = { author: userId, content }
                    e.preventDefault();
                    dispatch(createMessage(message));
                }}
            >
                <input onChange={(e) => setContent(e.target.value)} />
                <button>Send</button>
            </form>
            {messagesList.map((message) => {
                return <p 
                    key={`${message.author}-${message.content}`}
                >{message.content}</p>;
            })}
        </div>
    );
}

export default App;
