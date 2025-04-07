import { useForm } from 'react-hook-form';
import { createMessage } from '../../store/reducers/messages';
import { useDispatch } from 'react-redux';

export default function MessageForm() {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();

    const submitMessage = async (data) => {
        if (!data.content.trim()) return;
        await dispatch(createMessage(data.content));

        // Reset the input field after submiting the form.
        reset();
    };

    return (
        <form
            className="flex items-center p-4 bg-gray-800 shadow-md border-t border-gray-700"
            onSubmit={handleSubmit(submitMessage)}
        >
            <input
                className="flex-1 px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
                {...register('content')}
            />
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700">
                Send
            </button>
        </form>
    );
}
