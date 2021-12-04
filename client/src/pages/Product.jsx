import styled from 'styled-components';
import { FavoriteBorder, KeyboardArrowDown } from '@material-ui/icons';
// import { useState } from 'react';
import { useEffect } from 'react';
import { fetchGetProduct } from '../services/productFetch';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

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
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    background-color: ${(props) => props.color};
    cursor: pointer;

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

const Product = () => {
    const [productDetail, setProductDetail] = useState();
    const { id } = useParams();

    const handleClick = (e) => {
        e.target.classList.toggle('toggle');
    };

    // const [size, setSize] = useState(0);

    const handleChangeSize = (e) => {
        console.log(e.target);
    };

    useEffect(() => {
        fetchGetProduct(id)
            .then((res) => setProductDetail(res.data.product))
            .catch((err) => console.log(err));
    });

    return (
        <Container>
            {productDetail && (
                <Body>
                    <Link>
                        <Blur>{productDetail.category}</Blur>
                        <Blur>Basas</Blur>
                        <HighLight type='link'>{productDetail.name}</HighLight>
                    </Link>
                    <Separate />
                    <Content>
                        <Left>
                            <ImagePrimaryBox>
                                <Image src={productDetail.imgPrimary} />
                            </ImagePrimaryBox>
                            <ImageWrapper>
                                <ImageSecondBox>
                                    <Image src='https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                                </ImageSecondBox>
                                <ImageSecondBox>
                                    <Image src='https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                                </ImageSecondBox>
                                <ImageSecondBox>
                                    <Image src='https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                                </ImageSecondBox>
                                <ImageSecondBox>
                                    <Image src='https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                                </ImageSecondBox>
                            </ImageWrapper>
                        </Left>
                        <Right>
                            <Title>{productDetail.name}</Title>
                            <InfoWrapper>
                                <InfoItem>
                                    ID Product:{' '}
                                    <HighLight>{productDetail._id}</HighLight>
                                </InfoItem>
                                <InfoItem>
                                    {productDetail.state && (
                                        <>
                                            Status:{' '}
                                            <HighLight>
                                                {productDetail.state}
                                            </HighLight>
                                        </>
                                    )}
                                </InfoItem>
                            </InfoWrapper>
                            <PriceWrapper>
                                <PriceCurrent>
                                    {productDetail.price}
                                </PriceCurrent>
                                {productDetail.priceOld && (
                                    <PriceOld>580.000 VND</PriceOld>
                                )}
                            </PriceWrapper>
                            <Separate type='dashed' />
                            <Description>
                                {productDetail.description}
                            </Description>
                            <Separate type='dashed' />
                            <ColorWrapper>
                                {productDetail.detail.map((dl) => (
                                    <Color color={dl.color} />
                                ))}
                            </ColorWrapper>
                            <Separate type='dashed' />
                            <OptionWrapper>
                                <OptionItem>
                                    <TitleOption>Size</TitleOption>
                                    <InputOption>
                                        <ValueWrapper onClick={handleClick}>
                                            36
                                            <KeyboardArrowDown className='arrow' />
                                        </ValueWrapper>
                                        <OptionContainer className='sub'>
                                            <OptionSubWrapper
                                                onClick={handleChangeSize}
                                            >
                                                <OptionSubItem>
                                                    35
                                                </OptionSubItem>
                                            </OptionSubWrapper>
                                            <OptionSubWrapper
                                                onClick={handleChangeSize}
                                            >
                                                <OptionSubItem>
                                                    36
                                                </OptionSubItem>
                                            </OptionSubWrapper>
                                            <OptionSubWrapper
                                                className='dis'
                                                onClick={handleChangeSize}
                                            >
                                                <OptionSubItem>
                                                    37
                                                </OptionSubItem>
                                            </OptionSubWrapper>
                                            <OptionSubWrapper
                                                onClick={handleChangeSize}
                                            >
                                                <OptionSubItem>
                                                    38
                                                </OptionSubItem>
                                            </OptionSubWrapper>
                                            <OptionSubWrapper
                                                onClick={handleChangeSize}
                                            >
                                                <OptionSubItem>
                                                    39
                                                </OptionSubItem>
                                            </OptionSubWrapper>
                                        </OptionContainer>
                                    </InputOption>
                                </OptionItem>
                                <OptionItem>
                                    <TitleOption>Quantity</TitleOption>
                                    <InputOption>
                                        <ValueWrapper onClick={handleClick}>
                                            1
                                            <KeyboardArrowDown className='arrow' />
                                        </ValueWrapper>
                                        <OptionContainer className='sub'>
                                            <OptionSubWrapper>
                                                <OptionSubItem>1</OptionSubItem>
                                            </OptionSubWrapper>
                                            <OptionSubWrapper>
                                                <OptionSubItem>2</OptionSubItem>
                                            </OptionSubWrapper>
                                            <OptionSubWrapper>
                                                <OptionSubItem>3</OptionSubItem>
                                            </OptionSubWrapper>
                                            <OptionSubWrapper>
                                                <OptionSubItem>4</OptionSubItem>
                                            </OptionSubWrapper>
                                        </OptionContainer>
                                    </InputOption>
                                </OptionItem>
                            </OptionWrapper>
                            <ButtonsWrapper>
                                <AddCartWrapper>
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
