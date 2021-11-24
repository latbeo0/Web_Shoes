import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Body = styled.div`
    width: 800px;
    margin: 120px 0;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
    position: relative;
`;

export const Header = styled.div`
    width: 100%;
    height: 60px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderSuccess = styled(Header)`
    background-color: #4e9f3d;
`;

export const HeaderErr = styled(Header)`
    background-color: #ff0000;
`;

export const Title = styled.h1`
    font-size: 34px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const Message = styled.div`
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
    font-style: italic;
    margin: 0 50px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
`;
