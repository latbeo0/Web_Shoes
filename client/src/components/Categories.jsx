import styled from 'styled-components';

const Container = styled.div``;

const Header = styled.h1`
    font-size: 30px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 50px;
    letter-spacing: 2px;
`;

const Wrapper = styled.div`
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 0 auto 100px;
`;

const Category = styled.div`
    flex: 1;
    position: relative;
    width: 100%;
    height: 270px;
`;

const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
`;

const Title = styled.h1`
    position: relative;
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 1px;
    margin: 45px 0 18px;
    color: rgb(255, 255, 255);
    cursor: pointer;

    &:hover {
        color: #f15e2c;
    }
`;

const Item = styled.span`
    position: relative;
    display: block;
    text-align: center;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 1px;
    margin: 18px 0;
    color: rgb(255, 255, 255);
    cursor: pointer;

    &:hover {
        color: #f15e2c;
    }
`;

const Categories = () => {
    return (
        <Container>
            <Header>Categories</Header>
            <Wrapper>
                <Category>
                    <Image src='https://images.pexels.com/photos/3292554/pexels-photo-3292554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    <Title>Men's Shoes</Title>
                    <Item>New Arrivals</Item>
                    <Item>Best Seller</Item>
                    <Item>Sale-off</Item>
                </Category>
                <Category>
                    <Image src='https://images.pexels.com/photos/718981/pexels-photo-718981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    <Title>Women's Shoes</Title>
                    <Item>New Arrivals</Item>
                    <Item>Best Seller</Item>
                    <Item>Sale-off</Item>
                </Category>
                <Category>
                    <Image src='https://images.pexels.com/photos/4553275/pexels-photo-4553275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    <Title>Products</Title>
                    <Item>Basas</Item>
                    <Item>Vintas</Item>
                    <Item>Urbas</Item>
                    <Item>Pattas</Item>
                </Category>
            </Wrapper>
        </Container>
    );
};

export default Categories;
