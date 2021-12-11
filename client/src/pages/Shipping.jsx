import styled from 'styled-components';
import { mobile } from './../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchPayment } from './../services/orderFetch';
import { nanoid } from 'nanoid';
import { dispatchHandleOrder } from '../redux/actions/orderActions';

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

const FormGroup = styled.div`
    display: flex;
    margin: 0 60px 20px;
    flex-direction: column;

    &:first-child {
        margin-top: 50px;
    }

    &:last-child {
        margin-bottom: 50px;
    }
`;

const Label = styled.label`
    font-weight: 500;
    padding-bottom: 10px;
    line-height: 18px;
    font-size: 16px;
`;

const Input = styled.input`
    height: 40px;
    padding: 8px 12px;
    border: 1px solid #b3b3b3;
    border-radius: 3px;
    outline: none;
    font-size: 16px;

    &:hover {
        border-color: #1dbfaf;
    }
`;

const FormMessage = styled.span``;

const Message = styled.div`
    height: 30px;
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
    font-style: italic;
`;

const MessageSuccess = styled(Message)`
    color: #4e9f3d;
`;

const MessageErr = styled(Message)`
    color: #ff0000;
`;

const initialShipping = {
    username: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    err: '',
    success: '',
};

const Shipping = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);

    const [shipping, setShipping] = useState(initialShipping);

    const { country, city, address, username, phone, err, success } = shipping;

    function formatCash(str) {
        return str
            .split('')
            .reverse()
            .reduce((prev, next, index) => {
                return (index % 3 ? next : next + '.') + prev;
            });
    }

    useEffect(() => {
        setShipping({
            username: auth.username,
            phone: auth.phone,
            country: auth.country,
            city: auth.city,
            address: auth.address,
        });
    }, [auth]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShipping({ ...shipping, [name]: value, err: '', success: '' });
    };

    const checkOut = () => {
        if (username && phone && city && country && address) {
            handleCheckOut();
        } else {
            setShipping({
                ...shipping,
                err: 'Please fill all fields',
                success: '',
            });
        }
    };

    const handleCheckOut = async () => {
        const userId = auth.id ? auth.id : nanoid();
        const userName = username ? username : auth.username;

        const phoneUd = phone ? phone : auth.phone;
        const cityUd = city ? city : auth.city;
        const countryUd = country ? country : auth.country;
        const addressUd = address ? address : auth.address;
        const addressShipping = {
            phone: phoneUd,
            country: countryUd,
            city: cityUd,
            address: addressUd,
        };

        const listOderItems = [];
        const arrProduct = cart.products;
        arrProduct.forEach((item) => {
            const tempProduct = {
                id: item.product._id,
                name: item.product.name,
                color: item.detail.color,
                size: item.detail.sz,
                quantity: item.detail.qnt,
                price: item.product.price,
            };
            listOderItems.push(tempProduct);
        });
        const itemsPrice = cart.total;
        const totalPrice = cart.total;

        dispatch(
            dispatchHandleOrder({ userName, addressShipping, totalPrice })
        );

        await fetchPayment(
            listOderItems,
            addressShipping,
            itemsPrice,
            totalPrice,
            userId,
            userName
        )
            .then((res) => {
                navigate(`/pay_success/${res.data.id}`);
            })
            .catch((err) => console.log(err.msg));
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
                <TopButton type='filled' onClick={checkOut}>
                    CHECKOUT NOW
                </TopButton>
            </Top>
            <Bottom>
                <Info>
                    {err && <MessageErr>{err}</MessageErr>}
                    {success && <MessageSuccess>{success}</MessageSuccess>}
                    <FormGroup>
                        <Label htmlFor='username'>Username</Label>
                        <Input
                            type='text'
                            id='username'
                            value={username || auth.username}
                            name='username'
                            placeholder='Enter your username'
                            onChange={handleChange}
                        />
                        <FormMessage></FormMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='phone'>Phone</Label>
                        <Input
                            type='text'
                            id='phone'
                            value={phone || auth.phone}
                            name='phone'
                            placeholder='Enter your phone'
                            onChange={handleChange}
                        />
                        <FormMessage></FormMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='country'>Country</Label>
                        <Input
                            type='text'
                            id='country'
                            value={country || auth.country}
                            name='country'
                            placeholder='Enter your country'
                            onChange={handleChange}
                        />
                        <FormMessage></FormMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='city'>City</Label>
                        <Input
                            type='text'
                            id='city'
                            value={city || auth.city}
                            name='city'
                            placeholder='Enter your city'
                            onChange={handleChange}
                        />
                        <FormMessage></FormMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='address'>Address</Label>
                        <Input
                            type='text'
                            id='address'
                            value={address || auth.address}
                            name='address'
                            placeholder='Enter your address'
                            onChange={handleChange}
                        />
                        <FormMessage></FormMessage>
                    </FormGroup>
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
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>10.000 VNĐ</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>-10.000 VNĐ</SummaryItemPrice>
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

export default Shipping;
