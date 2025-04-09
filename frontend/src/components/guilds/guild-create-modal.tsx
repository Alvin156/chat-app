import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../store/store';
import { toggleModal } from '../../store/reducers/config';
import Input from '../utils/input';
import { useForm } from 'react-hook-form';
import { actions as api } from '../../store/socket';

export function GuildCreateModal() {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();
    const isModalOpen = useSelector((state: Store) => state.config.isModalOpen);

    const createGuild = (data) => {
        dispatch(
            api.wsCallBegan({
                event: 'GUILD_CREATE',
                data: data,
            })
        );
    };

    // TODO: Refactor ts.
    const closeModal = async () => {
        await handleSubmit(createGuild)().then(() => reset());
    };

    if (!isModalOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => dispatch(toggleModal(false))}
        >
            <div
                className="w-1/3 h-1/3 bg-gray-800 p-6 rounded-lg shadow-lg text-center relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    onClick={() => dispatch(toggleModal(false))}
                >
                    &times;
                </button>

                {/* Group heading and input */}
                <div className="flex flex-col gap-y-4 mb-6">
                    <h3 className="text-lg font-semibold">
                        Enter the name of the server.
                    </h3>
                    <Input {...register('name')} placeholder="Guild Name" />
                </div>
                <br />
                <div className="flex justify-between">
                    <button
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        onClick={() => dispatch(toggleModal(false))}
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
