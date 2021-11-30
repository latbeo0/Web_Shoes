import Header from './components/Header';
import Footer from './components/Footer';
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
import Mappage from './pages/Map';
import NotFound from './pages/404NotFound';
import { useSelector } from 'react-redux';

const App = () => {
    const auth = useSelector((state) => state.auth);
    const { isLogged, isAdmin } = auth;

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
                <Route
                    path={`/profile/${auth.id}`}
                    element={isLogged && <Profile />}
                />
                <Route path='/logout' element={isLogged && <Logout />} />
                <Route path='/admin' element={isAdmin && <Admin />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/find_shop' element={<Mappage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
