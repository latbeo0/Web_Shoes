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
import { fetchGetAllProducts } from './services/productFetch';
import { dispatchGetAllProducts } from './redux/actions/productActions';
import Loader from './utils/Loader';
import Cart from './pages/Cart';
import Shipping from './pages/Shipping';
import PaySuccess from './pages/PaySuccess';
import ListUser from './pages/ListUser/';
import Order from './pages/Order/Order';
import Search from './pages/Search'
import {
    fetchProvince,
    fetchDistrict,
    fetchWard,
} from './services/locationFetch';
import {
    dispatchDistrict,
    dispatchProvince,
    dispatchWard,
} from './redux/actions/locationActions';

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
                })
                .catch((err) => {
                    localStorage.removeItem('firstLogin');
                });
        }
        setLoading(false);
    }, [isLogged, dispatch]);

    useEffect(() => {
        fetchGetAllProducts()
            .then((res) => {
                dispatch(dispatchGetAllProducts(res));
            })
            .catch((err) => console.log(err));

        setLoading(false);
    }, [dispatch]);

    useEffect(() => {
        fetchProvince()
            .then((res) => dispatch(dispatchProvince(res.data)))
            .catch((err) => console.log(err));
        fetchDistrict()
            .then((res) => dispatch(dispatchDistrict(res.data)))
            .catch((err) => console.log(err));
        fetchWard()
            .then((res) => dispatch(dispatchWard(res.data)))
            .catch((err) => console.log(err));
    }, [dispatch]);

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
                        <Route path='search/:name' element={<Search/>} />
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
                        <Route path='cart' element={<Cart />} />
                        <Route
                            path='shipping_information'
                            element={<Shipping />}
                        />
                        <Route
                            path='pay_success/:id'
                            element={<PaySuccess />}
                        />
                        <Route path='orders' element={<Order />} />
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
                            <Route path='list_user' element={<ListUser />} />
                        </Route>
                    )}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            )}
        </BrowserRouter>
    );
};

export default App;
