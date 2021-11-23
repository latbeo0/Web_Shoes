import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiArrowDownSLine, RiSearch2Line } from 'react-icons/ri';

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 125px;

    @media only screen and (max-width: 991px) {
        display: none;
    }
`;

export const NavbarBrand = styled.div`
    width: 100px;
    height: 75%;
`;

export const BrandLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

export const BrandWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Brand = styled.img`
    height: 100%;
`;

export const NavbarList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
`;

export const NavbarItem = styled.li`
    & + & {
        margin-left: 20px;
    }

    @media only screen and (max-width: 1199px) {
        & + & {
            margin-left: 13px;
        }
    }
`;

export const NavbarItemSeparate = styled(NavbarItem)`
    height: 30px;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 42px;
`;

export const NavbarItemContainer = styled.div`
    padding: 0 0 45px;

    &:hover {
        color: #f15e2c;

        & .arrowWrapper {
            &::before {
                display: block;
            }

            & > .arrow {
                transform: rotate(-180deg);
            }
        }

        & > .sub {
            display: block;
        }
    }
`;

export const NavbarItemLink = styled(Link)`
    color: #000;
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
    color: inherit;
`;

export const NavbarItemTitle = styled.span`
    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    white-space: nowrap;

    @media only screen and (max-width: 1199px) {
        font-size: 2.1rem;
    }
`;

export const ArrowWrapper = styled.div`
    ${(props) => props.arrow !== 'none' && 'margin-left: 10px;'}
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        position: absolute;
        content: '';
        top: calc(100% + 23px);
        left: 25px;
        width: 0;
        height: 0;
        border-width: 12px;
        border-style: solid;
        border-color: transparent transparent #4c4c4c transparent;
        border-color: ${(props) => props.arrow === 'none' && 'transparent;'};
        z-index: 3;
        display: none;
    }

    @media only screen and (max-width: 1199px) {
        margin-left: 5px;
    }
`;

export const Arrow = styled(RiArrowDownSLine)`
    font-size: 2rem;
    transition: transform 0.2s linear;
`;

export const NavbarItemImage = styled.img``;

export const NavbarSubMenu = styled.ul`
    list-style: none;
    padding: 0;
    position: absolute;
    top: 155px;
    left: 0;
    width: 100%;
    background-color: #4c4c4c;
    z-index: 2;
    display: none;
`;

export const NavbarItemImageWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

export const NavbarSubItemImage = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 35px 30px 50px;
    opacity: 0.4;

    &:hover {
        opacity: 1;
    }
`;

export const SubItemImageLink = styled(Link)`
    color: #000;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SubItemImageWrapper = styled.div`
    width: 250px;
    height: 280px;
    position: relative;

    @media only screen and (max-width: 1199px) {
        width: 200px;
        height: 230px;
    }
`;

export const SubItemImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const SubItemImageTitle = styled.span`
    width: 100%;
    font-size: 2.2rem;
    font-weight: 700;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
    padding: 20px 10px;

    &:hover {
        color: #f15e2c;
    }
`;

export const SubItemFooter = styled.div`
    text-align: center;
    margin-bottom: 30px;
`;

export const SubItemDescription = styled.span`
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    color: #727272;
    font-style: italic;
    letter-spacing: 0.1rem;
`;

export const SubItemNameBrand = styled.span`
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
`;

export const NavbarSubItem = styled(NavbarSubItemImage)`
    align-items: unset;
    margin: 35px 0 50px;
    opacity: 1;
    height: ${(props) => props.separate === 'dash' && '320px'};
    border-left: ${(props) =>
        props.separate === 'dash' && '2px dashed #a5a5a5'};
    margin-top: ${(props) => props.separate === 'dash' && '80px'};

    & + & {
        margin-left: 100px;
    }
`;

export const NavbarItemWrapper = styled(NavbarItemImageWrapper)`
    align-items: flex-start;
`;

export const SubItemLink = styled(Link)`
    text-decoration: none;
`;

export const SubItemName = styled.div`
    font-size: 1.5rem;
    font-weight: 400;
    color: #cccccc;
    margin-bottom: 8px;

    &:hover {
        color: #f15e2c;
    }
`;

export const SubItemBlank = styled.div`
    height: 30px;
`;

export const SubItemHighlight = styled(SubItemName)`
    font-size: 2.3rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
`;

export const SubItemTitle = styled(SubItemName)`
    font-size: 1.6rem;
    font-weight: 900;
    color: #cccccc;
`;

export const NavbarSearch = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const SearchWrapper = styled.div`
    position: absolute;
    margin-left: 10px;
    pointer-events: none;
    display: flex;
    align-items: center;
`;

export const SearchIcon = styled(RiSearch2Line)`
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.25);
`;

export const SearchInput = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline: none;
    font-size: 14px;
    height: 36px;
    width: 230px;
    padding-left: 36px;

    &:focus {
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
            0 0 8px rgb(102 175 233 / 60%);
        border-color: #66afe9;
    }

    @media only screen and (max-width: 1199px) {
        width: unset;
    }
`;
