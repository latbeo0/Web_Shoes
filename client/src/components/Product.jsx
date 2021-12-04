import styled from 'styled-components';
import WishlistButton from '../components/WishlistButton';
import { Link } from 'react-router-dom';

const ProductWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 40px;

    .isHovered {
        display: none;
    }

    &:hover {
        .isHovered {
            display: block;
        }

        .hidden {
            opacity: 1;
        }
    }
`;

const ProductImageBox = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100%;
    cursor: pointer;
`;

const ProductImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
`;

const ButtonWrapper = styled.div`
    position: relative;
    height: 50px;
    top: -50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const ButtonBuy = styled.button`
    width: 150px;
    height: 50px;
    border: none;
    background-color: #f15e2c;
    font-size: 20px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    opacity: 0;
    cursor: pointer;
`;

const ProductBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
`;

const Status = styled.h1`
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    color: #f15e2c;
    margin: 18px 0;
`;

const Separate = styled.div`
    width: 100%;
    height: 1px;
    border-top: 1px dashed #6f6f6f;
`;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 700;
    margin-top: 12px;
    cursor: pointer;
    text-align: center;

    &:hover {
        color: #f15e2c;
    }
`;

const Description = styled.div`
    font-size: 15px;
    font-weight: 400;
    margin: 10px 0px;
`;

const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Price = styled.h1`
    font-size: ${(props) => (props.state === 'new' ? '16px' : '15px')};
    font-weight: ${(props) => (props.state === 'new' ? '700' : '400')};
    text-decoration: ${(props) => props.state === 'old' && 'line-through'};
    color: ${(props) => props.state === 'old' && '#8088a1'};

    & + & {
        margin-left: 20px;
    }
`;

const Tag = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    font-size: 14px;
    font-weight: 700;
    font-style: italic;
    text-align: center;
    color: white;
    background-color: #303030;
    padding: 10px 20px;
    min-width: 45%;
`;

const TagLimited = styled(Tag)`
    background-color: #004e9b;
`;

const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const OutOfStock = styled.h1`
    font-size: 22px;
    font-weight: 900;
    color: white;
    text-transform: uppercase;
`;

const LinkR = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Product = ({ data }) => {
    function formatCash(str) {
        return str
            .split('')
            .reverse()
            .reduce((prev, next, index) => {
                return (index % 3 ? next : next + '.') + prev;
            });
    }

    return (
        <ProductWrapper>
            <LinkR to={`/product/${data._id}`}>
                <ProductImageBox>
                    <ProductImage src={data.imgPrimary} />
                    <ProductImage
                        className='isHovered'
                        src={data.imgSecondary}
                    />
                    {!data.inStock && (
                        <Modal className='modal'>
                            <OutOfStock>Out of stock</OutOfStock>
                        </Modal>
                    )}
                </ProductImageBox>
            </LinkR>
            <ButtonWrapper>
                <LinkR to={`/product/${data._id}`}>
                    {data.inStock && (
                        <ButtonBuy className='hidden'>Buy Now</ButtonBuy>
                    )}
                </LinkR>

                <WishlistButton />
            </ButtonWrapper>
            <ProductBody>
                <Status>{data.state}</Status>
                <Separate />
                <LinkR to={`/product/${data._id}`}>
                    <Title>{data.name}</Title>
                </LinkR>
                <Description>Poseidon</Description>
                <PriceWrapper>
                    <Price state='new'>
                        {formatCash(data.price.toString())} vnđ
                    </Price>
                    {data.priceOld && <Price state='old'>000</Price>}
                </PriceWrapper>
            </ProductBody>
            {data.state === 'Online Only' ? (
                <Tag>{data.state}</Tag>
            ) : (
                data.state === 'Limited Edition' && (
                    <TagLimited>{data.state}</TagLimited>
                )
            )}
        </ProductWrapper>
    );
};

export default Product;
