import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { dispatchResetCart } from '../redux/actions/cartActions';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Header = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 40px;
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
`;

const Title = styled.div`
    font-size: 3rem;
    color: #42b86e;
`;

const Body = styled.div`
    padding: 30px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const GroupItem = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Name = styled.div`
    font-size: 1.6rem;
`;

const Value = styled.div`
    font-size: 1.8rem;
`;

const Footer = styled.div`
    padding-top: 30px;
    margin-bottom: 40px;
`;

const Button = styled.button`
    width: 200px;
    height: 50px;
    border: none;
    background-color: #f47c54;
    border-radius: 10px;
    color: white;
    font-size: 1.4rem;
    cursor: pointer;
`;

const LinkR = styled(Link)`
    text-decoration: none;
    color: unset;
    cursor: pointer;

    & + & {
        margin-left: 50px;
    }
`;

const PaySuccess = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const order = useSelector((state) => state.order);

    function formatCash(str) {
        return str
            .split('')
            .reverse()
            .reduce((prev, next, index) => {
                return (index % 3 ? next : next + '.') + prev;
            });
    }

    useEffect(() => {
        dispatch(dispatchResetCart());
    }, [dispatch]);

    return (
        <Container>
            <Header>
                <Image src='https://media.istockphoto.com/vectors/flat-icon-check-vector-id496603666?k=20&m=496603666&s=170667a&w=0&h=QOfI-aqzv1dEamb2evpWUvKkukJwtH4YRF_Ugwksk6Y=' />
                <Title>Payment Success</Title>
            </Header>
            <Body>
                <GroupItem>
                    <Name>Name:</Name>
                    <Value>{order.userName}</Value>
                </GroupItem>
                <GroupItem>
                    <Name>Phone:</Name>
                    <Value>{order.addressShipping.phone}</Value>
                </GroupItem>
                <GroupItem>
                    <Name>Amount Paid:</Name>
                    <Value>{formatCash(order.totalPrice.toString())} VNĐ</Value>
                </GroupItem>
                <GroupItem>
                    <Name>Transaction ID:</Name>
                    <Value>{id}</Value>
                </GroupItem>
            </Body>
            <Footer>
                <LinkR to='/'>
                    <Button>Home</Button>
                </LinkR>
                <LinkR to='/products'>
                    <Button>Continue Shopping</Button>
                </LinkR>
            </Footer>
        </Container>
    );
};

export default PaySuccess;
