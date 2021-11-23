import { Facebook, GTranslate } from '@material-ui/icons';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { dispatchLogin } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { isEmpty, isEmail, isLength } from '../../utils/validation/validate';

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

const Left = styled.div`
    flex: 1;
    border-right: 3px solid rgba(0, 0, 0, 0.1);
`;

const Button = styled.div`
    width: 200px;
    height: 60px;
    background-color: ${(props) => props.social === 'google' && '#E14932'};
    background-color: ${(props) => props.social === 'facebook' && '#517CC1'};
    border-radius: 5px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;

    &:first-child {
        margin-top: 80px;
    }

    &:last-child {
        margin-bottom: 80px;
    }

    & + & {
        margin-top: 20px;
    }
`;

const IconWrapper = styled.div`
    margin-right: 10px;

    .icon {
        font-size: 24px;
    }
`;

const Name = styled.h1`
    font-size: 18px;
`;

const Right = styled.div`
    flex: 1;
`;

const Form = styled.form``;

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

const ForgotPassword = styled.span`
    font-size: 22px;
    font-weight: 500;
    font-style: italic;
    cursor: pointer;
`;

const Middle = styled.div`
    position: absolute;
    top: calc(50% + 20px);
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: 500;
    width: 50px;
    height: 50px;
    background-color: white;
    color: rgba(0, 0, 0, 0.5);
    border: 3px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const initialSate = {
    email: '',
    password: '',
    err: '',
    success: '',
};

const Login = () => {
    const [user, setUser] = useState(initialSate);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { email, password, err, success } = user;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, err: '', success: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isEmpty(email) || isEmpty(password))
            return setUser({
                ...user,
                err: 'Please fill in all fields.',
                success: '',
            });

        if (!isEmail(email))
            return setUser({
                ...user,
                err: 'Invalid emails.',
                success: '',
            });

        if (isLength(password))
            return setUser({
                ...user,
                err: 'Password must be at least 6 characters.',
                success: '',
            });

        try {
            const res = await axios.post('/api/auth/login', {
                email,
                password,
            });

            setUser({ ...user, err: '', success: res.data.msg });

            localStorage.setItem('firstLogin', true);

            dispatch(dispatchLogin());
            navigate('/');
        } catch (err) {
            err.response.data.msg &&
                setUser({
                    ...user,
                    err: err.response.data.msg,
                    success: '',
                });
        }
    };

    return (
        <Container>
            <Wrapper>
                <Body>
                    <Header>
                        <Title>Login</Title>
                    </Header>
                    {err && <MessageErr>{err}</MessageErr>}
                    {success && <MessageSuccess>{success}</MessageSuccess>}
                    <Content>
                        <Left>
                            <Button social='google'>
                                <IconWrapper>
                                    <GTranslate className='icon' />
                                </IconWrapper>
                                <Name>Goggle</Name>
                            </Button>
                            <Button social='facebook'>
                                <IconWrapper>
                                    <Facebook className='icon' />
                                </IconWrapper>
                                <Name>Facebook</Name>
                            </Button>
                        </Left>
                        <Right>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor='email'>Email</Label>
                                    <Input
                                        type='text'
                                        id='email'
                                        value={email}
                                        name='email'
                                        placeholder='Enter your email'
                                        onChange={handleChangeInput}
                                    />
                                    <FormMessage></FormMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='password'>Password</Label>
                                    <Input
                                        type='password'
                                        id='password'
                                        value={password}
                                        name='password'
                                        placeholder='Enter your password'
                                        onChange={handleChangeInput}
                                    />
                                    <FormMessage></FormMessage>
                                </FormGroup>
                                <FormGroup>
                                    <ButtonLogin type='submit'>
                                        Login
                                    </ButtonLogin>
                                </FormGroup>
                                <FormGroup>
                                    <ForgotPassword>
                                        <Link to='/register'>
                                            New customer? Register
                                        </Link>
                                    </ForgotPassword>
                                    <ForgotPassword>
                                        <Link to='/forgot_password'>
                                            Forgot your password? *
                                        </Link>
                                    </ForgotPassword>
                                </FormGroup>
                            </Form>
                        </Right>
                    </Content>
                    <Middle>OR</Middle>
                </Body>
            </Wrapper>
        </Container>
    );
};

export default Login;
