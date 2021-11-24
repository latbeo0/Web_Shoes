import { useState } from 'react';
import { dispatchLogin } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { checkLogin } from '../../helpers/validate';
import { fetchLogin } from '../../services/userFetch';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { AiFillFacebook } from 'react-icons/ai';
import {
    Container,
    Wrapper,
    Body,
    Header,
    Title,
    MessageSuccess,
    MessageErr,
    Content,
    Left,
    Button,
    Right,
    Form,
    FormGroup,
    Label,
    Input,
    FormMessage,
    ButtonLogin,
    ForgotPassword,
    Middle,
} from './Login_Elements';
import axios from 'axios';
import styled from 'styled-components';

const GoggleButton = styled(GoogleLogin)`
    width: 100%;
    height: 100%;
    border: 1px solid #c4c4c4;

    & > span {
        font-size: 1.4rem;
        color: rgba(0, 0, 0, 0.5);
    }
`;

const IconFacebook = styled(AiFillFacebook)`
    font-size: 2.8rem;
    color: white;
    margin-right: 5px;
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const check = checkLogin({ email, password });

        if (!check) {
            fetchLogin(email, password)
                .then((res) => {
                    setUser({ ...user, err: '', success: res.data.msg });

                    localStorage.setItem('firstLogin', true);

                    dispatch(dispatchLogin());
                    navigate('/');
                })
                .catch((err) => {
                    err.response.data.msg &&
                        setUser({
                            ...user,
                            err: err.response.data.msg,
                            success: '',
                        });
                });
        } else {
            setUser({
                ...user,
                err: check.msg,
                success: '',
            });
        }
    };

    const responseGoogle = async (response) => {
        try {
            const res = await axios.post('/api/auth/google_login', {
                tokenId: response.tokenId,
            });

            setUser({ ...user, error: '', success: res.data.msg });
            localStorage.setItem('firstLogin', true);

            dispatch(dispatchLogin());
            navigate('/');
        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' });
        }
    };

    const responseFacebook = async (response) => {
        try {
            const { accessToken, userID } = response;
            const res = await axios.post('/api/auth/facebook_login', {
                accessToken,
                userID,
            });

            setUser({ ...user, error: '', success: res.data.msg });
            localStorage.setItem('firstLogin', true);

            dispatch(dispatchLogin());
            navigate('/');
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
                        <Title>Login</Title>
                    </Header>
                    {err && <MessageErr>{err}</MessageErr>}
                    {success && <MessageSuccess>{success}</MessageSuccess>}
                    <Content>
                        <Left>
                            <Button social='google'>
                                <GoggleButton
                                    clientId='909709915916-fg735kbl40gc0pea1cdmt9ltgg1ovnq0.apps.googleusercontent.com'
                                    buttonText='Login with google'
                                    onSuccess={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </Button>
                            <Button social='facebook'>
                                <FacebookLogin
                                    appId='1571279566544674'
                                    autoLoad={false}
                                    fields='username,email,picture'
                                    callback={responseFacebook}
                                    cssClass='my-facebook-button-class'
                                    icon={<IconFacebook />}
                                />
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
