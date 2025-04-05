import { Link, Navigate, useNavigate } from 'react-router';
import FullParticles from '../../utils/full-particles';
import Input from './input';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../store/reducers/meta';
import { Store } from '../../../store/store';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: Store) => state.meta.user);
    const { register, handleSubmit } = useForm();

    const onLogin = (data) => dispatch(loginUser(data, () => navigate('/')));

    if (user) return <Navigate to="/" />;

    return (
        <div className="w-screen h-screen grid grid-rows-1 place-items-center">
            <FullParticles />
            <div className="z-10 w-[55%] h-[60%] bg-gray-900 text-gray-300 rounded-md flex flex-col items-center p-6 border-2 border-slate-800">
                <h1 className="text-3xl font-semibold">Login</h1>
                <form
                    onSubmit={handleSubmit(onLogin)}
                    className="w-full flex flex-col items-center justify-center flex-grow"
                >
                    <div className="w-[90%] flex flex-col items-center gap-y-4">
                        <Input
                            {...register('email')}
                            placeholder="Email"
                            type="email"
                        />
                        <Input
                            {...register('password')}
                            placeholder="Password"
                            type="password"
                        />
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <Link
                    to="/register"
                    className="mt-auto text-blue-500 hover:underline"
                >
                    Don't have an account?
                </Link>
            </div>
        </div>
    );
}
