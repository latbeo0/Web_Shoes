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

const InputSelect = styled.select`
    font-size: 1.7rem;
    padding: 10px 0 10px 5px;
    outline: none;
`;

const InputOption = styled.option`
    font-size: 1.7rem;
`;

const initialSate = {
    username: '',
    phone: '',
    province: '',
    district: '',
    ward: '',
    address: '',
    err: '',
    success: '',
};

const Shipping = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);
    const location = useSelector((state) => state.location);

    const [data, setData] = useState(initialSate);

    const { username, phone, province, district, ward, address, err, success } =
        data;

    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    function formatCash(str) {
        return str
            .split('')
            .reverse()
            .reduce((prev, next, index) => {
                return (index % 3 ? next : next + '.') + prev;
            });
    }

    useEffect(() => {
        if (auth.addressShipping.district !== '') {
            let idProvince = 0;
            location.province.forEach((item) => {
                if (item.name === auth.addressShipping.province) {
                    idProvince = item.code;
                }
            });
            const newDistricts = location.district.filter(
                (item) => item.province_code === idProvince
            );
            setDistricts(newDistricts);
        }
        if (auth.addressShipping.ward !== '') {
            let idDistrict = 0;
            location.district.forEach((item) => {
                if (item.name === auth.addressShipping.district) {
                    idDistrict = item.code;
                }
            });

            const newWards = location.ward.filter(
                (item) => item.district_code === idDistrict
            );
            setWards(newWards);
        }
        setData({
            username: auth.username,
            phone: auth.addressShipping.phone,
            province: auth.addressShipping.province,
            district: auth.addressShipping.district,
            ward: auth.addressShipping.ward,
            address: auth.addressShipping.address,
            err: '',
            success: '',
        });
    }, [auth, location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value, err: '', success: '' });
    };

    const handleChangeProvince = (e) => {
        const { name, value } = e.target;

        let idProvince = 0;
        location.province.forEach((item) => {
            if (item.name === value) {
                idProvince = item.code;
            }
        });

        const newDistricts = location.district.filter(
            (item) => item.province_code === idProvince
        );
        setData({
            ...data,
            [name]: value,
            district: '',
            ward: '',
            err: '',
            success: '',
        });
        setDistricts(newDistricts);
    };

    const handleChangeDistrict = (e) => {
        const { name, value } = e.target;

        let idDistrict = 0;
        location.district.forEach((item) => {
            if (item.name === value) {
                idDistrict = item.code;
            }
        });

        const newWards = location.ward.filter(
            (item) => item.district_code === idDistrict
        );
        setData({
            ...data,
            [name]: value,
            ward: '',
            err: '',
            success: '',
        });
        setWards(newWards);
    };

    const checkOut = () => {
        if (username && phone && province && district && ward && address) {
            handleCheckOut();
        } else {
            setData({
                ...data,
                err: 'Please fill all fields',
                success: '',
            });
        }
    };

    const handleCheckOut = async () => {
        const userId = auth.id ? auth.id : nanoid();
        const userName = username ? username : auth.username;
        const phoneUd = phone ? phone : auth.phone;
        const provinceUd = province ? province : auth.province;
        const districtUd = district ? district : auth.district;
        const wardUd = ward ? ward : auth.ward;
        const addressUd = address ? address : auth.address;
        const addressShipping = {
            phone: phoneUd,
            province: provinceUd,
            district: districtUd,
            ward: wardUd,
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
                            type='phone'
                            id='phone'
                            value={phone}
                            name='phone'
                            placeholder='Enter your phone'
                            onChange={handleChange}
                        />
                        <FormMessage></FormMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label>Tỉnh / Thành phố</Label>
                        <InputSelect
                            name='province'
                            value={province}
                            disabled={!location}
                            onChange={handleChangeProvince}
                        >
                            <InputOption
                                selected={province === ''}
                                disabled={province !== ''}
                            >
                                --- Select ---
                            </InputOption>
                            {location.province.map((item) => (
                                <InputOption key={item.code} value={item.name}>
                                    {item.name}
                                </InputOption>
                            ))}
                        </InputSelect>
                        <FormMessage></FormMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label>Quận / Huyện</Label>
                        <InputSelect
                            name='district'
                            value={district}
                            disabled={!province}
                            onChange={handleChangeDistrict}
                        >
                            <InputOption
                                selected={district === ''}
                                disabled={district !== ''}
                            >
                                --- Select ---
                            </InputOption>
                            {districts.map((item) => (
                                <InputOption key={item.code} value={item.name}>
                                    {item.name}
                                </InputOption>
                            ))}
                        </InputSelect>
                        <FormMessage></FormMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label>Phường / Xã / Thị Trấn</Label>
                        <InputSelect
                            name='ward'
                            value={ward}
                            disabled={!district}
                            onChange={handleChange}
                        >
                            <InputOption
                                selected={ward === ''}
                                disabled={ward !== ''}
                            >
                                --- Select ---
                            </InputOption>
                            {wards.map((item) => (
                                <InputOption key={item.code} value={item.name}>
                                    {item.name}
                                </InputOption>
                            ))}
                        </InputSelect>
                        <FormMessage></FormMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='address'>Address</Label>
                        <Input
                            type='text'
                            disabled={!ward}
                            id='address'
                            value={address}
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
