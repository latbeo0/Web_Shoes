import styled, { keyframes } from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Menu from './../components/Menu';
import Footer from '../components/Footer';
import { KeyboardArrowDown } from '@material-ui/icons';
import Product from '../components/Product';

const growth = keyframes`
    from {
        transform: scale(0);
        opacity: 0;
        height: 0px;
    }
    to {
        transform: scale(1);
        opacity: 1;
        height: 145px;
    }
`;

const scale = keyframes`
    from {
        transform: scale(1);
        opacity: 1;
        height: 145px;
    }
    to {
        transform: scale(0);
        opacity: 0;
        height: 0px;
    }
`;

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

const GenreWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Genre = styled.div`
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    padding: 0 15px;
    margin: 30px 0;
    cursor: pointer;

    & + & {
        border-left: 1px solid rgba(0, 0, 0, 0.5);
    }

    &:hover {
        color: rgba(0, 0, 0, 1);
    }
`;

const TypeWrapper = styled.div`
    padding: 15px 0;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    margin-bottom: 30px;
`;

const Type = styled.div`
    font-size: 16px;
    font-weight: 400;
    padding: 5px 15px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const FilterList = styled.div``;

const FilterItem = styled.div`
    margin-bottom: 30px;

    &.active {
        h1 {
            color: #f15e2c;
        }

        .arrow {
            transform: rotate(0deg);
            color: #f15e2c;
        }

        .sub {
            height: 100%;
            animation: ${growth} 0.2s linear;
        }
    }
`;

const Label = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 15px 10px;
    cursor: pointer;

    .arrow {
        font-size: 22px;
        transform: rotate(-90deg);
        pointer-events: none;
    }
`;

const Name = styled.h1`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    pointer-events: none;
`;

const ItemSubWrapper = styled.div`
    background-color: #303030;
    height: 0;
    overflow: hidden;
    transform-origin: 0 top;
    animation: ${scale} 0.2s linear;
`;

const ItemSub = styled.h2`
    font-size: 16px;
    font-weight: 400;
    padding: 5px 15px;
    color: white;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
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

const Separate = styled.div`
    width: 100%;
    height: 1px;
    border-top: 1px dashed #6f6f6f;
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

    const handleClick = (e) => {
        e.target.parentElement.classList.toggle('active');
    };

    return (
        <Container>
            <Menu />
            <Navbar />
            <Announcement />
            <Body>
                <Left>
                    <GenreWrapper>
                        <Genre>All</Genre>
                        <Genre>Male</Genre>
                        <Genre>Female</Genre>
                    </GenreWrapper>
                    <TypeWrapper>
                        <Type>Shoes</Type>
                        <Type>Up</Type>
                        <Type>Accessory</Type>
                    </TypeWrapper>
                    <FilterList>
                        <FilterItem>
                            <Label onClick={handleClick}>
                                <Name>Status</Name>
                                <KeyboardArrowDown className='arrow' />
                            </Label>
                            <ItemSubWrapper className='sub'>
                                <ItemSub>Limited Edition</ItemSub>
                                <ItemSub>Online Only</ItemSub>
                                <ItemSub>Sale off</ItemSub>
                                <ItemSub>Best Seller</ItemSub>
                                <ItemSub>New Arrival</ItemSub>
                            </ItemSubWrapper>
                        </FilterItem>
                        <Separate />
                    </FilterList>
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
            <Footer />
        </Container>
    );
};

export default Products;
