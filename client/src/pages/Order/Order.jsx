import { useEffect, useState } from 'react';
import {
    Container,
    Header,
    WrapperInputs,
    NavbarSearch,
    SearchInput,
    Button,
    WrapperOrders,
    TableContainer,
    Table,
    HeaderTable,
    RowHeaderTable,
    ItemHeaderTable,
    BodyTable,
    RowBodyTable,
    ItemBodyTable,
    // ItemBodyWrapper,
    // ImageProduct,
    // TitleProduct,
    // ColorContainer,
    // Color,
    // Stock,
    // StockFalse,
    // StockTrue,
    // ActionContainer,
    // ActionItem,
    // EditIcon,
    // DeleteEdit,
    // LinkR,
} from './Order_Elements';
import { useSelector } from 'react-redux';
import { fetchGetOrder, fetchGetUserOrders } from '../../services/orderFetch';

const initialState = {
    idOrder: '',
    name: '',
};

const Order = () => {
    const auth = useSelector((state) => state.auth);

    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState(initialState);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setSearch({ ...search, [name]: value, err: '', success: '' });
    };

    useEffect(() => {
        if (auth.id) {
            fetchGetUserOrders(auth.token, auth.id)
                .then((res) => {
                    setOrders(res.data.orders);
                })
                .catch((err) => console.log(err));
        }
    }, [auth]);

    function formatCash(str) {
        return str
            .split('')
            .reverse()
            .reduce((prev, next, index) => {
                return (index % 3 ? next : next + '.') + prev;
            });
    }

    const handleSearchById = async () => {
        await fetchGetOrder(search.idOrder)
            .then((res) => {
                setOrders([res.data.order]);
            })
            .catch((err) => console.log(err));
    };

    return (
        <Container>
            <Header>Tra cứu đơn hàng</Header>
            <WrapperInputs>
                <NavbarSearch>
                    <SearchInput
                        placeholder='Enter Id Order'
                        type='text'
                        id='idOrder'
                        name='idOrder'
                        value={search.idOrder}
                        onChange={handleChangeInput}
                    />
                </NavbarSearch>
                <NavbarSearch>
                    <SearchInput placeholder='Enter name or phone' />
                </NavbarSearch>
                <Button onClick={handleSearchById}>Search</Button>
            </WrapperInputs>
            <WrapperOrders>
                <TableContainer>
                    <Table>
                        <HeaderTable>
                            <RowHeaderTable>
                                <ItemHeaderTable>Id</ItemHeaderTable>
                                <ItemHeaderTable>Name</ItemHeaderTable>
                                <ItemHeaderTable>Phone</ItemHeaderTable>
                                <ItemHeaderTable>Total Price</ItemHeaderTable>
                                <ItemHeaderTable>Date Buy</ItemHeaderTable>
                            </RowHeaderTable>
                        </HeaderTable>
                        <BodyTable>
                            {orders &&
                                orders.map((order) => (
                                    <RowBodyTable key={order._id}>
                                        <ItemBodyTable
                                            style={{ minWidth: '250px' }}
                                        >
                                            {order._id}
                                        </ItemBodyTable>
                                        <ItemBodyTable
                                            style={{ minWidth: '150px' }}
                                        >
                                            {order.userName}
                                        </ItemBodyTable>
                                        <ItemBodyTable
                                            style={{ minWidth: '150px' }}
                                        >
                                            {order.addressShipping.phone}
                                        </ItemBodyTable>
                                        <ItemBodyTable
                                            style={{ minWidth: '150px' }}
                                        >
                                            {formatCash(
                                                order.totalPrice.toString()
                                            )}{' '}
                                            VNĐ
                                        </ItemBodyTable>
                                        <ItemBodyTable
                                            style={{ minWidth: '150px' }}
                                        >
                                            {new Date(
                                                order.createdAt
                                            ).toLocaleDateString()}
                                        </ItemBodyTable>
                                    </RowBodyTable>
                                ))}
                        </BodyTable>
                    </Table>
                </TableContainer>
            </WrapperOrders>
        </Container>
    );
};

export default Order;
