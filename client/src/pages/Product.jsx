import styled from 'styled-components';
import { FavoriteBorder, KeyboardArrowDown } from '@material-ui/icons';
// import { useState } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../utils/Loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchHandleCart } from '../redux/actions/cartActions';

SwiperCore.use([Pagination]);

const Container = styled.div``;

const Body = styled.div`
    max-width: 1200px;
    margin: 40px auto;
`;

const Link = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    margin-bottom: 10px;
`;

const Blur = styled.h1`
    font-size: 15px;
    font-weight: 400;
    padding-right: 10px;

    & + & {
        padding-left: 10px;
        border-left: 2px solid #ccc;
    }
`;

const HighLight = styled.div`
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    padding-left: 10px;
    border-left: ${(props) => props.type === 'link' && '3px solid #ccc'};
`;

const Separate = styled.div`
    border-bottom: 3px solid black;
    border-bottom: ${(props) => props.type === 'dashed' && '2px dashed #ccc'};
    margin-bottom: ${(props) => props.type === 'dashed' && '30px'};
`;

const Content = styled.div`
    margin-top: 30px;
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    min-width: 640px;
    margin-right: 60px;
    display: flex;
    flex-direction: column;
`;

const ImagePrimaryBox = styled.div`
    position: relative;
    padding-top: 100%;
    margin-bottom: 20px;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;

const ImageWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 160px;
    gap: 5px;

    .wrapper {
        width: 100%;
    }
`;

const ImageSecondBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Right = styled.div`
    flex: 1;
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    word-spacing: 1px;
    margin-bottom: 30px;
`;

const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const InfoItem = styled.div`
    display: flex;
    align-items: baseline;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 30px;
`;

const PriceWrapper = styled.div`
    display: flex;
    align-items: baseline;
    margin-bottom: 30px;
`;

const PriceCurrent = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin-right: 20px;
    color: #f2632c;
`;

const PriceOld = styled.div`
    font-size: 15px;
    font-weight: 700;
    text-decoration: line-through;
    color: #8088a1;
`;

const Description = styled.div`
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    word-spacing: 1px;
    margin-bottom: 30px;
`;

const ColorWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

const Color = styled.div`
    width: 35px;
    height: 35px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &.check {
        background-color: rgba(0, 0, 0, 0.08);
    }

    &::before {
        position: absolute;
        content: '';
        height: 25px;
        width: 25px;
        background-color: ${(props) => props.color};
    }

    & + & {
        margin-left: 20px;
    }
`;

const OptionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const OptionItem = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

const TitleOption = styled.div`
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    word-spacing: 1px;
    margin-bottom: 10px;
`;

const InputOption = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const ValueWrapper = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background-color: #fff;
    min-height: 40px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
    cursor: pointer;
    cursor: ${(props) => props.disabled && 'not-allowed'};

    .arrow {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        font-size: 24px;
        pointer-events: none;
    }

    &.toggle {
        box-shadow: inset 0 3px 5px rgb(0 0 0 / 13%);

        & ~ .sub {
            display: flex;
        }
    }
`;

const OptionContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background-color: #fff;
    display: none;
`;

const OptionSubWrapper = styled.div`
    width: 25%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: #808080 1px solid;
    margin-left: -1px;
    margin-bottom: -1px;
    cursor: pointer;

    &.check {
        background-color: #dddddd;
    }

    &:hover {
        background-color: #f5f5f5;
    }
`;

const OptionSubItem = styled.div`
    font-size: 16px;
    font-weight: 400;
    pointer-events: none;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
`;

const AddCartWrapper = styled.div`
    flex: 8;
    height: 75px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const TitleButton = styled.h1`
    font-size: 26px;
    font-weight: 900;
    text-transform: uppercase;
    color: white;
    pointer-events: none;
`;

const WishlistWrapper = styled.div`
    flex: 2;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .icon {
        font-size: 40px;
        color: #f2632c;
    }
`;

const PayButton = styled.button`
    width: 100%;
    height: 75px;
    border: none;
    background-color: #f2632c;
    cursor: pointer;
`;

const Message = styled.h1`
    font-size: 1.4rem;
    color: #f2632c;
    margin-bottom: 30px;
`;

const initialState = {
    color: '',
    size: [],
    quantity: 0,
    sz: '',
    qnt: '',
};

const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product);

    const [product, setProduct] = useState();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);

    const [detail, setDetail] = useState(initialState);

    useEffect(() => {
        products.forEach((item) => {
            if (item._id === id) {
                setProduct(item);
                setLoading(false);
            }
        });
    }, [products, id]);

    const handleCheckColor = async (e) => {
        const changeColor = async () => {
            const value = e.target.id;
            setDetail((prev) => {
                return { ...prev, color: value };
            });
            return value;
        };
        await changeColor().then((value) => {
            const temp = [];
            product.detail.forEach((item) => {
                if (item.color === value) {
                    item.values.forEach((s) => {
                        temp.push(s);
                    });
                    setDetail((prev) => {
                        return { ...prev, size: [...temp], sz: '', qnt: '' };
                    });
                }
            });
        });
    };

    const handleChangeSize = async (e) => {
        const changeSize = async () => {
            const value = e.target.id;
            return value;
        };
        await changeSize().then((data) => {
            product.detail.forEach((item) => {
                if (item.color === detail.color) {
                    item.values.forEach((value) => {
                        if (value.size.toString() === data) {
                            setDetail((prev) => {
                                return {
                                    ...prev,
                                    sz: data,
                                    quantity: value.quantity,
                                };
                            });
                        }
                    });
                }
            });
        });
    };

    const handleClick = (e) => {
        e.target.classList.toggle('toggle');
    };

    function formatCash(str) {
        return str
            .split('')
            .reverse()
            .reduce((prev, next, index) => {
                return (index % 3 ? next : next + '.') + prev;
            });
    }

    const handleCart = () => {
        if (!detail.quantity) {
            setErr(true);
        } else {
            dispatch(dispatchHandleCart({ product: product, detail: detail }));
        }
    };

    const handleChangeQuantity = (e) => {
        const value = e.target.id;
        setDetail((prev) => {
            return { ...prev, qnt: value };
        });
    };

    const Quantities = ({ quantity }) => {
        const result = [];
        for (let i = 1; i <= quantity; i++) {
            result.push(
                <OptionSubWrapper
                    key={i}
                    id={i}
                    className={i.toString() === detail.qnt && 'check'}
                    onClick={handleChangeQuantity}
                >
                    <OptionSubItem>{i}</OptionSubItem>
                </OptionSubWrapper>
            );
        }
        return result;
    };

    return (
        <Container>
            {loading ? (
                <Loader />
            ) : (
                <Body>
                    <Link>
                        <Blur>{product.category}</Blur>
                        <Blur>{product.productLine}</Blur>
                        <HighLight type='link'>{product.name}</HighLight>
                    </Link>
                    <Separate />
                    <Content>
                        <Left>
                            <ImagePrimaryBox>
                                <Image src={product.imgPrimary} />
                            </ImagePrimaryBox>
                            <ImageWrapper>
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={10}
                                    navigation
                                    className='wrapper'
                                >
                                    {product.listImg.map((item) => (
                                        <SwiperSlide
                                            key={item}
                                            className='imgBx'
                                        >
                                            <ImageSecondBox>
                                                <Image src={item} />
                                            </ImageSecondBox>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </ImageWrapper>
                        </Left>
                        <Right>
                            <Title>{product.name}</Title>
                            <InfoWrapper>
                                <InfoItem>
                                    ID Product:{' '}
                                    <HighLight>
                                        {product._id.slice(0, 12)} ...
                                    </HighLight>
                                </InfoItem>
                                <InfoItem>
                                    {product.state && (
                                        <>
                                            Status:{' '}
                                            <HighLight>
                                                {product.state}
                                            </HighLight>
                                        </>
                                    )}
                                </InfoItem>
                            </InfoWrapper>
                            <PriceWrapper>
                                <PriceCurrent>
                                    {formatCash(product.price.toString())} VNĐ
                                </PriceCurrent>
                                {product.priceOld && (
                                    <PriceOld>580.000 VND</PriceOld>
                                )}
                            </PriceWrapper>
                            <Separate type='dashed' />
                            <Description>{product.description}</Description>
                            <Separate type='dashed' />
                            <ColorWrapper>
                                {product.detail.map((dl) => (
                                    <Color
                                        key={dl}
                                        id={dl.color}
                                        className={
                                            dl.color === detail.color && 'check'
                                        }
                                        color={dl.color}
                                        onClick={handleCheckColor}
                                    />
                                ))}
                            </ColorWrapper>
                            <Separate type='dashed' />
                            <OptionWrapper>
                                <OptionItem>
                                    <TitleOption>Size</TitleOption>
                                    <InputOption>
                                        <ValueWrapper
                                            disabled={!detail.color}
                                            onClick={handleClick}
                                        >
                                            {detail.sz}
                                            <KeyboardArrowDown className='arrow' />
                                        </ValueWrapper>
                                        <OptionContainer className='sub'>
                                            {detail.size.map((item) => (
                                                <OptionSubWrapper
                                                    id={item.size}
                                                    className={
                                                        item.size.toString() ===
                                                            detail.sz && 'check'
                                                    }
                                                    onClick={handleChangeSize}
                                                >
                                                    <OptionSubItem>
                                                        {item.size}
                                                    </OptionSubItem>
                                                </OptionSubWrapper>
                                            ))}
                                        </OptionContainer>
                                    </InputOption>
                                </OptionItem>
                                <OptionItem>
                                    <TitleOption>Quantity</TitleOption>
                                    <InputOption>
                                        <ValueWrapper
                                            disabled={!detail.sz}
                                            onClick={handleClick}
                                        >
                                            {detail.qnt}
                                            <KeyboardArrowDown className='arrow' />
                                        </ValueWrapper>
                                        <OptionContainer className='sub'>
                                            <Quantities
                                                quantity={detail.quantity}
                                            />
                                        </OptionContainer>
                                    </InputOption>
                                </OptionItem>
                            </OptionWrapper>
                            {err && (
                                <Message>
                                    *Vui lòng chọn Màu/Size/Số lượng phù hợp
                                </Message>
                            )}
                            <ButtonsWrapper>
                                <AddCartWrapper onClick={handleCart}>
                                    <TitleButton>Add to cart</TitleButton>
                                </AddCartWrapper>
                                <WishlistWrapper>
                                    <FavoriteBorder className='icon' />
                                </WishlistWrapper>
                            </ButtonsWrapper>
                            <PayButton>
                                <TitleButton>Pay</TitleButton>
                            </PayButton>
                        </Right>
                    </Content>
                </Body>
            )}
        </Container>
    );
};

export default Product;
