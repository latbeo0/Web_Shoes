import Banner from '../components/Banner';
import Concept from '../components/Concept';
import Sale from '../components/Sale';
import Categories from '../components/Categories';
import CategoriesMobile from '../components/CategoriesMobile';

const Home = () => {
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
