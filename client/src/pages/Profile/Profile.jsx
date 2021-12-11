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
    phone: '',
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

    const { username, city, phone, country, address, err, success } = data;

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
        const phoneUd = phone ? phone : auth.phone;
        const cityUd = city ? city : auth.city;
        const countryUd = country ? country : auth.country;
        const addressUd = address ? address : auth.address;
        const dataUd = {
            usernameUd,
            avatarUd,
            phoneUd,
            cityUd,
            countryUd,
            addressUd,
        };

        fetchUpdateAccount(dataUd, auth)
            .then((res) => {
                setData({ ...data, err: '', success: res.data.msg });

                dispatch(
                    dispatchUpdateAccount({
                        usernameUd,
                        avatarUd,
                        phoneUd,
                        cityUd,
                        countryUd,
                        addressUd,
                    })
                );
            })
            .catch((err) => {
                setData({ ...data, err: err.response.data.msg, success: '' });
            });
    };

    const handleUpdate = () => {
        if (username || avatar || phone || city || country || address)
            updateAccount();
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
                                <Label htmlFor='phone'>Phone</Label>
                                <Input
                                    type='phone'
                                    id='phone'
                                    value={phone || auth.phone}
                                    name='phone'
                                    placeholder='Enter your phone'
                                    onChange={handleChange}
                                />
                                <FormMessage></FormMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='country'>Country</Label>
                                <Input
                                    type='country'
                                    id='country'
                                    value={country || auth.country}
                                    name='country'
                                    placeholder='Enter your country'
                                    onChange={handleChange}
                                />
                                <FormMessage></FormMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='city'>City</Label>
                                <Input
                                    type='city'
                                    id='city'
                                    value={city || auth.city}
                                    name='city'
                                    placeholder='Enter your city'
                                    onChange={handleChange}
                                />
                                <FormMessage></FormMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='address'>Address</Label>
                                <Input
                                    type='address'
                                    id='address'
                                    value={address || auth.address}
                                    name='address'
                                    placeholder='Enter your address'
                                    onChange={handleChange}
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
