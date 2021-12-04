import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Load = styled.span`
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: #ff3d00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    animation: ${rotation} 1s linear infinite;
`;

const Loader = () => {
    return (
        <Container>
            <Load />
        </Container>
    );
};

export default Loader;
