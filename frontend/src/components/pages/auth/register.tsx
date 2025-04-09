import { Link, Navigate, useNavigate } from 'react-router';
import FullParticles from '../../utils/full-particles';
import Input from '../../utils/input';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../../store/reducers/meta';
import { Store } from '../../../store/store';
import PageWrapper from '../../utils/page-wrapper';

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector<Store>((state) => state.meta.user);
    const { register, handleSubmit } = useForm();

    const onRegister = (data) =>
        dispatch(registerUser(data, () => navigate('/')));

    if (user) return <Navigate to="/" />;

    return (
        <PageWrapper pageTitle="Register | chat.app">
            <div className="w-screen h-screen grid grid-rows-1 place-items-center">
                <FullParticles />
                <div className="z-10 w-[55%] h-[60%] bg-gray-900 text-gray-300 rounded-md flex flex-col items-center p-6 border-2 border-slate-800">
                    <h1 className="text-3xl font-semibold">Register</h1>
                    <form
                        onSubmit={handleSubmit(onRegister)}
                        className="w-full flex flex-col items-center justify-center flex-grow"
                    >
                        <div className="w-[90%] flex flex-col items-center gap-y-4">
                            <Input {...register('name')} placeholder="Name" />
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
                                Register
                            </button>
                        </div>
                    </form>
                    <Link
                        to="/register"
                        className="mt-auto text-blue-500 hover:underline"
                    >
                        Already have an account?
                    </Link>
                </div>
            </div>
        </PageWrapper>
    );
}
