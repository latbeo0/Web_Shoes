import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ActiveEmail from './pages/ActiveEmail';

const App = () => {
    return (
        <BrowserRouter>
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
            </Routes>
        </BrowserRouter>
    );
};

export default App;
