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
} from './UpdateProduct_Elements';
import { useState, useEffect } from 'react';
import {
    fetchGetProduct,
    fetchUpdateProduct,
    fetchUploadImageProduct,
} from '../../services/productFetch';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    dataGender,
    dataCategory,
    dataCollection,
    dataMaterial,
    dataState,
    dataStyle,
} from './data';

const UpdateProduct = () => {
    const auth = useSelector((state) => state.auth);

    const [productDetail, setProductDetail] = useState();
    const { id } = useParams();
    const [genders, setGenders] = useState([]);
    const [stock, setStock] = useState(false);
    const [itemDetail, setItemDetail] = useState(0);
    const [img1, setImg1] = useState();
    const [img2, setImg2] = useState();

    useEffect(() => {
        return () => {
            img1 && URL.revokeObjectURL(img1.preview);
        };
    }, [img1]);

    useEffect(() => {
        return () => {
            img2 && URL.revokeObjectURL(img2.preview);
        };
    }, [img2]);

    const handlePreviewAvatar1 = (e) => {
        const file = e.target.files[0];

        if (file) {
            file.preview = URL.createObjectURL(file);

            setImg1(file);
        }
    };

    const handlePreviewAvatar2 = (e) => {
        const file = e.target.files[0];

        if (file) {
            file.preview = URL.createObjectURL(file);

            setImg2(file);
        }
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setProductDetail({
            ...productDetail,
            [name]: value,
            err: '',
            success: '',
        });
    };

    const handleCheckBox = (value) => {
        setGenders((prev) => {
            const isChecked = genders.includes(value);
            if (isChecked) {
                return genders.filter((item) => item !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    const handleCheckStock = () => {
        setStock(!stock);
    };

    useEffect(() => {
        fetchGetProduct(id)
            .then((res) => {
                console.log(res.data.product);
                setProductDetail(res.data.product);
                setGenders(res.data.product.gender);
                setStock(res.data.product.inStock);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const UploadImageProduct = async (img) => {
        let formData = new FormData();
        formData.append('file', img);

        const data = await fetchUploadImageProduct(formData, auth.token)
            .then((res) => {
                return res.data.url;
            })
            .catch((err) => {
                // setErr(err.response.data.msg);
            });

        return data;
    };

    const handleSubmit2 = async (e) => {
        e.preventDefault();

        // const imgProduct1 = await UploadImageProduct(img1);
        // const imgProduct2 = await UploadImageProduct(img2);

        const updateProduct = {
            name: productDetail.name,
            description: productDetail.description,
            // imgPrimary: imgProduct1,
            // imgSecondary: imgProduct2,
            gender: genders,
            category: productDetail.category,
            collections: productDetail.collections,
            material: productDetail.material,
            state: productDetail.state,
            price: Number(productDetail.price),
            style: productDetail.style,
            inStock: stock,
            // detail: dataDetail,
        };

        fetchUpdateProduct(updateProduct, auth.token, id)
            .then((res) => console.log(res.data.msg))
            .catch((err) => console.log(err));
    };

    return (
        <>
            {productDetail && (
                <AddProductContainer>
                    <Form>
                        <Header>Update Product</Header>
                        <BodyForm>
                            <FormLeft>
                                <FormGroup>
                                    <Label htmlFor='name'>Name</Label>
                                    <InputText
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={productDetail.name}
                                        placeholder='Name of product'
                                        onChange={handleChangeInput}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='description'>
                                        Description
                                    </Label>
                                    <InputTextarea
                                        type='text'
                                        id='description'
                                        name='description'
                                        value={productDetail.description}
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
                                                    id='imageUpload1'
                                                    onChange={
                                                        handlePreviewAvatar1
                                                    }
                                                />
                                                <LabelAvatar for='imageUpload1'>
                                                    <PencilIcon />
                                                </LabelAvatar>
                                            </AvatarEdit>
                                            <AvatarPreview>
                                                {
                                                    <ImagePreview
                                                        id='imagePreview1'
                                                        src={
                                                            img1
                                                                ? img1.preview
                                                                : productDetail.imgPrimary
                                                        }
                                                    />
                                                }
                                            </AvatarPreview>
                                        </AvatarUpload>
                                        <AvatarUpload>
                                            <AvatarEdit>
                                                <InputAvatar
                                                    type='file'
                                                    id='imageUpload2'
                                                    onChange={
                                                        handlePreviewAvatar2
                                                    }
                                                />
                                                <LabelAvatar for='imageUpload2'>
                                                    <PencilIcon />
                                                </LabelAvatar>
                                            </AvatarEdit>
                                            <AvatarPreview>
                                                {
                                                    <ImagePreview
                                                        id='imagePreview2'
                                                        src={
                                                            img2
                                                                ? img2.preview
                                                                : productDetail.imgSecondary
                                                        }
                                                    />
                                                }
                                            </AvatarPreview>
                                        </AvatarUpload>
                                    </AvatarUploadContainer>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Image Second</Label>
                                    <AvatarUploadContainer>
                                        <AvatarUpload>
                                            <AvatarUploadPlus />
                                            <AvatarPreviewPlus />
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
                                                    checked={genders.includes(
                                                        gender.value
                                                    )}
                                                    onChange={() =>
                                                        handleCheckBox(
                                                            gender.value
                                                        )
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
                                        <InputOption
                                            selected={
                                                productDetail.category === ''
                                            }
                                            disabled
                                        >
                                            --- Select ---
                                        </InputOption>
                                        {dataCategory.map((item) => (
                                            <InputOption
                                                key={item.id}
                                                selected={
                                                    item.value ===
                                                    productDetail.category
                                                }
                                            >
                                                {item.value}
                                            </InputOption>
                                        ))}
                                    </InputSelect>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Collection</Label>
                                    <InputSelect
                                        name='collection'
                                        onChange={handleChangeInput}
                                    >
                                        <InputOption
                                            selected={
                                                productDetail.collections === ''
                                            }
                                            disabled
                                        >
                                            --- Select ---
                                        </InputOption>
                                        {dataCollection.map((item) => (
                                            <InputOption
                                                key={item.id}
                                                selected={
                                                    item.value ===
                                                    productDetail.collections
                                                }
                                            >
                                                {item.value}
                                            </InputOption>
                                        ))}
                                    </InputSelect>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Material</Label>
                                    <InputSelect
                                        name='material'
                                        onChange={handleChangeInput}
                                    >
                                        <InputOption
                                            selected={
                                                productDetail.material === ''
                                            }
                                            disabled
                                        >
                                            --- Select ---
                                        </InputOption>
                                        {dataMaterial.map((item) => (
                                            <InputOption
                                                key={item.id}
                                                selected={
                                                    item.value ===
                                                    productDetail.material
                                                }
                                            >
                                                {item.value}
                                            </InputOption>
                                        ))}
                                    </InputSelect>
                                </FormGroup>
                                <FormGroup>
                                    <Label>State</Label>
                                    <InputSelect
                                        name='state'
                                        onChange={handleChangeInput}
                                    >
                                        <InputOption
                                            selected={
                                                productDetail.state === ''
                                            }
                                            disabled
                                        >
                                            --- Select ---
                                        </InputOption>
                                        {dataState.map((item) => (
                                            <InputOption
                                                key={item.id}
                                                selected={
                                                    item.value ===
                                                    productDetail.state
                                                }
                                            >
                                                {item.value}
                                            </InputOption>
                                        ))}
                                    </InputSelect>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Price</Label>
                                    <InputText
                                        name='price'
                                        placeholder='Price of product'
                                        value={productDetail.price}
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
                                                checked={stock}
                                                onChange={handleCheckStock}
                                            />
                                        </GenderItem>
                                        <GenderItem>
                                            <LabelGender>False</LabelGender>
                                            <InputRadio
                                                type='radio'
                                                checked={!stock}
                                                onChange={handleCheckStock}
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
                                        <InputOption
                                            selected={
                                                productDetail.style === ''
                                            }
                                            disabled
                                        >
                                            --- Select ---
                                        </InputOption>
                                        {dataStyle.map((item) => (
                                            <InputOption
                                                key={item.id}
                                                selected={
                                                    item.value ===
                                                    productDetail.style
                                                }
                                            >
                                                {item.value}
                                            </InputOption>
                                        ))}
                                    </InputSelect>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Color | Size | Quantity</Label>
                                    <DetailContainer2>
                                        {productDetail.detail.map((detail) => (
                                            <ColorContainer2 key={detail.id}>
                                                <InputColorWrapper>
                                                    <InputColor2
                                                        type='color'
                                                        id={detail.id}
                                                        // onChange={
                                                        //     handleChanceColor2
                                                        // }
                                                    />
                                                </InputColorWrapper>
                                                <SizeContainer2 id={detail.id}>
                                                    {detail.value.map(
                                                        (item) => (
                                                            <SizeItemContainer2
                                                                key={item.id}
                                                            >
                                                                <InputSize2
                                                                    type='text'
                                                                    id={item.id}
                                                                    // onChange={
                                                                    //     handleChangeInputDetailSize
                                                                    // }
                                                                />
                                                                <InputSize2
                                                                    type='text'
                                                                    id={item.id}
                                                                    // onChange={
                                                                    //     handleChangeInputDetailQuantity
                                                                    // }
                                                                />
                                                                <CloseIconWrapper
                                                                    id={item.id}
                                                                    // onClick={
                                                                    //     handleDeleteSize
                                                                    // }
                                                                >
                                                                    <CloseIcon />
                                                                </CloseIconWrapper>
                                                            </SizeItemContainer2>
                                                        )
                                                    )}
                                                    <InputSizePlus2
                                                    // onClick={
                                                    //     handlePlusItemSize
                                                    // }
                                                    >
                                                        <InputColorPlusIcon />
                                                    </InputSizePlus2>
                                                </SizeContainer2>
                                                <CloseIconWrapper
                                                    id={detail.id}
                                                    // onClick={handleDeleteDetail}
                                                >
                                                    <CloseIcon />
                                                </CloseIconWrapper>
                                            </ColorContainer2>
                                        ))}
                                        <InputSizePlus2
                                            // onClick={handlePlusItemDetail}
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
                                        Update product
                                    </ButtonAddProduct>
                                </FormGroup>
                            </FormRight>
                        </FooterAddProduct>
                    </Form>
                </AddProductContainer>
            )}
        </>
    );
};

export default UpdateProduct;
