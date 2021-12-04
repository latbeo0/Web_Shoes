import Banner from '../components/Banner';
import Concept from '../components/Concept';
import Sale from '../components/Sale';
import Categories from '../components/Categories';
import CategoriesMobile from '../components/CategoriesMobile';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { dispatchOutAdmin } from '../redux/actions/authActions';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dispatchOutAdmin());
    }, [dispatch]);

    return (
        <>
            <Banner />
            <Concept />
            <Categories />
            <CategoriesMobile />
            <Sale />
        </>
    );
};

export default Home;
