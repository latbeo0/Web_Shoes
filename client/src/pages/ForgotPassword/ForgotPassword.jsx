import { useState } from 'react';
import { checkForgotPassword } from './../../helpers/validate';
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
} from './ForgotPassword_Elements';
import { fetchForgotPassword } from '../../services/userFetch';

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

    const forgotPassword = () => {
        const check = checkForgotPassword({ email });

        if (!check) {
            fetchForgotPassword(email)
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
                        <Title>Forgot password</Title>
                    </Header>
                    {err && <MessageErr>{err}</MessageErr>}
                    {success && <MessageSuccess>{success}</MessageSuccess>}
                    <Content>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
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
