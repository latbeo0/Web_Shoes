import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='products' element={<Products />} />
                <Route path='product/:id' element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
