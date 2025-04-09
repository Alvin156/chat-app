import { useDispatch, useSelector } from 'react-redux';
import { Store } from './store/store';
import { GuildCreateModal } from './components/guilds/guild-create-modal';
import { Navigate } from 'react-router';
import MessageForm from './components/messages/message-form';
import MessageBox from './components/messages/message.box';
import { toggleModal } from './store/reducers/config';
import PageWrapper from './components/utils/page-wrapper';

// TODO: Refactor this please.

function App() {
    const dispatch = useDispatch();
    const messagesList = useSelector(
        (state: Store) => state.entities.messages.list
    );
    const user = useSelector((state: Store) => state.meta.user);
    const openModal = useSelector((state: Store) => state.config.isModalOpen);

    if (!user) return <Navigate to="/login" />;

    return (
        <PageWrapper pageTitle="chat.app">
            <div
                className="w-screen h-screen flex flex-col bg-gray-900 text-white"
                onClick={() => openModal && dispatch(toggleModal(false))}
            >
                <header className="bg-gray-800 text-white py-4 shadow-md border-b border-gray-700 flex justify-between items-center px-4">
                    <h2 className="text-2xl font-semibold">Chat App</h2>
                    <button
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                        onClick={() => dispatch(toggleModal(true))}
                    >
                        Join Room
                    </button>
                </header>

                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    {messagesList.map((message, index) => (
                        <MessageBox key={index} message={message} />
                    ))}
                </div>
                <MessageForm />
                {openModal && <GuildCreateModal />}
            </div>
        </PageWrapper>
    );
}

export default App;
