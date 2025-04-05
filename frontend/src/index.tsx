import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import WSListener from './components/utils/ws-listener';
import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './components/pages/auth/login';
import Register from './components/pages/auth/register';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <WSListener />
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" Component={App} />
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
