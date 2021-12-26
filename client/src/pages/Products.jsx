import styled from 'styled-components';
import Product from '../components/Product';
import FilterSidebar from '../components/FilterSidebar';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchGetAllProducts } from '../services/productFetch';
import { useLocation } from 'react-router';
import Loader from '../utils/Loader';

const Container = styled.div`
    width: 100vw;
`;

const Body = styled.div`
    max-width: 1200px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const Left = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 3;
`;

const BannerBox = styled.div`
    position: relative;
    width: 890px;
    height: 330px;
`;

const Banner = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ProductsWrapper = styled.div`
    width: 100%;
    margin-top: 40px;
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
`;

const Column = styled.div`
    width: 33.33333333%;
    padding-left: 10px;
    padding-right: 10px;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 500px;
    position: relative;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const initialState = {
    gender: '',
    category: [],
    attribute: [],
};

const Products = () => {
    const [listProduct, setListProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchGetAllProducts()
            .then((res) => {
                setListProduct(res.data.products);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    const location = useLocation();

    const [filters, setFilters] = useState(initialState);

    useEffect(() => {
        const query = new URLSearchParams(location.search);

        let gender = '';
        if (query.get('gender')) {
            // eslint-disable-next-line
            const qGender = query.get('gender').split(/,/);

            if (qGender.includes('men')) {
                if (qGender.includes('women')) {
                    gender = 'all';
                } else {
                    gender = 'male';
                }
            } else {
                gender = 'female';
            }
        }

        // Category
        const category = [];
        if (query.get('category')) {
            // eslint-disable-next-line
            const qCategory = query.get('category').split(/,/);

            qCategory.forEach((item) => {
                category.push(item.split('_').join(' '));
            });
        }

        // Attribute
        const attribute = [];
        if (query.get('attribute')) {
            // eslint-disable-next-line
            const qAttribute = query.get('attribute').split(/,/);

            qAttribute.forEach((item) => {
                attribute.push(item.split('_').join(' '));
            });
        }

        setFilters({ gender, category, attribute });
    }, [location]);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productTemp = [];
        listProduct.forEach((item) => {
            if (
                filters.category.length === 0 ||
                filters.category.includes(item.category.toLowerCase())
            ) {
                if (
                    filters.attribute.length === 0 ||
                    filters.attribute.includes(
                        item.collections.toLowerCase()
                    ) ||
                    filters.attribute.includes(item.material.toLowerCase()) ||
                    filters.attribute.includes(
                        item.productLine.toLowerCase()
                    ) ||
                    filters.attribute.includes(item.state.toLowerCase()) ||
                    filters.attribute.includes(item.style.toLowerCase())
                ) {
                    productTemp.push(item);
                }

                if (filters.attribute.includes('500k - 599k')) {
                    if (
                        !productTemp.includes(item) &&
                        item.price >= 500000 &&
                        item.price < 600000
                    ) {
                        productTemp.push(item);
                    }
                }
                if (filters.attribute.includes('> 600k')) {
                    if (!productTemp.includes(item) && item.price >= 600000) {
                        productTemp.push(item);
                    }
                }
                if (filters.attribute.includes('400k - 499k')) {
                    if (
                        !productTemp.includes(item) &&
                        item.price >= 400000 &&
                        item.price < 500000
                    ) {
                        productTemp.push(item);
                    }
                }
                if (filters.attribute.includes('300k - 399k')) {
                    if (
                        !productTemp.includes(item) &&
                        item.price >= 300000 &&
                        item.price < 400000
                    ) {
                        productTemp.push(item);
                    }
                }
                if (filters.attribute.includes('200k - 299k')) {
                    if (
                        !productTemp.includes(item) &&
                        item.price >= 200000 &&
                        item.price < 300000
                    ) {
                        productTemp.push(item);
                    }
                }
                if (filters.attribute.includes('< 200k')) {
                    if (!productTemp.includes(item) && item.price < 200000) {
                        productTemp.push(item);
                    }
                }

                item.detail.forEach((dt) => {
                    if (filters.attribute.includes(dt.color.toString())) {
                        if (!productTemp.includes(item)) {
                            productTemp.push(item);
                        }
                    }

                    dt.values.forEach((vl) => {
                        if (filters.attribute.includes(vl.size.toString())) {
                            if (!productTemp.includes(item)) {
                                productTemp.push(item);
                            }
                        }
                    });
                });
            }
        });

        if (filters.gender !== 'male' && filters.gender !== 'female') {
            setProducts(() => [...productTemp]);
        } else {
            if (filters.gender === 'male') {
                const newArr = productTemp.filter((item) =>
                    item.gender.includes('Male')
                );
                setProducts(() => [...newArr]);
            } else {
                const newArr = productTemp.filter((item) =>
                    item.gender.includes('Female')
                );
                setProducts(() => [...newArr]);
            }
        }
    }, [listProduct, filters]);

    return (
        <Container>
            <Body>
                <Left>
                    <FilterSidebar />
                </Left>
                <Right>
                    <BannerBox>
                        <Banner src='https://images.pexels.com/photos/9638823/pexels-photo-9638823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                    </BannerBox>
                    <ProductsWrapper>
                        {loading ? (
                            <Loader />
                        ) : products.length === 0 ? (
                            <ImageWrapper>
                                <Image src='https://kellysearch.co.in/assets/images/pnf.jpg' />
                            </ImageWrapper>
                        ) : (
                            <Row>
                                {products.map((product) => (
                                    <Column key={product._id}>
                                        <Product data={product} />
                                    </Column>
                                ))}
                            </Row>
                        )}
                    </ProductsWrapper>
                </Right>
            </Body>
        </Container>
    );
};

export default Products;
