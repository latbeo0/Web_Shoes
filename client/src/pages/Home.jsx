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

const Container = styled.div`
    overflow-x: hidden;
`;

const Home = () => {
    return (
        <Container>
            <Menu />
            <Navbar />
            <Announcement />
            <Banner />
            <Concept />
            <Categories />
            <Sale />
            <Footer />
        </Container>
    );
};

export default Home;
