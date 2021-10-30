import { ArrowForward, ArrowForwardIos } from '@material-ui/icons';
import styled, { keyframes } from 'styled-components';

const growth = keyframes`
    from {
        transform: scale(0);
        opacity: 0;
        height: 0px;
    }
    to {
        transform: scale(1);
        opacity: 1;
        height: 250px;
    }
`;

const scale = keyframes`
    from {
        transform: scale(1);
        opacity: 1;
        height: 250px;
    }
    to {
        transform: scale(0);
        opacity: 0;
        height: 0px;
    }
`;

const Container = styled.div``;

const ListWrapper = styled.div`
    background-color: #4c4c4c;
`;

const ItemWrapper = styled.div`
    cursor: pointer;
    color: white;
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 40px;

    & > .arrow {
        font-size: 38px;
        transform: rotate(90deg);
        pointer-events: none;
        transition: all 0.2s ease;
    }

    &.active {
        color: #f15e2c;

        & > .arrow {
            transform: rotate(-90deg);
        }

        & ~ .sub {
            height: 100%;
            animation: ${growth} 0.2s linear;
        }
    }
`;

const Title = styled.h1`
    font-size: 38px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    pointer-events: none;
    user-select: none;
`;

const List = styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
    background-color: #303030;
    height: 0;
    overflow: hidden;
    transform-origin: 0 top;
    animation: ${scale} 0.2s linear;
    position: relative;

    &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        border-top: 1px dashed #6f6f6f;
    }

    &::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        border-top: 1px dashed #6f6f6f;
    }
`;

const Item = styled.li`
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 1px;
    color: white;
    padding: 15px 40px;
    cursor: pointer;
    user-select: none;

    &:hover {
        color: #f15e2c;
    }

    &:first-child {
        margin-top: 15px;
    }

    &:last-child {
        margin-bottom: 15px;
    }
`;

const Separate = styled.div`
    width: 100%;
    border-top: 1px dashed #6f6f6f;
    pointer-events: none;
`;

const ListSocial = styled.div`
    padding: 0 40px;
    user-select: none;
`;

const ItemSocial = styled.img`
    width: 80px;
    height: 80px;
    cursor: pointer;

    & + & {
        margin-left: 30px;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 20px;
`;

const Input = styled.input`
    font-size: 28px;
    line-height: 100px;
    outline: none;
    flex: 1;
    padding-left: 10px;
    margin-right: 10px;

    &:focus {
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
            0 0 8px rgb(102 175 233 / 60%);
        border-color: #66afe9;
    }
`;

const ArrowButton = styled.div`
    width: 150px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`;

const Button = styled.button`
    width: 100%;
    height: 100px;
    border: none;
    color: white;
    background-color: #f15e2c;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    cursor: pointer;
`;

const Span = styled.span`
    display: block;
    font-size: 38px;
    color: #7d7e80;
    margin: 30px 0;
`;

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
                            <ArrowForward style={{ fontSize: '62px' }} />
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
