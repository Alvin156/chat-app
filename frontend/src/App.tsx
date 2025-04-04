import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createMessage } from './store/reducers/messages';
import { Store } from './store/store';

function App() {
    const dispatch = useDispatch();
    const messagesList = useSelector((state: Store) => state.messages.list);
    const [content, setContent] = useState('');
    const [roomId, setRoomId] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const submitMessage = (e) => {
        e.preventDefault();
        if (!content.trim()) return;
        dispatch(createMessage({ content }));
        setContent('');
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="w-screen h-screen flex flex-col bg-gray-900 text-white">
            <header className="bg-gray-800 text-white py-4 shadow-md border-b border-gray-700 flex justify-between items-center px-4">
                <h2 className="text-2xl font-semibold">Chat App</h2>
                <button 
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                    onClick={() => setIsModalOpen(true)}
                >
                    Join Room
                </button>
            </header>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {messagesList.map((message, index) => (
                    <div 
                        key={`${message.author}-${message.content}-${index}`} 
                        className="p-3 bg-gray-800 shadow rounded-lg w-fit max-w-[75%]"
                    >
                        <p className="text-gray-300">{message.content}</p>
                    </div>
                ))}
            </div>

            <form
                className="flex items-center p-4 bg-gray-800 shadow-md border-t border-gray-700"
                onSubmit={submitMessage}
            >
                <input 
                    className="flex-1 px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Type your message..."
                />
                <button 
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700"
                >Send</button>
            </form>

            {isModalOpen && (
                <div 
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" 
                    onClick={closeModal}
                >
                    <div 
                        className="bg-gray-800 p-6 rounded-lg shadow-lg text-center relative" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            className="absolute top-2 right-2 text-gray-400 hover:text-white"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h3 className="text-lg font-semibold mb-4">Enter Room ID</h3>
                        <input 
                            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={roomId}
                            onChange={(e) => setRoomId(e.target.value)}
                            placeholder="Room ID"
                        />
                        <div className="mt-4 flex justify-between">
                            <button 
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button 
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                onClick={closeModal}
                            >
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
