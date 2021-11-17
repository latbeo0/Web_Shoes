import styled from 'styled-components';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

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
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderSuccess = styled(Header)`
    background-color: #4e9f3d;
`;

const HeaderErr = styled(Header)`
    background-color: #ff0000;
`;

const Title = styled.h1`
    font-size: 34px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

const Message = styled.div`
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

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
`;

const ActiveEmail = () => {
    const { activation_token } = useParams();
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios.post('/api/auth/activation', {
                        activation_token,
                    });
                    setSuccess(res.data.msg);
                } catch (err) {
                    err.response.data.msg && setErr(err.response.data.msg);
                }
            };
            activationEmail();
        }
    }, [activation_token]);

    return (
        <Container>
            <Menu />
            <Navbar />
            <Announcement />
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
            <Footer />
        </Container>
    );
};

export default ActiveEmail;
