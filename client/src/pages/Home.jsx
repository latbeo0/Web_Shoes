import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Concept from '../components/Concept';
import Sale from '../components/Sale';
import Categories from '../components/Categories';
import NavbarMobile from '../components/NavbarMobile';
import MenuMobile from '../components/MenuMobile';
import ButtonToggle from '../components/ButtonToggle';
import CategoriesMobile from '../components/CategoriesMobile';
import FooterMobile from '../components/FooterMobile';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import {
    dispatchGetUser,
    dispatchLogin,
    fetchUser,
} from '../redux/actions/authActions';

const Container = styled.div`
    position: relative;
    overflow-x: hidden;
    height: 100vh;

    &.hidden {
        overflow: hidden;
    }
`;

const Home = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin');
        if (firstLogin) {
            const getToken = async () => {
                const res = await axios.post('/api/user/refresh_token', null);

                dispatch({ type: 'GET_TOKEN', payload: res.data.access_token });
            };
            getToken();
        }
    }, [auth.isLogged, dispatch]);

    useEffect(() => {
        if (token) {
            const getUser = () => {
                dispatch(dispatchLogin());
                return fetchUser(token).then((res) => {
                    dispatch(dispatchGetUser(res));
                });
            };
            getUser();
        }
    }, [token, dispatch]);

    return (
        <Container>
            <Menu user={auth.isLogged && auth.user} />
            <Navbar />
            <NavbarMobile />
            <ButtonToggle />
            <Announcement />
            <MenuMobile />
            <Banner />
            <Concept />
            <Categories />
            <CategoriesMobile />
            <Sale />
            <Footer />
            <FooterMobile />
        </Container>
    );
};

export default Home;
