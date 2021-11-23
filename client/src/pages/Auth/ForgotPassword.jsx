import styled from 'styled-components';
import { useState } from 'react';
import { isEmpty, isEmail } from '../../utils/validation/validate';
import axios from 'axios';

const Container = styled.div``;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Body = styled.div`
    width: 800px;
    margin: 120px 0;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
    position: relative;
`;

const Header = styled.div`
    width: 100%;
    height: 60px;
    color: white;
    background-color: #f15e2c;
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

const Title = styled.h1`
    font-size: 34px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-left: 50px;
`;

const Message = styled.div`
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

const MessageSuccess = styled(Message)`
    color: #4e9f3d;
`;

const MessageErr = styled(Message)`
    color: #ff0000;
`;

const Content = styled.div`
    display: flex;
`;

const Form = styled.form`
    flex: 1;
`;

const FormGroup = styled.div`
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

const Label = styled.label`
    font-weight: 500;
    padding-bottom: 10px;
    line-height: 18px;
    font-size: 16px;
`;

const Input = styled.input`
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

const FormMessage = styled.span``;

const ButtonLogin = styled.button`
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

const initialSate = {
    email: '',
    err: '',
    success: '',
};

const ForgotPassword = () => {
    const [user, setUser] = useState(initialSate);

    const { email, err, success } = user;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, err: '', success: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const forgotPassword = async () => {
        if (isEmpty(email))
            return setUser({
                ...user,
                err: 'Please enter your email.',
                success: '',
            });

        if (!isEmail(email))
            return setUser({ ...user, err: 'Invalid emails.', success: '' });

        try {
            const res = await axios.post('/api/user/forgot', { email });

            return setUser({ ...user, err: '', success: res.data.msg });
        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' });
        }
    };

    return (
        <Container>
            <Wrapper>
                <Body>
                    <Header>
                        <Title>Forgot password</Title>
                    </Header>
                    {err && <MessageErr>{err}</MessageErr>}
                    {success && <MessageSuccess>{success}</MessageSuccess>}
                    <Content>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label htmlFor='email'>Email</Label>
                                <Input
                                    type='email'
                                    id='email'
                                    value={email}
                                    name='email'
                                    placeholder='Enter your email'
                                    onChange={handleChangeInput}
                                />
                                <FormMessage></FormMessage>
                            </FormGroup>
                            <FormGroup>
                                <ButtonLogin onClick={forgotPassword}>
                                    Verify your email
                                </ButtonLogin>
                            </FormGroup>
                        </Form>
                    </Content>
                </Body>
            </Wrapper>
        </Container>
    );
};

export default ForgotPassword;
