import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .wrapper {
        width: 990px;
        text-align: center;

        .swiper-button-next,
        .swiper-button-prev {
            color: #808080;

            &:after {
                font-size: 14px;
                font-weight: 700;
            }

            &:hover {
                color: #000;
            }
        }
    }

    @media only screen and (max-width: 991px) {
        height: 70px;

        .wrapper {
            width: 100%;

            .swiper-button-next,
            .swiper-button-prev {
                display: none;
            }
        }
    }
`;

export const Text = styled.span`
    text-transform: uppercase;
    font-style: italic;
    font-size: 14px;
    letter-spacing: 1px;
    word-spacing: 2px;
    font-weight: 400;
    cursor: pointer;

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        font-size: 20px;
        word-spacing: 1px;
    }

    @media only screen and (min-width: 576px) and (max-width: 767px) {
        font-size: 17px;
        word-spacing: 0;
        letter-spacing: 0;
    }
`;
