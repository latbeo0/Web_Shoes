import { useSelector } from 'react-redux';
import {
    MenuContainer,
    MenuList,
    MenuItem,
    ItemLink,
    ItemTitle,
    IconWrapper,
    OrderIcon,
    LocationIcon,
    WishlistIcon,
    PersonIcon,
    CartIcon,
    LogoutIcon,
    AdminIcon,
    AvatarWrapper,
    Avatar,
} from './Menu_Elements';

const Menu = () => {
    const auth = useSelector((state) => state.auth);
    const cart = useSelector((state) => state.cart);

    return (
        <MenuContainer>
            <MenuList>
                <MenuItem>
                    <ItemLink to='/orders'>
                        <IconWrapper>
                            <OrderIcon color={'#fff'} />
                        </IconWrapper>
                        <ItemTitle>Orders</ItemTitle>
                    </ItemLink>
                </MenuItem>
                <MenuItem>
                    <ItemLink to='/find_shop'>
                        <IconWrapper>
                            <LocationIcon color={'#fff'} />
                        </IconWrapper>
                        <ItemTitle>Find Shop</ItemTitle>
                    </ItemLink>
                </MenuItem>
                <MenuItem>
                    <ItemLink to='/wishlist'>
                        <IconWrapper>
                            <WishlistIcon color={'#fff'} />
                        </IconWrapper>
                        <ItemTitle>Wishlist</ItemTitle>
                    </ItemLink>
                </MenuItem>
                {auth.id ? (
                    <>
                        <MenuItem>
                            <ItemLink to={`/profile/${auth.id}`}>
                                <AvatarWrapper>
                                    <Avatar src={auth.avatar} />
                                </AvatarWrapper>
                                <ItemTitle>{auth.username}</ItemTitle>
                            </ItemLink>
                        </MenuItem>
                        {auth.isAdmin && (
                            <MenuItem>
                                <ItemLink to='/admin'>
                                    <IconWrapper>
                                        <AdminIcon color={'#fff'} />
                                    </IconWrapper>
                                    <ItemTitle>Admin</ItemTitle>
                                </ItemLink>
                            </MenuItem>
                        )}
                        <MenuItem>
                            <ItemLink to='/logout'>
                                <IconWrapper>
                                    <LogoutIcon color={'#fff'} />
                                </IconWrapper>
                                <ItemTitle>Logout</ItemTitle>
                            </ItemLink>
                        </MenuItem>
                    </>
                ) : (
                    <MenuItem>
                        <ItemLink to='/login'>
                            <IconWrapper>
                                <PersonIcon color={'#fff'} />
                            </IconWrapper>
                            <ItemTitle>Login</ItemTitle>
                        </ItemLink>
                    </MenuItem>
                )}

                <MenuItem>
                    <ItemLink to='/cart'>
                        <IconWrapper>
                            <CartIcon color={'#fff'} />
                        </IconWrapper>
                        <ItemTitle>Cart ({cart.products.length})</ItemTitle>
                    </ItemLink>
                </MenuItem>
            </MenuList>
        </MenuContainer>
    );
};

export default Menu;
