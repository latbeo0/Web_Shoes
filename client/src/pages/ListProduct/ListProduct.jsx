import {
  ListProductContainer,
  Header,
  ListProductBody,
  TableContainer,
  Table,
  HeaderTable,
  RowHeaderTable,
  ItemHeaderTable,
  BodyTable,
  RowBodyTable,
  ItemBodyTable,
  ItemBodyWrapper,
  ImageProduct,
  TitleProduct,
  ColorContainer,
  Color,
  StockFalse,
  StockTrue,
  ActionContainer,
  ActionItem,
  EditIcon,
  DeleteEdit,
  LinkR,
} from "./ListProduct_Elements";
import { useEffect, useState } from "react";
import { fetchGetAllProducts } from "../../services/productFetch";
import Loader from "../../utils/Loader";

const ListProduct = () => {
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

  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ".") + prev;
      });
  }

  return (
    <ListProductContainer>
      <Header>List Product</Header>
      <ListProductBody>
        {loading ? (
          <Loader />
        ) : (
          <TableContainer>
            <Table>
              <HeaderTable>
                <RowHeaderTable>
                  <ItemHeaderTable>#</ItemHeaderTable>
                  <ItemHeaderTable>Name</ItemHeaderTable>
                  <ItemHeaderTable>Price</ItemHeaderTable>
                  <ItemHeaderTable>Product Line</ItemHeaderTable>
                  <ItemHeaderTable>Category</ItemHeaderTable>
                  <ItemHeaderTable>Color</ItemHeaderTable>
                  <ItemHeaderTable>Stock</ItemHeaderTable>
                  <ItemHeaderTable>Action</ItemHeaderTable>
                </RowHeaderTable>
              </HeaderTable>
              <BodyTable>
                {listProduct.map((product, index) => (
                  <RowBodyTable key={product.id}>
                    <ItemBodyTable style={{ minWidth: "50px" }}>
                      {index + 1}
                    </ItemBodyTable>
                    <ItemBodyTable style={{ width: "auto" }}>
                      <ItemBodyWrapper>
                        <ImageProduct src={product.imgPrimary} alt="" />
                        <TitleProduct>{product.name}</TitleProduct>
                      </ItemBodyWrapper>
                    </ItemBodyTable>
                    <ItemBodyTable style={{ width: "150px" }}>
                      {formatCash(product.price.toString())} vnđ
                    </ItemBodyTable>
                    <ItemBodyTable style={{ width: "150px" }}>
                      {product.productLine}
                    </ItemBodyTable>
                    <ItemBodyTable style={{ width: "150px" }}>
                      {product.category}
                    </ItemBodyTable>
                    <ItemBodyTable style={{ width: "100px" }}>
                      <ColorContainer>
                        {product.detail.map((dl) => (
                          <Color
                            key={dl.id}
                            style={{
                              backgroundColor: dl.color,
                            }}
                          />
                        ))}
                      </ColorContainer>
                    </ItemBodyTable>
                    <ItemBodyTable style={{ width: "100px" }}>
                      {product.inStock ? (
                        <StockTrue>In</StockTrue>
                      ) : (
                        <StockFalse>Out</StockFalse>
                      )}
                    </ItemBodyTable>
                    <ItemBodyTable style={{ width: "200px" }}>
                      <ActionContainer>
                        <LinkR to={`/admin/product/${product._id}`}>
                          <ActionItem>
                            <EditIcon />
                          </ActionItem>
                        </LinkR>
                        <ActionItem>
                          <DeleteEdit
                          />
                        </ActionItem>
                      </ActionContainer>
                    </ItemBodyTable>
                  </RowBodyTable>
                ))}
              </BodyTable>
            </Table>
          </TableContainer>
        )}
      </ListProductBody>
    </ListProductContainer>
  );
};

export default ListProduct;
