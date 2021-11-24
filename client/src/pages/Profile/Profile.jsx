import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchUpdateAccount } from '../../redux/actions/authActions';
import {
    fetchUpdateAccount,
    fetchChangeAvatar,
} from '../../services/userFetch';
import { checkFile } from './../../helpers/validate';
import {
    Container,
    Wrapper,
    Body,
    Header,
    Title,
    Message,
    MessageSuccess,
    MessageErr,
    Content,
    Left,
    FormGroup,
    Label,
    Right,
    AvatarContainer,
    Avatar,
    ButtonWrapper,
    ButtonUpload,
    InputUpload,
    Note,
    Input,
    FormMessage,
    ButtonLogin,
} from './Profile_Elements';

const initialSate = {
    username: '',
    err: '',
    success: '',
};

const Profile = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const [data, setData] = useState(initialSate);
    const [avatar, setAvatar] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, err, success } = data;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value, err: '', success: '' });
    };

    const changeAvatar = async (e) => {
        e.preventDefault();

        const file = e.target.files[0];

        const check = checkFile(file);

        if (!check) {
            let formData = new FormData();
            formData.append('file', file);

            setLoading(true);
            fetchChangeAvatar(formData, auth.token)
                .then((res) => {
                    setLoading(false);
                    setAvatar(res.data.url);
                })
                .catch((err) => {
                    setData({
                        ...data,
                        err: err.response.data.msg,
                        success: '',
                    });
                });
        } else {
            setData({ ...data, err: check.msg, success: '' });
        }
    };

    const updateAccount = () => {
        const usernameUd = username ? username : auth.username;
        const avatarUd = avatar ? avatar : auth.avatar;

        fetchUpdateAccount(usernameUd, avatarUd, auth)
            .then((res) => {
                setData({ ...data, err: '', success: res.data.msg });

                dispatch(dispatchUpdateAccount({ usernameUd, avatarUd }));
            })
            .catch((err) => {
                setData({ ...data, err: err.response.data.msg, success: '' });
            });
    };

    const handleUpdate = () => {
        if (username || avatar) updateAccount();
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
                    {loading && <Message>Loading ...</Message>}
                    <Content>
                        <Left>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Input
                                    type='text'
                                    id='username'
                                    value={username || auth.username}
                                    name='username'
                                    placeholder='Enter your username'
                                    onChange={handleChange}
                                />
                                <FormMessage></FormMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='email'>Email</Label>
                                <Input
                                    type='email'
                                    id='email'
                                    value={auth.email}
                                    name='email'
                                    placeholder='Enter your email'
                                    onChange={handleChange}
                                    disabled
                                />
                                <FormMessage></FormMessage>
                            </FormGroup>
                            <FormGroup>
                                <ButtonLogin
                                    disable={loading}
                                    onClick={handleUpdate}
                                    type='submit'
                                >
                                    Save
                                </ButtonLogin>
                            </FormGroup>
                        </Left>
                        <Right>
                            <AvatarContainer>
                                <Avatar src={avatar ? avatar : auth.avatar} />
                            </AvatarContainer>
                            <ButtonWrapper>
                                <ButtonUpload>Change Avatar</ButtonUpload>
                                <InputUpload
                                    type='file'
                                    name='file'
                                    id='file_up'
                                    onChange={changeAvatar}
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
