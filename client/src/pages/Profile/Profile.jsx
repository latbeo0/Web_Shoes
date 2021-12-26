import { useState, useEffect } from 'react';
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
    InputSelect,
    InputOption,
} from './Profile_Elements';

const initialSate = {
    username: '',
    phone: '',
    province: '',
    district: '',
    ward: '',
    address: '',
    err: '',
    success: '',
};

const Profile = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const location = useSelector((state) => state.location);

    const [data, setData] = useState(initialSate);
    const [avatar, setAvatar] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, phone, province, district, ward, address, err, success } =
        data;

    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    useEffect(() => {
        if (auth.addressShipping.district !== '') {
            let idProvince = 0;
            location.province.forEach((item) => {
                if (item.name === auth.addressShipping.province) {
                    idProvince = item.code;
                }
            });
            const newDistricts = location.district.filter(
                (item) => item.province_code === idProvince
            );
            setDistricts(newDistricts);
        }
        if (auth.addressShipping.ward !== '') {
            let idDistrict = 0;
            location.district.forEach((item) => {
                if (item.name === auth.addressShipping.district) {
                    idDistrict = item.code;
                }
            });

            const newWards = location.ward.filter(
                (item) => item.district_code === idDistrict
            );
            setWards(newWards);
        }
        setData({
            username: auth.username,
            phone: auth.addressShipping.phone,
            province: auth.addressShipping.province,
            district: auth.addressShipping.district,
            ward: auth.addressShipping.ward,
            address: auth.addressShipping.address,
            err: '',
            success: '',
        });
    }, [auth, location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value, err: '', success: '' });
    };

    const handleChangeProvince = (e) => {
        const { name, value } = e.target;

        let idProvince = 0;
        location.province.forEach((item) => {
            if (item.name === value) {
                idProvince = item.code;
            }
        });

        const newDistricts = location.district.filter(
            (item) => item.province_code === idProvince
        );
        setData({
            ...data,
            [name]: value,
            district: '',
            ward: '',
            err: '',
            success: '',
        });
        setDistricts(newDistricts);
    };

    const handleChangeDistrict = (e) => {
        const { name, value } = e.target;

        let idDistrict = 0;
        location.district.forEach((item) => {
            if (item.name === value) {
                idDistrict = item.code;
            }
        });

        const newWards = location.ward.filter(
            (item) => item.district_code === idDistrict
        );
        setData({
            ...data,
            [name]: value,
            ward: '',
            err: '',
            success: '',
        });
        setWards(newWards);
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
        const provinceUd = province ? province : auth.province;
        const districtUd = district ? district : auth.district;
        const wardUd = ward ? ward : auth.ward;
        const addressUd = address ? address : auth.address;
        const addressShippingUd = {
            phone: phoneUd,
            province: provinceUd,
            district: districtUd,
            ward: wardUd,
            address: addressUd,
        };
        const dataUd = {
            username: usernameUd,
            avatar: avatarUd,
            addressShipping: addressShippingUd,
        };

        console.log({ dataUd });

        fetchUpdateAccount(dataUd, auth)
            .then((res) => {
                setData({ ...data, err: '', success: res.data.msg });

                dispatch(
                    dispatchUpdateAccount({
                        usernameUd,
                        avatarUd,
                        addressShippingUd,
                    })
                );
            })
            .catch((err) => {
                setData({ ...data, err: err.response.data.msg, success: '' });
            });
    };

    const handleUpdate = () => {
        if (
            username ||
            avatar ||
            phone ||
            province ||
            district ||
            ward ||
            address
        )
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
                                    value={phone}
                                    name='phone'
                                    placeholder='Enter your phone'
                                    onChange={handleChange}
                                />
                                <FormMessage></FormMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label>Tỉnh / Thành phố</Label>
                                <InputSelect
                                    name='province'
                                    value={province}
                                    disabled={!location}
                                    onChange={handleChangeProvince}
                                >
                                    <InputOption
                                        selected={province === ''}
                                        disabled={province !== ''}
                                    >
                                        --- Select ---
                                    </InputOption>
                                    {location.province.map((item) => (
                                        <InputOption
                                            key={item.code}
                                            value={item.name}
                                        >
                                            {item.name}
                                        </InputOption>
                                    ))}
                                </InputSelect>
                                <FormMessage></FormMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label>Quận / Huyện</Label>
                                <InputSelect
                                    name='district'
                                    value={district}
                                    disabled={!province}
                                    onChange={handleChangeDistrict}
                                >
                                    <InputOption
                                        selected={district === ''}
                                        disabled={district !== ''}
                                    >
                                        --- Select ---
                                    </InputOption>
                                    {districts.map((item) => (
                                        <InputOption
                                            key={item.code}
                                            value={item.name}
                                        >
                                            {item.name}
                                        </InputOption>
                                    ))}
                                </InputSelect>
                                <FormMessage></FormMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label>Phường / Xã / Thị Trấn</Label>
                                <InputSelect
                                    name='ward'
                                    value={ward}
                                    disabled={!district}
                                    onChange={handleChange}
                                >
                                    <InputOption
                                        selected={ward === ''}
                                        disabled={ward !== ''}
                                    >
                                        --- Select ---
                                    </InputOption>
                                    {wards.map((item) => (
                                        <InputOption
                                            key={item.code}
                                            value={item.name}
                                        >
                                            {item.name}
                                        </InputOption>
                                    ))}
                                </InputSelect>
                                <FormMessage></FormMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='address'>Address</Label>
                                <Input
                                    type='text'
                                    disabled={!ward}
                                    id='address'
                                    value={address}
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
