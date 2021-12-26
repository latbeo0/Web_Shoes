import styled from "styled-components";
import Product from "../components/Product";
import { useState } from "react";
import { useEffect } from "react";
import { fetchGetProductByName } from "../services/productFetch";
import { useParams } from "react-router";
import Loader from "../utils/Loader";

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
const TitleDiv = styled.div`
  margin-top: 20px;
  text-align: center;
`;
const Title = styled.div`
  font-size: 35px;
`;

const Products = () => {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  let { name } = useParams();

  useEffect(() => {
    fetchGetProductByName(name)
      .then((res) => {
        setListProduct(res.data.products);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <Container>
      <TitleDiv>
        <Title>Search results of {name}</Title>
      </TitleDiv>
      <Body>
        <ProductsWrapper>
          {loading ? (
            <Loader />
          ) : (
            <Row>
              {listProduct.map((product) => (
                <Column key={product._id}>
                  <Product data={product} />
                </Column>
              ))}
            </Row>
          )}
        </ProductsWrapper>
      </Body>
    </Container>
  );
};

export default Products;
