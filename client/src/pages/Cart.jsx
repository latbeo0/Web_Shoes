import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from './../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
    dispatchMinusQuantity,
    dispatchPlusQuantity,
} from '../redux/actions/cartActions';

const Container = styled.div`
    padding: 20px;
    margin: 40px 0 80px;
    ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) =>
        props.type === 'filled' ? 'none' : '1px solid #F15E2C'};
    background-color: ${(props) =>
        props.type === 'filled' ? '#F15E2C' : 'transparent'};
    color: ${(props) => (props.type === 'filled' ? 'white' : '#F15E2C')};
`;

const TopTexts = styled.div`
    ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
    font-size: 2rem;
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
    margin-bottom: 20px;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`
    font-size: 1.6rem;
`;

const ProductId = styled.span`
    font-size: 1.6rem;
`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
    font-size: 1.6rem;
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 2.4rem;
    margin: 5px;
    ${mobile({ margin: '5px 15px' })}
`;

const ProductPrice = styled.div`
    font-size: 3rem;
    font-weight: 200;
    ${mobile({ marginBottom: '20px' })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-size: 2.4rem;
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === 'total' && '500'};
    font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span`
    font-size: 1.8rem;
`;

const SummaryItemPrice = styled.span`
    font-size: 1.8rem;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    border: 1px solid #f15e2c;
    background-color: #f15e2c;
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
`;

const LinkR = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);

    function formatCash(str) {
        return str
            .split('')
            .reverse()
            .reduce((prev, next, index) => {
                return (index % 3 ? next : next + '.') + prev;
            });
    }

    const handleRemoveProduct = (e) => {
        const index = e.target.id;
        dispatch(dispatchMinusQuantity(index));
    };

    const handleAddProduct = (e) => {
        const index = e.target.id;
        dispatch(dispatchPlusQuantity(index));
    };

    const handleCheckOut = () => {
        if (cart.products.length !== 0) {
            navigate('/shipping_information');
        }
    };

    return (
        <Container>
            <Title>YOUR BAG</Title>
            <Top>
                <LinkR to='/products'>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                </LinkR>
                <TopTexts>
                    <TopText>Shopping Bag ({cart.products.length})</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type='filled' onClick={handleCheckOut}>
                    CHECKOUT NOW
                </TopButton>
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map((data, index) => (
                        <Product key={data.product._id}>
                            <ProductDetail>
                                <Image src={data.product.imgPrimary} />
                                <Details>
                                    <ProductName>
                                        <b style={{ fontSize: '1.6rem' }}>
                                            Product:
                                        </b>{' '}
                                        {data.product.name}
                                    </ProductName>
                                    <ProductId>
                                        <b style={{ fontSize: '1.6rem' }}>
                                            ID:
                                        </b>{' '}
                                        {data.product._id}
                                    </ProductId>
                                    <ProductColor color={data.detail.color} />
                                    <ProductSize>
                                        <b style={{ fontSize: '1.6rem' }}>
                                            Size:
                                        </b>{' '}
                                        {data.detail.sz}
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <IconWrapper
                                        id={index}
                                        onClick={handleAddProduct}
                                    >
                                        <Add
                                            style={{ pointerEvents: 'none' }}
                                        />
                                    </IconWrapper>
                                    <ProductAmount>
                                        {data.detail.qnt}
                                    </ProductAmount>
                                    <IconWrapper
                                        id={index}
                                        onClick={handleRemoveProduct}
                                    >
                                        <Remove
                                            style={{ pointerEvents: 'none' }}
                                        />
                                    </IconWrapper>
                                </ProductAmountContainer>
                                <ProductPrice>
                                    {formatCash(
                                        (
                                            data.product.price * data.detail.qnt
                                        ).toString()
                                    )}{' '}
                                    VNĐ
                                </ProductPrice>
                            </PriceDetail>
                        </Product>
                    ))}
                    <Hr />
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>
                            {formatCash(cart.total.toString())} VNĐ
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discord</SummaryItemText>
                        <SummaryItemPrice>0 VNĐ</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>
                            {formatCash(cart.total.toString())} VNĐ
                        </SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Container>
    );
};

export default Cart;
