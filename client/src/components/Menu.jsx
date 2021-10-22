import styled from "styled-components";
import {
    AccountCircle,
    Favorite,
    Note,
    Room,
    ShoppingBasket,
} from "@material-ui/icons";

const Container = styled.div`
    height: 30px;
    background-color: #303030;
    display: flex;
    justify-content: flex-end;
`;

const MenuList = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    color: white;
    margin-right: 30px;
    font-size: 12px;
    font-weight: 300;
    cursor: pointer;

    .icon {
        color: white;
        margin-right: 5px;
        font-size: 18px;
    }
`;


const Menu = () => {
    return (
        <Container>
            <MenuList>
                <MenuItem>
                    <Note className='icon' />
                    Orders
                </MenuItem>
                <MenuItem>
                    <Room className='icon' />
                    Address
                </MenuItem>
                <MenuItem>
                    <Favorite className='icon' />
                    Wishlist
                </MenuItem>
                <MenuItem>
                    <AccountCircle className='icon' />
                    Login
                </MenuItem>
                <MenuItem>
                    <ShoppingBasket className='icon' />
                    Cart (0)
                </MenuItem>
            </MenuList>
        </Container>
    );
};

export default Menu;
