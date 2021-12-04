import Menu from './Menu';
import MenuMobile from './MenuMobile';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import Announcement from './Announcement';

const Header = () => {
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
