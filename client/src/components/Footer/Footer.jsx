import { ArrowForward } from '@material-ui/icons';
import {
    Container,
    Row,
    Column,
    Collection,
    ImageBox,
    Image,
    Button,
    Title,
    Item,
    Span,
    ItemSocial,
    ItemWrapper,
    Input,
    ButtonArrow,
} from './Footer_Elements';
import FooterMobile from './FooterMobile/';

const Footer = () => {
    return (
        <>
            <Container>
                <Row>
                    <Column flex='20%' className='l-2-4'>
                        <Collection>
                            <ImageBox>
                                <Image src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Store.svg' />
                            </ImageBox>
                            <Button>Find Shop</Button>
                        </Collection>
                    </Column>
                    <Column flex='80%' className='l-9-6'>
                        <Row>
                            <Column flex='25%'>
                                <Collection>
                                    <Title>Product</Title>
                                    <Item>Male's Shoes</Item>
                                    <Item>Female's Shoes</Item>
                                    <Item>Fashion & Accessories</Item>
                                    <Item>Sale-off</Item>
                                </Collection>
                            </Column>
                            <Column flex='25%'>
                                <Collection>
                                    <Title>About Company</Title>
                                    <Item>Pineapple recruitment</Item>
                                    <Item>Franchise contact</Item>
                                    <Item>About LV7</Item>
                                </Collection>
                            </Column>
                            <Column flex='25%'>
                                <Collection>
                                    <Title>SUPPORT</Title>
                                    <Item>FAQs</Item>
                                    <Item>Information security</Item>
                                    <Item>General Policy</Item>
                                    <Item>Order lookup</Item>
                                </Collection>
                            </Column>
                            <Column flex='25%'>
                                <Collection>
                                    <Title>CONTACT</Title>
                                    <Item>Email suggestions</Item>
                                    <Item>Hotline</Item>
                                    <Item>0123 456 789</Item>
                                </Collection>
                            </Column>
                        </Row>
                        <Row>
                            <Column flex='25%'>
                                <Collection>
                                    <Title>LV7 SOCIAL</Title>
                                    <ItemWrapper>
                                        <ItemSocial src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_facebook.svg' />
                                        <ItemSocial src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_instagram.svg' />
                                        <ItemSocial src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_youtube.svg' />
                                    </ItemWrapper>
                                </Collection>
                            </Column>
                            <Column flex='25%'>
                                <Collection>
                                    <Title>SIGN UP TO GET MAIL</Title>
                                    <ItemWrapper>
                                        <Input />
                                        <ButtonArrow>
                                            <ArrowForward
                                                style={{ fontSize: '26px' }}
                                            />
                                        </ButtonArrow>
                                    </ItemWrapper>
                                </Collection>
                            </Column>
                            <Column flex='30%'>
                                <Collection>
                                    <ImageBox style={{ height: '80px' }}>
                                        <Image
                                            src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Footer.svg'
                                            style={{
                                                cursor: 'pointer',
                                            }}
                                        />
                                    </ImageBox>
                                </Collection>
                            </Column>
                        </Row>
                    </Column>
                </Row>
                <Row>
                    <Column flex='40%'>
                        <Collection></Collection>
                    </Column>
                    <Column flex='60%'>
                        <Collection>
                            <Span>
                                Copyright © 2021 LV7. All rights reserved.
                            </Span>
                        </Collection>
                    </Column>
                </Row>
            </Container>
            <FooterMobile />
        </>
    );
};

export default Footer;
