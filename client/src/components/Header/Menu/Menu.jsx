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
    AvatarWrapper,
    Avatar,
} from './Menu_Elements';

const Menu = () => {
    const auth = useSelector((state) => state.auth);

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
                            <ItemLink to='/profile'>
                                <AvatarWrapper>
                                    <Avatar src={auth.avatar} />
                                </AvatarWrapper>
                                <ItemTitle>{auth.username}</ItemTitle>
                            </ItemLink>
                        </MenuItem>
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
                        <ItemTitle>Cart (10)</ItemTitle>
                    </ItemLink>
                </MenuItem>
            </MenuList>
        </MenuContainer>
    );
};

export default Menu;
