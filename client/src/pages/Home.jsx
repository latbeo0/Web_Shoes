import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Concept from "../components/Concept";
import Sale from "../components/Sale";
import Contact from "../components/Contact";


const Container = styled.div``;

const Home = () => {
    return (
        <Container>
            <Menu />
            <Navbar />
            <Announcement />
            <Banner />
            <Concept/>
            <Sale/>
            <Footer />
        </Container>
    );
};

export default Home;
