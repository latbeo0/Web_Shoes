import Menu from './Menu';
import MenuMobile from './MenuMobile';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import Announcement from './Announcement';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGetAccessToken } from '../../services/userFetch';
import { dispatchAccessToken } from '../../redux/actions/authActions';

const Header = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { isLogged } = auth;

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin');
        if (firstLogin) {
            fetchGetAccessToken()
                .then((res) => dispatch(dispatchAccessToken(res)))
                .catch((err) => {
                    localStorage.removeItem('firstLogin');
                });
        }
    }, [isLogged, dispatch]);

    return (
        <>
            <Menu />
            <Navbar />
            <NavbarMobile />
            <Announcement />
            <MenuMobile />
        </>
    );
};

export default Header;
