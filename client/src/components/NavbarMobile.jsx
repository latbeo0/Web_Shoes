import styled from 'styled-components';
import { useState } from 'react';
import { Search, ShoppingBasket } from '@material-ui/icons';

const Container = styled.div`
    height: 135px;
    background-color: #fff;
    display: flex;
    align-items: center;
`;

const Left = styled.div`
    position: relative;
    width: 66px;
    height: 115px;
    margin-left: 100px;
`;

const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const Center = styled.div`
    flex: 1;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageBox = styled.div``;

const SearchContainer = styled.div`
    position: relative;

    .icon {
        position: absolute;
        top: 8px;
        left: 8px;
        color: #666666;
        font-size: 20px;
        pointer-events: none;
    }
`;

const SearchInput = styled.input`
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
`;

const Right = styled.div`
    display: flex;
    width: 135px;
    height: 135px;
    background-color: #4c4c4c;
`;

const ToggleBox = styled.div`
    width: 55px;
    height: 30px;
    margin: auto;
    outline: none;
    position: relative;
    top: 0;
    transition: 0.5s;

    &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 50%;
        border-top: 2px solid white;
        border-bottom: 2px solid white;
        top: 0;
        left: 0;
        transition: 0.5s;
    }

    &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        border-top: 2px solid white;
        border-bottom: 2px solid white;
        top: 0;
        left: 0;
        transition: 0.5s;
    }

    &.show {
        &::before {
            height: 100%;
            border-bottom: 2px solid transparent;
            transform: rotate(-45deg) translate(0, 15px);
        }

        &::after {
            border-top: 2px solid transparent;
            transform: rotate(45deg) translate(0, -15px);
        }
    }
`;

const NavbarMobile = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <Container>
            <Left>
                <Image src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg' />
            </Left>
            <Center>
                <Wrapper>
                    <SearchContainer>
                        <Search className='icon' />
                        <SearchInput placeholder='Search' />
                    </SearchContainer>
                    <ImageBox>
                        <ShoppingBasket className='icon' />
                        Cart (0)
                    </ImageBox>
                </Wrapper>
            </Center>
            <Right>
                <ToggleBox
                    className={toggle ? 'show' : ''}
                    onClick={handleClick}
                />
            </Right>
        </Container>
    );
};

export default NavbarMobile;
