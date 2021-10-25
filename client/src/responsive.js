import { css } from 'styled-components';

export const pc = (props) => {
    return css`
        @media only screen and (min-width: 992px) and (max-width: 1199px) {
            ${props}
        }
    `;
};

export const tablet = (props) => {
    return css`
        @media only screen and (min-width: 768px) and (max-width: 991px) {
            ${props}
        }
    `;
};

export const mobile = (props) => {
    return css`
        @media only screen and (min-width: 576px) and (max-width: 767px) {
            ${props}
        }
    `;
};

export const extra_small = (props) => {
    return css`
        @media only screen and (max-width: 575px) {
            ${props}
        }
    `;
};
