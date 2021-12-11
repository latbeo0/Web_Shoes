import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    AddProductContainer,
    Header,
    Form,
    BodyForm,
    FormLeft,
    FormRight,
    FormGroup,
    Label,
    InputText,
    InputTextarea,
    GenderContainer,
    GenderItem,
    LabelGender,
    InputCheckBok,
    InputSelect,
    InputOption,
    InputRadio,
    AvatarUploadContainer,
    AvatarUpload,
    AvatarEdit,
    InputAvatar,
    LabelAvatar,
    PencilIcon,
    AvatarPreview,
    ImagePreview,
    FooterAddProduct,
    // ColorContainer,
    // ColorItem,
    // InputColor,
    ButtonAddProduct,
    // InputColorPlus,
    DetailContainer2,
    // DetailItemContainer2,
    ColorContainer2,
    SizeContainer2,
    SizeItemContainer2,
    CloseIconWrapper,
    CloseIcon,
    InputColorWrapper,
    InputColor2,
    InputSize2,
    // SizeItemPlusContainer,
    InputSizePlus2,
    InputColorPlusIcon,
    AvatarPreviewPlus,
    AvatarUploadPlus,
} from './AddProduct_Elements';
import {
    fetchAddNewProduct,
    fetchUploadImageProduct,
} from '../../services/productFetch';
import { useNavigate } from 'react-router-dom';
import { checkFile } from '../../helpers/validate';
import Loader from '../../utils/Loader';

const initialSate = {
    name: '',
    description: '',
    imgPrimary: '',
    imgSecondary: '',
    listImg: [],
    gender: [],
    productLine: '',
    category: '',
    collections: '',
    material: '',
    state: '',
    price: 0,
    style: '',
    inStock: false,
    detail: [],
    err: '',
    success: '',
};

const dataGender = [
    {
        id: 1,
        value: 'Male',
    },
    {
        id: 2,
        value: 'Female',
    },
];

const dataProductLine = [
    {
        id: 1,
        value: 'Basas',
    },
    {
        id: 2,
        value: 'Vintas',
    },
    {
        id: 3,
        value: 'Urbas',
    },
    {
        id: 4,
        value: 'Pattas',
    },
    {
        id: 5,
        value: 'Creas',
    },
    {
        id: 6,
        value: 'Graphic Tee',
    },
    {
        id: 7,
        value: 'Hoodie',
    },
    {
        id: 8,
        value: 'Sweatshirt',
    },
    {
        id: 9,
        value: 'Backpack | Ba lô',
    },
    {
        id: 10,
        value: 'Socks | Vớ',
    },
    {
        id: 11,
        value: 'Hat | Nón',
    },
    {
        id: 12,
        value: 'Track 6',
    },
    {
        id: 13,
        value: 'Basic Tee | Áo thun cơ bản',
    },
    {
        id: 14,
        value: 'Shoelaces | Dây giày',
    },
];

const dataSize = ['38', '39', '40'];

const AddProduct = () => {
    const navigate = useNavigate();

    const auth = useSelector((state) => state.auth);
    const [product, setProduct] = useState(initialSate);
    const [listDetail, setListDetail] = useState([]);
    const [listImage, setListImage] = useState([]);
    const [loading, setLoading] = useState(false);

    const handlePreviewAvatar = (e) => {
        const name = e.target.id;
        const file = e.target.files[0];

        const check = checkFile(file);

        if (!check) {
            let formData = new FormData();
            formData.append('file', file);

            setLoading(true);
            fetchUploadImageProduct(formData, auth.token)
                .then((res) => {
                    setProduct((prev) => {
                        return { ...prev, [name]: res.data.url };
                    });
                    setLoading(false);
                })
                .catch((err) =>
                    setProduct((prev) => {
                        return { ...prev, err: err.response.msg, success: '' };
                    })
                );
        } else {
            setProduct((prev) => {
                return { ...prev, err: check.msg, success: '' };
            });
        }
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value, err: '', success: '' });
    };

    const handleCheckBox = (value) => {
        setProduct((prev) => {
            const isChecked = prev.gender.includes(value);
            if (isChecked) {
                return {
                    ...prev,
                    gender: prev.gender.filter((item) => item !== value),
                };
            } else {
                return { ...prev, gender: [...prev.gender, value] };
            }
        });
    };

    const handleCheckRadio = () => {
        setProduct({ ...product, inStock: !product.inStock });
    };

    const handlePlusItemDetail = (e) => {
        e.preventDefault();

        const id = e.target.id;

        if (id === '') {
            setListDetail((prev) => {
                return [...prev, { color: '#FED2AA', values: [] }];
            });
        } else {
            const newArr = listDetail.filter(
                (item) => item !== listDetail[Number(id)]
            );
            setListDetail(newArr);
        }
    };

    const handleChanceColor2 = (e) => {
        const id = Number(e.target.id);

        listDetail[id].color = e.target.value;
        setListDetail([...listDetail]);
    };

    const handlePlusItemSize = (e) => {
        e.preventDefault();

        const idDetail = Number(e.target.parentElement.id);
        const idValue = e.target.id;

        if (idValue === 'addItem') {
            listDetail[idDetail].values.push({
                size: dataSize[0],
                quantity: 0,
            });
        } else {
            const newArr = listDetail[idDetail].values.filter(
                (item) => item !== listDetail[idDetail].values[Number(idValue)]
            );
            listDetail[idDetail].values = newArr;
        }

        setListDetail([...listDetail]);
    };

    const handleChangeInputDetail = (e) => {
        const idDetail = Number(e.target.parentElement.id);
        const idValue = Number(e.target.id);
        const { name, value } = e.target;

        listDetail[idDetail].values[idValue][name] = Number(value);
        setListDetail([...listDetail]);
    };

    const handlePlusItemImage = (e) => {
        const id = e.target.parentElement.id;

        if (id === 'addImage') {
            setListImage((prev) => {
                return [...prev, ''];
            });
        } else {
            const arr1 = listImage.slice(0, Number(id));
            const arr2 = listImage.slice(Number(id) + 1, listImage.length);
            setListImage([...arr1, ...arr2]);
        }
    };

    const handleChangeListImage = async (e) => {
        const index = e.target.parentElement.id;
        const file = e.target.files[0];

        const check = checkFile(file);

        if (!check) {
            let formData = new FormData();
            formData.append('file', file);

            setLoading(true);
            fetchUploadImageProduct(formData, auth.token)
                .then((res) => {
                    listImage[Number(index)] = res.data.url;
                    setListImage([...listImage]);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log(check.msg);
        }
    };

    const handleSubmit2 = async (e) => {
        e.preventDefault();

        const newListImage = listImage.filter((item) => item !== '');

        const newProduct = {
            ...product,
            listImg: newListImage,
            detail: listDetail,
        };

        setLoading(true);
        await fetchAddNewProduct(newProduct, auth.token)
            .then((res) => {
                setProduct((prev) => {
                    return { ...prev, err: '', success: res.data.msg };
                });
                setLoading(false);
                navigate('/admin/list_product');
            })
            .catch((err) => {
                return { ...product, err: err.response.data.msg, success: '' };
            });
    };

    return (
        <AddProductContainer>
            {loading ? (
                <Loader />
            ) : (
                <Form>
                    <Header>New Product</Header>
                    <BodyForm>
                        <FormLeft>
                            <FormGroup>
                                <Label htmlFor='name'>Name</Label>
                                <InputText
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={product.name}
                                    placeholder='Name of product'
                                    onChange={handleChangeInput}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='description'>Description</Label>
                                <InputTextarea
                                    type='text'
                                    id='description'
                                    name='description'
                                    value={product.description}
                                    placeholder='Description'
                                    onChange={handleChangeInput}
                                    rows='5'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Image Primary</Label>
                                <AvatarUploadContainer>
                                    <AvatarUpload>
                                        <AvatarEdit>
                                            <InputAvatar
                                                type='file'
                                                id='imgPrimary'
                                                onChange={handlePreviewAvatar}
                                            />
                                            <LabelAvatar for='imgPrimary'>
                                                <PencilIcon />
                                            </LabelAvatar>
                                        </AvatarEdit>
                                        <AvatarPreview>
                                            {product.imgPrimary && (
                                                <ImagePreview
                                                    id='imgPrimary'
                                                    src={product.imgPrimary}
                                                />
                                            )}
                                        </AvatarPreview>
                                    </AvatarUpload>
                                    <AvatarUpload>
                                        <AvatarEdit>
                                            <InputAvatar
                                                type='file'
                                                id='imgSecondary'
                                                onChange={handlePreviewAvatar}
                                            />
                                            <LabelAvatar for='imgSecondary'>
                                                <PencilIcon />
                                            </LabelAvatar>
                                        </AvatarEdit>
                                        <AvatarPreview>
                                            {product.imgSecondary && (
                                                <ImagePreview
                                                    id='imgSecondary'
                                                    src={product.imgSecondary}
                                                />
                                            )}
                                        </AvatarPreview>
                                    </AvatarUpload>
                                </AvatarUploadContainer>
                            </FormGroup>
                            <FormGroup>
                                <Label>Image Second</Label>
                                <AvatarUploadContainer>
                                    {listImage.map((item, index) => (
                                        <AvatarUpload key={index} id={index}>
                                            <AvatarEdit id={index}>
                                                <InputAvatar
                                                    type='file'
                                                    id={`img${index}`}
                                                    onChange={
                                                        handleChangeListImage
                                                    }
                                                />
                                                <LabelAvatar
                                                    for={`img${index}`}
                                                >
                                                    <PencilIcon />
                                                </LabelAvatar>
                                            </AvatarEdit>
                                            <AvatarPreview>
                                                {item !== '' && (
                                                    <ImagePreview
                                                        id={`img${index}`}
                                                        src={item}
                                                    />
                                                )}
                                            </AvatarPreview>
                                            <CloseIconWrapper
                                                style={{ left: '7px' }}
                                                onClick={handlePlusItemImage}
                                            >
                                                <CloseIcon />
                                            </CloseIconWrapper>
                                        </AvatarUpload>
                                    ))}
                                    <AvatarUpload id='addImage'>
                                        <AvatarUploadPlus />
                                        <AvatarPreviewPlus
                                            onClick={handlePlusItemImage}
                                        />
                                    </AvatarUpload>
                                </AvatarUploadContainer>
                            </FormGroup>
                        </FormLeft>
                        <FormRight>
                            <FormGroup>
                                <Label>Gender</Label>
                                <GenderContainer>
                                    {dataGender.map((gender) => (
                                        <GenderItem key={gender.id}>
                                            <LabelGender>
                                                {gender.value}
                                            </LabelGender>
                                            <InputCheckBok
                                                type='checkbox'
                                                checked={product.gender.includes(
                                                    gender.value
                                                )}
                                                onChange={() =>
                                                    handleCheckBox(gender.value)
                                                }
                                            />
                                        </GenderItem>
                                    ))}
                                </GenderContainer>
                            </FormGroup>
                            <FormGroup>
                                <Label>Category</Label>
                                <InputSelect
                                    name='category'
                                    onChange={handleChangeInput}
                                >
                                    <InputOption selected disabled>
                                        --- Select ---
                                    </InputOption>
                                    <InputOption>Shoes</InputOption>
                                    <InputOption>Half Upper</InputOption>
                                    <InputOption>Accessory</InputOption>
                                </InputSelect>
                            </FormGroup>
                            <FormGroup>
                                <Label>Product Line</Label>
                                <InputSelect
                                    name='productLine'
                                    onChange={handleChangeInput}
                                >
                                    <InputOption selected disabled>
                                        --- Select ---
                                    </InputOption>
                                    {dataProductLine.map((item) => (
                                        <InputOption key={item.id}>
                                            {item.value}
                                        </InputOption>
                                    ))}
                                </InputSelect>
                            </FormGroup>
                            <FormGroup>
                                <Label>Collection</Label>
                                <InputSelect
                                    name='collections'
                                    onChange={handleChangeInput}
                                >
                                    <InputOption selected disabled>
                                        --- Select ---
                                    </InputOption>
                                    <InputOption>
                                        Ananas x Doraemon 50 Years
                                    </InputOption>
                                    <InputOption>DiscoverYou</InputOption>
                                    <InputOption>Ananas Symbol</InputOption>
                                    <InputOption>
                                        Ananas Cropped Symbol
                                    </InputOption>
                                    <InputOption>Ananas Typo Logo</InputOption>
                                    <InputOption>
                                        Ananas x Lucky Luke
                                    </InputOption>
                                    <InputOption>
                                        Pineapple Or Ananas
                                    </InputOption>
                                </InputSelect>
                            </FormGroup>
                            <FormGroup>
                                <Label>Material</Label>
                                <InputSelect
                                    name='material'
                                    onChange={handleChangeInput}
                                >
                                    <InputOption selected disabled>
                                        --- Select ---
                                    </InputOption>
                                    <InputOption>Canvas | Vải</InputOption>
                                    <InputOption>Suede | Da lộn</InputOption>
                                    <InputOption>Synthetic Leather</InputOption>
                                    <InputOption>Leather | Da</InputOption>
                                    <InputOption>Cotton</InputOption>
                                    <InputOption>Fabric</InputOption>
                                    <InputOption>Acrylic</InputOption>
                                    <InputOption>Mesh</InputOption>
                                    <InputOption>Corduroy</InputOption>
                                    <InputOption>Polyester</InputOption>
                                </InputSelect>
                            </FormGroup>
                            <FormGroup>
                                <Label>State</Label>
                                <InputSelect
                                    name='state'
                                    onChange={handleChangeInput}
                                >
                                    <InputOption selected disabled>
                                        --- Select ---
                                    </InputOption>
                                    <InputOption>Limited Edition</InputOption>
                                    <InputOption>Online Only</InputOption>
                                    <InputOption>Sale off</InputOption>
                                    <InputOption>Best Seller</InputOption>
                                    <InputOption>New Arrival</InputOption>
                                </InputSelect>
                            </FormGroup>
                            <FormGroup>
                                <Label>Price</Label>
                                <InputText
                                    name='price'
                                    placeholder='Price of product'
                                    onChange={handleChangeInput}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>inStock</Label>
                                <GenderContainer>
                                    <GenderItem>
                                        <LabelGender>True</LabelGender>
                                        <InputRadio
                                            type='radio'
                                            checked={product.inStock}
                                            onChange={handleCheckRadio}
                                        />
                                    </GenderItem>
                                    <GenderItem>
                                        <LabelGender>False</LabelGender>
                                        <InputRadio
                                            type='radio'
                                            checked={!product.inStock}
                                            onChange={handleCheckRadio}
                                        />
                                    </GenderItem>
                                </GenderContainer>
                            </FormGroup>
                        </FormRight>
                    </BodyForm>
                    <FooterAddProduct>
                        <FormLeft>
                            <FormGroup>
                                <Label>Style</Label>
                                <InputSelect
                                    name='style'
                                    onChange={handleChangeInput}
                                >
                                    <InputOption selected disabled>
                                        --- Select ---
                                    </InputOption>
                                    <InputOption>Low Top</InputOption>
                                    <InputOption>High Top</InputOption>
                                    <InputOption>Slip-on</InputOption>
                                    <InputOption>Mule</InputOption>
                                </InputSelect>
                            </FormGroup>
                            <FormGroup>
                                <Label>Color | Size | Quantity</Label>
                                <DetailContainer2>
                                    {listDetail.map((dt, idt) => (
                                        <ColorContainer2 key={idt}>
                                            <InputColorWrapper>
                                                <InputColor2
                                                    type='color'
                                                    id={idt}
                                                    value={dt.color}
                                                    onChange={
                                                        handleChanceColor2
                                                    }
                                                />
                                            </InputColorWrapper>
                                            <SizeContainer2 id={idt}>
                                                {dt.values.map((vl, ivl) => (
                                                    <SizeItemContainer2
                                                        id={idt}
                                                        key={ivl}
                                                    >
                                                        <InputSize2
                                                            type='text'
                                                            id={ivl}
                                                            name='size'
                                                            value={vl.size}
                                                            onChange={
                                                                handleChangeInputDetail
                                                            }
                                                        />
                                                        <InputSize2
                                                            type='text'
                                                            id={ivl}
                                                            name='quantity'
                                                            value={vl.quantity}
                                                            onChange={
                                                                handleChangeInputDetail
                                                            }
                                                        />
                                                        <CloseIconWrapper
                                                            id={ivl}
                                                            onClick={
                                                                handlePlusItemSize
                                                            }
                                                        >
                                                            <CloseIcon />
                                                        </CloseIconWrapper>
                                                    </SizeItemContainer2>
                                                ))}
                                                <InputSizePlus2
                                                    id='addItem'
                                                    onClick={handlePlusItemSize}
                                                >
                                                    <InputColorPlusIcon />
                                                </InputSizePlus2>
                                            </SizeContainer2>
                                            <CloseIconWrapper
                                                id={idt}
                                                onClick={handlePlusItemDetail}
                                            >
                                                <CloseIcon />
                                            </CloseIconWrapper>
                                        </ColorContainer2>
                                    ))}
                                    <InputSizePlus2
                                        onClick={handlePlusItemDetail}
                                        style={{ width: '100%' }}
                                    >
                                        <InputColorPlusIcon />
                                    </InputSizePlus2>
                                </DetailContainer2>
                            </FormGroup>
                        </FormLeft>
                        <FormRight>
                            <FormGroup>
                                <ButtonAddProduct onClick={handleSubmit2}>
                                    Add product
                                </ButtonAddProduct>
                            </FormGroup>
                        </FormRight>
                    </FooterAddProduct>
                </Form>
            )}
        </AddProductContainer>
    );
};

export default AddProduct;
