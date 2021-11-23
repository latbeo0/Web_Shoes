import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 135px;
    height: 135px;
    background-color: #4c4c4c;
    display: flex;

    @media only screen and (min-width: 992px) {
        display: none;
    }

    @media only screen and (max-width: 575px) {
        width: 100px;
        height: 100px;
    }
`;

export const ToggleBox = styled.div`
    width: 55px;
    height: 30px;
    margin: auto;
    outline: none;
    position: relative;
    top: 0;
    transition: 0.5s;
    pointer-events: none;

    &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 50%;
        border-top: 2px solid white;
        border-bottom: 2px solid white;
        top: 0;
        left: 0;
        transition: transform 0.5s ease, height 0.5s ease;
    }

    &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        border-top: 2px solid white;
        border-bottom: 2px solid white;
        top: 0;
        left: 0;
        transition: transform 0.5s ease;
    }

    .show & {
        &::before {
            height: 100%;
            border-bottom: 2px solid transparent;
            transform: rotate(-45deg) translate(0, 15px);
        }

        &::after {
            border-top: 2px solid transparent;
            transform: rotate(45deg) translate(0, -15px);
        }
    }
`;
