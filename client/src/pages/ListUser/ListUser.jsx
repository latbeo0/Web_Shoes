import {
    ListProductContainer,
    Header,
    ListProductBody,
    TableContainer,
    Table,
    HeaderTable,
    RowHeaderTable,
    ItemHeaderTable,
    BodyTable,
    RowBodyTable,
    ItemBodyTable,
    ItemBodyWrapper,
    ImageProduct,
    TitleProduct,
    StockFalse,
    StockTrue,
    ActionContainer,
    ActionItem,
    EditIcon,
    DeleteEdit,
    LinkR,
} from './ListUser_Elements';
import { useEffect, useState } from 'react';
import Loader from '../../utils/Loader';
import { fetchGetAllUsers } from '../../services/userFetch';
import { useSelector } from 'react-redux';

const ListUser = () => {
    const auth = useSelector((state) => state.auth);
    const [listUsers, setListUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchGetAllUsers(auth.token)
            .then((res) => {
                console.log(res);
                setListUsers(res.data.users);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, [auth]);

    return (
        <ListProductContainer>
            <Header>List Product</Header>
            <ListProductBody>
                {loading ? (
                    <Loader />
                ) : (
                    <TableContainer>
                        <Table>
                            <HeaderTable>
                                <RowHeaderTable>
                                    <ItemHeaderTable>#</ItemHeaderTable>
                                    <ItemHeaderTable>Name</ItemHeaderTable>
                                    <ItemHeaderTable>Email</ItemHeaderTable>
                                    <ItemHeaderTable>Admin</ItemHeaderTable>
                                    <ItemHeaderTable>Action</ItemHeaderTable>
                                </RowHeaderTable>
                            </HeaderTable>
                            <BodyTable>
                                {listUsers.map((user, index) => (
                                    <RowBodyTable key={user._id}>
                                        <ItemBodyTable
                                            style={{ minWidth: '50px' }}
                                        >
                                            {index + 1}
                                        </ItemBodyTable>
                                        <ItemBodyTable
                                            style={{ width: '200px' }}
                                        >
                                            <ItemBodyWrapper>
                                                <ImageProduct
                                                    src={user.avatar}
                                                    alt=''
                                                />
                                                <TitleProduct>
                                                    {user.username}
                                                </TitleProduct>
                                            </ItemBodyWrapper>
                                        </ItemBodyTable>
                                        <ItemBodyTable
                                            style={{ width: 'auto' }}
                                        >
                                            <ItemBodyWrapper>
                                                <TitleProduct>
                                                    {user.email}
                                                </TitleProduct>
                                            </ItemBodyWrapper>
                                        </ItemBodyTable>
                                        <ItemBodyTable
                                            style={{ width: '100px' }}
                                        >
                                            {user.isAdmin ? (
                                                <StockTrue>True</StockTrue>
                                            ) : (
                                                <StockFalse>False</StockFalse>
                                            )}
                                        </ItemBodyTable>
                                        <ItemBodyTable
                                            style={{ width: '200px' }}
                                        >
                                            <ActionContainer>
                                                <LinkR
                                                    to={`/admin/user/${user._id}`}
                                                >
                                                    <ActionItem>
                                                        <EditIcon />
                                                    </ActionItem>
                                                </LinkR>
                                                <ActionItem>
                                                    <DeleteEdit />
                                                </ActionItem>
                                            </ActionContainer>
                                        </ItemBodyTable>
                                    </RowBodyTable>
                                ))}
                            </BodyTable>
                        </Table>
                    </TableContainer>
                )}
            </ListProductBody>
        </ListProductContainer>
    );
};

export default ListUser;
