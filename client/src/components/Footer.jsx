import styled from 'styled-components';
import { ArrowForward } from '@material-ui/icons';

const Container = styled.div`
    background-color: #4c4c4c;
    padding: 60px 90px;

    @media only screen and (max-width: 991px) {
        display: none;
    }
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -45px;
    margin-right: -45px;
`;

const Column = styled.div`
    padding-left: 45px;
    padding-right: 45px;
    flex: 0 0 ${(props) => props.flex};
    max-width: ${(props) => props.flex};
    display: block;

    @media only screen and (max-width: 1199px) {
        &.l-2-4 {
            display: none;
        }

        &.l-9-6 {
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
`;

const Collection = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;

const ImageBox = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
`;

const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const Button = styled.button`
    height: 40px;
    font-size: 22px;
    font-weight: 500;
    background-color: #f15e2c;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 20px;
`;

const Title = styled.h1`
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    margin-bottom: 25px;
    letter-spacing: 1px;
    cursor: pointer;
`;

const Item = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #cccccc;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
        color: #f15e2c;
    }
`;

const Span = styled.span`
    font-size: 16px;
    color: #7d7e80;
    margin-top: 30px;
`;

const ItemSocial = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 8px;
    cursor: pointer;
`;

const ItemWrapper = styled.div`
    display: flex;
`;

const Input = styled.input`
    outline: none;
    font-size: 14px;
    margin-right: 5px;
    padding-left: 10px;
    color: #555;
    border: 1px solid #ccc;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

    &:focus {
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
            0 0 8px rgb(102 175 233 / 60%);
        border-color: #66afe9;
    }
`;

const ButtonArrow = styled.button`
    height: 40px;
    width: 60px;
    background-color: #303030;
    border: none;
    color: white;
    cursor: pointer;
`;

const Footer = () => {
    return (
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
                        <Span>Copyright © 2021 LV7. All rights reserved.</Span>
                    </Collection>
                </Column>
            </Row>
        </Container>
    );
};

export default Footer;
