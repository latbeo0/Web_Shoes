import styled from 'styled-components';
import Banner from '../../components/Banner';
import Concept from '../../components/Concept';
import Sale from '../../components/Sale';
import Categories from '../../components/Categories';
import CategoriesMobile from '../../components/CategoriesMobile';
const Container = styled.div``;

const Home = () => {
    return (
        <Container>
            <Banner />
            <Concept />
            <Categories />
            <CategoriesMobile />
            <Sale />
        </Container>
    );
};

export default Home;
