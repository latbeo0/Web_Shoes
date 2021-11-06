import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Menu from './../components/Menu';
import Footer from '../components/Footer';

const Container = styled.div``;

const Product = () => {
    return (
        <Container>
            <Menu />
            <Navbar />
            <Announcement />
            <Footer />
        </Container>
    );
};

export default Product;
