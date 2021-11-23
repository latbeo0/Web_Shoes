import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 205px;
    width: 100vw;
    height: 80vh;
    background: #4c4c4c;
    z-index: 10;
    overflow-x: hidden;
    overflow-y: scroll;
    display: none;

    .show ~ & {
        display: block;
    }

    @media only screen and (max-width: 575px) {
        top: 170px;
    }
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    position: relative;
    transition: all 0.5s ease 0s;
`;

const Item = styled.li`
    position: list-item;

    &.active > .submenu {
        right: 0;

        .arrow.back {
            position: absolute;
            left: 35px;
            pointer-events: none;
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.type};
    padding: 35px 60px;
    position: relative;

    .arrow {
        font-size: 58px;
        color: white;
        position: absolute;
        right: 35px;
        pointer-events: none;
    }

    .icon {
        font-size: 58px;
        color: white;
        margin-right: 20px;
    }
`;

const Title = styled.h1`
    font-size: 38px;
    font-weight: ${(props) => (props.type === 'thin' ? '300' : '700')};
    text-transform: ${(props) => props.type !== 'normal' && 'uppercase'};
    letter-spacing: 2px;
    color: white;
    pointer-events: none;

    &.info {
        font-size: 38px;
        color: #808080;
        font-style: italic;
    }

    @media only screen and (max-width: 575px) {
        font-size: 32px;

        &.info {
            font-size: 32px;
        }
    }
`;

const SubMenu = styled.ul`
    list-style: none;
    padding: 0;
    background-color: #4c4c4c;
    height: 100%;
    position: absolute;
    right: -100%;
    top: 0;
    transition: all 0.5s ease 0s;
    width: 100%;
    z-index: 999;
    padding-left: 0px;
`;

const SubItem = styled.li`
    &.active > .submenu {
        right: 0;

        .arrow.back {
            position: absolute;
            left: 35px;
            pointer-events: none;
        }
    }
`;

const Separate = styled.div`
    border-top: ${(props) =>
        props.type === 'straight' ? '3px solid white' : '2px dashed #6f6f6f'};
`;

const Light = styled.span`
    font-size: 38px;
    font-weight: 700;
    letter-spacing: 2px;
    color: white;
    padding-left: ${(props) => props.type === 'separate' && '10px'};
    border-left: ${(props) => props.type === 'separate' && '1px solid white'};
`;

const Plur = styled.span`
    font-size: 38px;
    color: #808080;
    padding-right: 10px;
`;

export {
    Container,
    List,
    Item,
    Wrapper,
    Title,
    SubMenu,
    SubItem,
    Separate,
    Light,
    Plur,
};
