import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import {
    Container,
    Wrapper,
    Body,
    HeaderSuccess,
    HeaderErr,
    Title,
    Message,
    Content,
} from './ActiveEmail_Elements';
import { fetchActiveEmail } from '../../services/userFetch';

const ActiveEmail = () => {
    const { activation_token } = useParams();
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (activation_token) {
            fetchActiveEmail(activation_token)
                .then((res) => {
                    setSuccess(res.data.msg);
                })
                .catch((err) => {
                    err.response.data.msg && setErr(err.response.data.msg);
                });
        }
    }, [activation_token]);

    return (
        <Container>
            <Wrapper>
                <Body>
                    {err && (
                        <>
                            <HeaderErr>
                                <Title>Active Email</Title>
                            </HeaderErr>
                            <Content>
                                <Message>{err}</Message>
                            </Content>
                        </>
                    )}
                    {success && (
                        <>
                            <HeaderSuccess>
                                <Title>Active Email</Title>
                            </HeaderSuccess>
                            <Content>
                                <Message>{success}</Message>
                            </Content>
                        </>
                    )}
                </Body>
            </Wrapper>
        </Container>
    );
};

export default ActiveEmail;
