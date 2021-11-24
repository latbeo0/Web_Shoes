import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Body = styled.div`
    width: 800px;
    margin: 60px 0;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
    position: relative;
`;

export const Header = styled.div`
    width: 100%;
    height: 60px;
    color: white;
    background-color: #f15e2c;
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

export const Title = styled.h1`
    font-size: 34px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-left: 50px;
`;

export const Message = styled.div`
    height: 30px;
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
    font-style: italic;
`;

export const MessageSuccess = styled(Message)`
    color: #4e9f3d;
`;

export const MessageErr = styled(Message)`
    color: #ff0000;
`;

export const Content = styled.div`
    display: flex;
`;

export const Left = styled.div`
    flex: 2;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
    display: flex;
    margin: 0 60px 20px;
    flex-direction: column;

    &:first-child {
        margin-top: 50px;
    }

    &:last-child {
        margin-bottom: 50px;
    }
`;

export const Label = styled.label`
    font-weight: 500;
    padding-bottom: 10px;
    line-height: 18px;
    font-size: 16px;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AvatarContainer = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    margin: 50px 0 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    overflow: hidden;
`;

export const Avatar = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
`;

export const ButtonWrapper = styled.div`
    position: relative;
    overflow: hidden;
    display: inline-block;
    margin-bottom: 10px;
`;

export const ButtonUpload = styled.div`
    border: 2px solid gray;
    color: gray;
    background-color: white;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
`;

export const InputUpload = styled.input`
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
`;

export const Note = styled.span`
    position: relative;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.4);

    & + & {
        margin-top: 5px;
    }
`;

export const Input = styled.input`
    height: 40px;
    padding: 8px 12px;
    border: 1px solid #b3b3b3;
    border-radius: 3px;
    outline: none;
    font-size: 16px;

    &:hover {
        border-color: #1dbfaf;
    }
`;

export const FormMessage = styled.span``;

export const ButtonLogin = styled.button`
    width: 100%;
    height: 50px;
    outline: none;
    background-color: #1dbfaf;
    margin-top: 12px;
    padding: 12px 16px;
    font-weight: 600;
    color: #fff;
    border: none;
    width: 100%;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: #1ac7b6;
    }
`;
