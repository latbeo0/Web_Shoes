import { Facebook, GTranslate } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { checkRegister } from '../../helpers/validate';
import { fetchRegister } from '../../services/userFetch';
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
    IconWrapper,
    Name,
    Right,
    Form,
    FormGroup,
    Label,
    Input,
    FormMessage,
    ButtonLogin,
    ForgotPassword,
    Middle,
} from './Register_Elements';

const initialSate = {
    username: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: '',
};

const Register = () => {
    const [user, setUser] = useState(initialSate);

    const { username, email, password, cf_password, err, success } = user;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, err: '', success: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const check = checkRegister({ username, email, password, cf_password });

        if (!check) {
            fetchRegister(username, email, password)
                .then((res) => {
                    setUser({ ...user, err: '', success: res.data.msg });
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
    return (
        <Container>
            <Wrapper>
                <Body>
                    <Header>
                        <Title>Register</Title>
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
                                    <Label htmlFor='username'>Username</Label>
                                    <Input
                                        type='text'
                                        id='username'
                                        value={username}
                                        name='username'
                                        placeholder='Enter your username'
                                        onChange={handleChangeInput}
                                    />
                                    <FormMessage></FormMessage>
                                </FormGroup>
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
                                    <Label htmlFor='cf_password'>
                                        Confirm Password
                                    </Label>
                                    <Input
                                        type='password'
                                        id='cf_password'
                                        value={cf_password}
                                        name='cf_password'
                                        placeholder='Confirm your password'
                                        onChange={handleChangeInput}
                                    />
                                    <FormMessage></FormMessage>
                                </FormGroup>
                                <FormGroup>
                                    <ButtonLogin type='submit'>
                                        Register
                                    </ButtonLogin>
                                </FormGroup>
                                <FormGroup>
                                    <ForgotPassword>
                                        <Link to='/login'>
                                            Already have an account? Login now
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

export default Register;
