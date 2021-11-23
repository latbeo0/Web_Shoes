import styled from 'styled-components';
import Product from '../../components/Product';
import FilterSidebar from '../../components/FilterSidebar';

const Container = styled.div`
    width: 100vw;
`;

const Body = styled.div`
    max-width: 1200px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const Left = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 3;
`;

const BannerBox = styled.div`
    position: relative;
    width: 890px;
    height: 330px;
`;

const Banner = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ProductsWrapper = styled.div`
    width: 100%;
    margin-top: 40px;
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
`;

const Column = styled.div`
    width: 33.33333333%;
    padding-left: 10px;
    padding-right: 10px;
`;

const Products = () => {
    const data = [
        {
            id: 1,
            title: 'Basas Black Lace - Low Top',
            desc: 'Dark Grey',
            img: [
                'https://images.pexels.com/photos/9638823/pexels-photo-9638823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            ],
            priceCurrent: 320,
            priceOld: 420,
            status: 'Sale Off',
            amount: 10,
            tag: 'Online Only',
        },
        {
            id: 2,
            title: 'Basas Black Lace - Low Top',
            desc: 'Dark Grey',
            img: [
                'https://images.pexels.com/photos/9638823/pexels-photo-9638823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            ],
            priceCurrent: 320,
            status: 'New Arrival',
            amount: 10,
            tag: 'Limited Edition',
        },
        {
            id: 3,
            title: 'Basas Black Lace - Low Top',
            desc: 'Dark Grey',
            img: [
                'https://images.pexels.com/photos/9638823/pexels-photo-9638823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            ],
            priceCurrent: 320,
            status: 'Best Seller',
            amount: 0,
            tag: 'normal',
        },
        {
            id: 4,
            title: 'Basas Black Lace - Low Top',
            desc: 'Dark Grey',
            img: [
                'https://images.pexels.com/photos/9638823/pexels-photo-9638823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            ],
            priceCurrent: 320,
            status: 'Best Seller',
            amount: 2,
            tag: 'normal',
        },
    ];

    return (
        <Container>
            <Body>
                <Left>
                    <FilterSidebar />
                </Left>
                <Right>
                    <BannerBox>
                        <Banner src='https://images.pexels.com/photos/9638823/pexels-photo-9638823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                    </BannerBox>
                    <ProductsWrapper>
                        <Row>
                            {data.map((product) => (
                                <Column key={product.id}>
                                    <Product data={product} />
                                </Column>
                            ))}
                        </Row>
                    </ProductsWrapper>
                </Right>
            </Body>
        </Container>
    );
};

export default Products;
