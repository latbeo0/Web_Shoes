import styled from 'styled-components';
import { Room, Search, ShoppingBasket } from '@material-ui/icons';

const Container = styled.div`
    height: 135px;
    background-color: #fff;
    display: flex;
    align-items: center;

    @media only screen and (min-width: 992px) {
        display: none;
    }

    @media only screen and (max-width: 575px) {
        height: 100px;
    }
`;

const Left = styled.div`
    position: relative;
    min-width: 66px;
    height: 115px;
    margin-left: 50px;

    @media only screen and (max-width: 575px) {
        margin-left: 30px;
    }

    @media only screen and (max-width: 575px) {
        height: 80px;
    }
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

const ImageBox = styled.div`
    display: flex;
    align-items: center;
    font-size: 28px;
    margin-left: 30px;

    .icon {
        font-size: 50px;
        margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
        &.hidden {
            display: none;
        }
    }

    @media only screen and (min-width: 576px) and (max-width: 767px) {
        margin-left: 15px;

        .icon {
            font-size: 58px;
        }
    }

    @media only screen and (max-width: 575px) {
        margin-left: 5px;

        .icon {
            font-size: 46px;
        }
    }
`;

const SearchContainer = styled.div`
    position: relative;

    .icon {
        position: absolute;
        top: 50%;
        left: 8px;
        transform: translateY(-50%);
        color: #666666;
        font-size: 50px;
        pointer-events: none;
    }

    @media only screen and (max-width: 767px) {
        display: none;
    }
`;

const SearchInput = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline: none;
    font-size: 21px;
    height: 60px;
    width: 300px;
    padding-left: 70px;

    &:focus {
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
            0 0 8px rgb(102 175 233 / 60%);
        border-color: #66afe9;
    }
`;

const Right = styled.div`
    min-width: 135px;
    height: 135px;
    background-color: red;

    @media only screen and (max-width: 575px) {
        min-width: 100px;
        height: 100px;
    }
`;

const NavbarMobile = () => {
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
                    <ImageBox className='hidden'>
                        <Search className='icon' />
                    </ImageBox>
                    <ImageBox className='hidden'>
                        <Room className='icon' />
                    </ImageBox>
                    <ImageBox>
                        <ShoppingBasket className='icon' />
                        (0)
                    </ImageBox>
                </Wrapper>
            </Center>
            <Right></Right>
        </Container>
    );
};

export default NavbarMobile;
