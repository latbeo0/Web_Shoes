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
    @media only screen and (min-width: 992px) {
        display: none;
    }
`;

const ListWrapper = styled.div`
    background-color: #4c4c4c;
`;

const ItemWrapper = styled.div`
    color: white;
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
        & > .arrow {
            font-size: 4rem;
        }
    }

    @media only screen and (max-width: 575px) {
        & > .arrow {
            font-size: 3.6rem;
        }
    }
`;

const Title = styled.h1`
    font-size: 36px;
    font-weight: 500;
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
    font-size: 34px;
    font-weight: 400;
    letter-spacing: 1px;
    color: white;
    padding: 15px 40px;

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

const ListSocial = styled.div`
    padding: 0 40px;
    user-select: none;
    margin-bottom: 10px;
`;

const ItemSocial = styled.img`
    width: 80px;
    height: 80px;

    & + & {
        margin-left: 30px;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 20px 20px;
`;

const Input = styled.input`
    font-size: 26px;
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

    @media only screen and (max-width: 767px) {
        line-height: 50px;
    }
`;

const ArrowButton = styled.div`
    width: 150px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;

    & > .icon {
        font-size: 4rem;
    }

    @media only screen and (max-width: 767px) {
        width: 100px;
        height: 56px;

        & > .icon {
            font-size: 3.6rem;
        }
    }
`;

const Button = styled.button`
    width: 100%;
    height: 80px;
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
    font-size: 32px;
    color: #7d7e80;
    margin: 30px 0;

    @media only screen and (min-width: 576px) and (max-width: 767px) {
        font-size: 28px;
    }

    @media only screen and (max-width: 575px) {
        font-size: 20px;
    }
`;

export {
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
};
