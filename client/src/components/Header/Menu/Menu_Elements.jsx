import styled from 'styled-components';
import {
    BsClipboard,
    BsPinMap,
    BsHeart,
    BsFillPersonFill,
    BsBasket,
} from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 30px;
    background-color: #303030;

    @media only screen and (max-width: 991px) {
        display: none;
    }
`;

export const MenuList = styled.ul`
    display: flex;
    align-items: center;
    margin: 0 50px;
    list-style: none;
    padding: 0;
`;

export const MenuItem = styled.li`
    color: #fff;
    transition: color 0.1s linear;

    & + & {
        margin-left: 20px;
    }

    &:hover {
        color: #f15e2c;
    }
`;

export const ItemLink = styled(Link)`
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
`;

export const ItemTitle = styled.span`
    font-size: 1.3rem;
    font-weight: 300;
    cursor: pointer;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

export const OrderIcon = styled(BsClipboard)`
    font-size: 1.6rem;
`;

export const LocationIcon = styled(BsPinMap)`
    font-size: 1.6rem;
`;

export const WishlistIcon = styled(BsHeart)`
    font-size: 1.6rem;
`;

export const PersonIcon = styled(BsFillPersonFill)`
    font-size: 1.6rem;
`;

export const CartIcon = styled(BsBasket)`
    font-size: 1.6rem;
`;

export const LogoutIcon = styled(BiLogOut)`
    font-size: 1.6rem;
`;

export const AvatarWrapper = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 50%;
    overflow: hidden;
`;

export const Avatar = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
`;
