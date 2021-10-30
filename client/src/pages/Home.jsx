import React from 'react';
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

const Container = styled.div`
    position: relative;
    overflow-x: hidden;
    height: 100vh;

    &.hidden {
        overflow: hidden;
    }
`;

const Home = () => {
    return (
        <Container>
            <Menu />
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
        </Container>
    );
};

export default Home;
