import { useState } from 'react';
import { checkResetPassword } from '../../helpers/validate';
import { useParams } from 'react-router-dom';
import { fetchResetPassword } from './../../services/userFetch';
import {
    Container,
    Wrapper,
    Body,
    Header,
    Title,
    MessageSuccess,
    MessageErr,
    Content,
    Form,
    FormGroup,
    Label,
    Input,
    FormMessage,
    ButtonLogin,
} from './ResetPassword_Elements';

const initialSate = {
    password: '',
    cf_password: '',
    err: '',
    success: '',
};

const ResetPassword = () => {
    const [user, setUser] = useState(initialSate);
    const { token } = useParams();

    const { password, cf_password, err, success } = user;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, err: '', success: '' });
    };

    const handleResetPassword = () => {
        const check = checkResetPassword({ password, cf_password });

        if (!check) {
            fetchResetPassword(password, token)
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
            setUser({ ...user, err: check.msg, success: '' });
        }
    };

    return (
        <Container>
            <Wrapper>
                <Body>
                    <Header>
                        <Title>Reset password</Title>
                    </Header>
                    {err && <MessageErr>{err}</MessageErr>}
                    {success && <MessageSuccess>{success}</MessageSuccess>}
                    <Content>
                        <Form onSubmit={(e) => e.preventDefault()}>
                            <FormGroup>
                                <Label htmlFor='password'>New Password</Label>
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
                                <ButtonLogin onClick={handleResetPassword}>
                                    Reset Password
                                </ButtonLogin>
                            </FormGroup>
                        </Form>
                    </Content>
                </Body>
            </Wrapper>
        </Container>
    );
};

export default ResetPassword;
