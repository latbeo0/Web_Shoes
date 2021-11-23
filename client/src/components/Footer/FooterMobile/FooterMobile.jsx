import { ArrowForward, ArrowForwardIos } from '@material-ui/icons';
import {
    Container,
    ListWrapper,
    ItemWrapper,
    Body,
    Title,
    List,
    Item,
    Separate,
    ListSocial,
    ItemSocial,
    InputWrapper,
    Input,
    ArrowButton,
    Button,
    Span,
} from './FooterMobile_Elements';

const FooterMobile = () => {
    const handleClick = (e) => {
        e.target.classList.toggle('active');
    };

    return (
        <Container>
            <ListWrapper>
                <ItemWrapper onClick={handleClick}>
                    <Body>
                        <Title>Products</Title>
                        <ArrowForwardIos className='arrow' />
                    </Body>
                    <Separate />
                    <List className='sub'>
                        <Item>New Arrivals</Item>
                        <Item>Best Seller</Item>
                        <Item>Sale-off</Item>
                    </List>
                </ItemWrapper>
                <ItemWrapper onClick={handleClick}>
                    <Body>
                        <Title>About Company</Title>
                        <ArrowForwardIos className='arrow' />
                    </Body>
                    <Separate />
                    <List className='sub'>
                        <Item>New Arrivals</Item>
                        <Item>Best Seller</Item>
                        <Item>Sale-off</Item>
                    </List>
                </ItemWrapper>
                <ItemWrapper onClick={handleClick}>
                    <Body>
                        <Title>Helps</Title>
                        <ArrowForwardIos className='arrow' />
                    </Body>
                    <Separate />
                    <List className='sub'>
                        <Item>New Arrivals</Item>
                        <Item>Best Seller</Item>
                        <Item>Sale-off</Item>
                    </List>
                </ItemWrapper>
                <ItemWrapper onClick={handleClick}>
                    <Body>
                        <Title>Contact</Title>
                        <ArrowForwardIos className='arrow' />
                    </Body>
                    <Separate />
                    <List className='sub'>
                        <Item>New Arrivals</Item>
                        <Item>Best Seller</Item>
                        <Item>Sale-off</Item>
                    </List>
                </ItemWrapper>
                <ItemWrapper>
                    <Body>
                        <Title>LV7 SOCIAL</Title>
                    </Body>
                    <ListSocial>
                        <ItemSocial src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_facebook.svg' />
                        <ItemSocial src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_instagram.svg' />
                        <ItemSocial src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_youtube.svg' />
                    </ListSocial>
                </ItemWrapper>
                <ItemWrapper>
                    <Body>
                        <Title>SIGN UP TO GET MAIL</Title>
                    </Body>
                    <InputWrapper>
                        <Input placeholder='Search ...' />
                        <ArrowButton>
                            <ArrowForward className='icon' />
                        </ArrowButton>
                    </InputWrapper>
                </ItemWrapper>
                <ItemWrapper>
                    <InputWrapper>
                        <Button>
                            <Title>Find shop</Title>
                        </Button>
                    </InputWrapper>
                </ItemWrapper>
                <ItemWrapper style={{ textAlign: 'center' }}>
                    <Span>Copyright © 2021 LV7. All rights reserved.</Span>
                </ItemWrapper>
                <ItemWrapper style={{ height: '30px' }}></ItemWrapper>
            </ListWrapper>
        </Container>
    );
};

export default FooterMobile;
