import styled from 'styled-components';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGetAccessToken } from './../../services/userFetch';
import { dispatchAccessToken } from '../../redux/actions/authActions';

const Container = styled.div``;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Body = styled.div`
    width: 800px;
    margin: 60px 0;
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
    flex: 2;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
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

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AvatarContainer = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    margin: 50px 0 20px;
    border-radius: 50%;
    overflow: hidden;
`;

const Avatar = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
`;

const ButtonWrapper = styled.div`
    position: relative;
    overflow: hidden;
    display: inline-block;
    margin-bottom: 10px;
`;

const ButtonUpload = styled.div`
    border: 2px solid gray;
    color: gray;
    background-color: white;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
`;

const InputUpload = styled.input`
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
`;

const Note = styled.span`
    position: relative;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.4);

    & + & {
        margin-top: 5px;
    }
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
    username: '',
    country: '',
    city: '',
    address: '',
    err: '',
    success: '',
};

const Profile = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const [data, setData] = useState(initialSate);
    const [avatar, setAvatar] = useState(false);
    const [loading, setLoading] = useState(false);
    const [callback, setCallback] = useState(false);

    const { username, country, city, address, err, success } = data;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value, err: '', success: '' });
    };

    return (
        <Container>
            <Wrapper>
                <Body>
                    <Header>
                        <Title>Profile</Title>
                    </Header>
                    {err && <MessageErr>{err}</MessageErr>}
                    {success && <MessageSuccess>{success}</MessageSuccess>}
                    <Content>
                        <Left>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Input
                                    type='text'
                                    id='username'
                                    value={auth.username}
                                    name='username'
                                    placeholder='Enter your username'
                                    onChange={handleChange}
                                />
                                <FormMessage></FormMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='country'>Country</Label>
                                <Input
                                    type='text'
                                    id='country'
                                    value={auth.country && auth.country}
                                    name='country'
                                    placeholder='Enter your country'
                                    onChange={handleChange}
                                />
                                <FormMessage></FormMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='city'>City</Label>
                                <Input
                                    type='text'
                                    id='city'
                                    value={auth.city && auth.city}
                                    name='city'
                                    placeholder='Enter your city'
                                    onChange={handleChange}
                                />
                                <FormMessage></FormMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='address'>Address</Label>
                                <Input
                                    type='text'
                                    id='address'
                                    value={auth.address && auth.address}
                                    name='address'
                                    placeholder='Enter your address'
                                    onChange={handleChange}
                                />
                                <FormMessage></FormMessage>
                            </FormGroup>
                            <FormGroup>
                                <ButtonLogin type='submit'>Save</ButtonLogin>
                            </FormGroup>
                        </Left>
                        <Right>
                            <AvatarContainer>
                                <Avatar
                                    src={
                                        auth.avatar ||
                                        'https://res.cloudinary.com/da3pohnlj/image/upload/v1637204419/user_1_kq1w6v.png'
                                    }
                                />
                            </AvatarContainer>
                            <ButtonWrapper>
                                <ButtonUpload>Upload a file</ButtonUpload>
                                <InputUpload
                                    type='file'
                                    name='file'
                                    id='file_up'
                                />
                            </ButtonWrapper>
                            <Note>Maximum file size: 1 MB</Note>
                            <Note>Format: .JPEG, .PNG</Note>
                        </Right>
                    </Content>
                </Body>
            </Wrapper>
        </Container>
    );
};

export default Profile;
