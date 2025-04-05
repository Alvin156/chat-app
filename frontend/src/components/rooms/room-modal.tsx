
export function RoomModal({ isOpen, closeModal, roomId, setRoomId }) {
    if (!isOpen) return null;

    return (
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
    );
}