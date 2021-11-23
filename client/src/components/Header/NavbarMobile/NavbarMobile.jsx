import {
    Container,
    Left,
    Image,
    Center,
    Wrapper,
    ImageBox,
    SearchContainer,
    SearchInput,
    Right,
} from './NavbarMobile_Elements';
import ButtonToggle from './ButtonToggle/';
import { Room, Search, ShoppingBasket } from '@material-ui/icons';

const NavbarMobile = () => {
    return (
        <>
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
            <ButtonToggle />
        </>
    );
};

export default NavbarMobile;
