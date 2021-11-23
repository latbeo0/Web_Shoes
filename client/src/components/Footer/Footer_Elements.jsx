import styled from 'styled-components';

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

export {
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
};
