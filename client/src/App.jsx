import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Auth/Home';
import Products from './pages/Auth/Products';
import Product from './pages/Auth/Product';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ActiveEmail from './pages/Auth/ActiveEmail';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import Profile from './pages/User/Profile';
import Logout from './pages/User/Logout';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGetAccessToken } from './services/userFetch';
import { dispatchAccessToken } from './redux/actions/authActions';

const App = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { isLogged } = auth;

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin');
        if (firstLogin) {
            try {
                fetchGetAccessToken().then((res) =>
                    dispatch(dispatchAccessToken(res))
                );
            } catch (err) {
                localStorage.removeItem('firstLogin');
            }
        }
    }, [isLogged, dispatch]);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='products' element={<Products />} />
                <Route path='product/:id' element={<Product />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route
                    path='/auth/activate/:activation_token'
                    element={<ActiveEmail />}
                />
                <Route path='forgot_password' element={<ForgotPassword />} />
                <Route path='/user/reset/:token' element={<ResetPassword />} />
                <Route path='/profile' element={isLogged && <Profile />} />
                <Route path='/logout' element={<Logout />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
