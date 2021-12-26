import { ArrowForwardIos } from '@material-ui/icons';
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

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    padding: 10px 0;
    margin: 0 10px 80px;

    @media only screen and (min-width: 992px) {
        display: none;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        margin: 0 10px 50px;
    }

    @media only screen and (min-width: 576px) and (max-width: 767px) {
        margin: 0 10px 30px;
    }

    @media only screen and (max-width: 575px) {
        margin: 0 10px 20px;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    transition: all 0.2s ease;
    overflow: hidden;
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 40px;

    & > .arrow {
        font-size: 4rem;
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

    @media only screen and (min-width: 576px) and (max-width: 767px) {
        padding: 30px 20px;
    }

    @media only screen and (max-width: 575px) {
        padding: 25px 15px;
    }
`;

const Title = styled.h1`
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    pointer-events: none;
    user-select: none;

    @media only screen and (min-width: 576px) and (max-width: 767px) {
        font-size: 34px;
    }

    @media only screen and (max-width: 575px) {
        font-size: 30px;
    }
`;

const List = styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
    background-color: #f2f2f2;
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
    font-size: 34px;
    font-weight: 400;
    letter-spacing: 1px;
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

    @media only screen and (min-width: 576px) and (max-width: 767px) {
        font-size: 32px;
    }

    @media only screen and (max-width: 575px) {
        font-size: 28px;
    }
`;

const Separate = styled.div`
    width: 100%;
    border-top: 1px dashed #6f6f6f;
    pointer-events: none;
`;

const CategoriesMobile = () => {
    const handleClick = (e) => {
        e.target.classList.toggle('active');
    };

    return (
        <Container>
            <Wrapper onClick={handleClick}>
                <Body>
                    <Title>Male Shoes</Title>
                    <ArrowForwardIos className='arrow' />
                </Body>
                <Separate />
                <List className='sub'>
                    <Item>New Arrivals</Item>
                    <Item>Best Seller</Item>
                    <Item>Sale-off</Item>
                </List>
            </Wrapper>
            <Wrapper onClick={handleClick}>
                <Body>
                    <Title>Female Shoes</Title>
                    <ArrowForwardIos className='arrow' />
                </Body>
                <Separate />
                <List className='sub'>
                    <Item>New Arrivals</Item>
                    <Item>Best Seller</Item>
                    <Item>Sale-off</Item>
                </List>
            </Wrapper>
            <Wrapper onClick={handleClick}>
                <Body>
                    <Title>Brands</Title>
                    <ArrowForwardIos className='arrow' />
                </Body>
                <List className='sub'>
                    <Item>Basas</Item>
                    <Item>Vintas</Item>
                    <Item>Urbas</Item>
                    <Item>Pattas</Item>
                </List>
            </Wrapper>
        </Container>
    );
};

export default CategoriesMobile;
