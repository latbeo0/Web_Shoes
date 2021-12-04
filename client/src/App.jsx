import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './pages/Login/';
import Register from './pages/Register/';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ActiveEmail from './pages/ActiveEmail/';
import ForgotPassword from './pages/ForgotPassword/';
import ResetPassword from './pages/ResetPassword/';
import Profile from './pages/Profile/';
import Logout from './pages/Logout';
import Admin from './pages/Admin/';
import { useSelector, useDispatch } from 'react-redux';
import AddProduct from './pages/AddProduct/';
import ListProduct from './pages/ListProduct/';
import UpdateProduct from './pages/UpdateProduct/';
import User from './pages/User/User';
import Test from './pages/Test';
import NotFound from './pages/NotFound404/';
import Map from './pages/Map/';
import { useEffect, useState } from 'react';
import { fetchGetAccessToken } from './services/userFetch';
import { dispatchAccessToken } from './redux/actions/authActions';
import Loader from './utils/Loader';

const App = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { isLogged, isAdmin } = auth;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin');
        if (firstLogin) {
            fetchGetAccessToken()
                .then((res) => {
                    dispatch(dispatchAccessToken(res));
                    setLoading(false);
                })
                .catch((err) => {
                    localStorage.removeItem('firstLogin');
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [isLogged, dispatch]);

    return (
        <BrowserRouter>
            {loading ? (
                <Loader />
            ) : (
                <Routes>
                    <Route path='/' element={<User />}>
                        <Route index element={<Home />} />
                        <Route path='products' element={<Products />} />
                        <Route path='product/:id' element={<Product />} />
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                        <Route
                            path='auth/activate/:activation_token'
                            element={<ActiveEmail />}
                        />
                        <Route
                            path='forgot_password'
                            element={<ForgotPassword />}
                        />
                        <Route
                            path='user/reset/:token'
                            element={<ResetPassword />}
                        />
                        <Route
                            path={`profile/${auth.id}`}
                            element={isLogged && <Profile />}
                        />
                        <Route path='logout' element={isLogged && <Logout />} />
                        <Route path='find_shop' element={<Map />} />
                    </Route>
                    {isAdmin && (
                        <Route path='/admin' element={<Admin />}>
                            <Route index element={<Test />} />
                            <Route
                                path='add_product'
                                element={<AddProduct />}
                            />
                            <Route
                                path='list_product'
                                element={<ListProduct />}
                            />
                            <Route
                                path='product/:id'
                                element={<UpdateProduct />}
                            />
                        </Route>
                    )}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            )}
        </BrowserRouter>
    );
};

export default App;
