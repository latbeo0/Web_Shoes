import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  width: 100%;
  height: 500px;
`;
const Row = styled.div`
  width: 100%;
  height: 100%;
`;
const RowContentContainer = styled.div`
  float: left;
  width: 50%;
  height: 100%;
  padding: 10px;
`;
const RowContent = styled.div`
  font-family: Sans-serif;
  width: 100%;
  height: 100%;
  padding: 10px;
`;
const RowImage = styled.img`
  width: 100%;
  height: 300px;
  position: relative;
`;
const RowTitle = styled.a`

font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
}
`;
const RowDescription = styled.p`
  font-size: 16px;
`;
const Concept = () => {
  return (
    <Container>
      <Row>
        <RowContentContainer>
          <RowContent>
            <RowImage src="https://www.therightcup.com/wp-content/uploads/2017/03/shoes-banner-bg-1.jpg"></RowImage>
            <RowTitle>Xuân - Hạ</RowTitle>
            <RowDescription>
              Danh mục những sản phẩm bán tại "giá tốt hơn" chỉ được bán kênh
              online - Online Only, chúng đã từng làm mưa làm gió một thời gian
              và hiện đang rơi vào tình trạng bể size, bể số.
            </RowDescription>
          </RowContent>
        </RowContentContainer>

        <RowContentContainer>
          <RowContent>
            <RowImage src="https://previews.123rf.com/images/ylivdesign/ylivdesign1708/ylivdesign170826627/84436876-running-sport-shoes-banner-horizontal-concept-flat-illustration-of-running-sport-shoes-banner-horizo.jpg"></RowImage>
            <RowTitle>Thu - Đông</RowTitle>
            <RowDescription>
              Danh mục những sản phẩm bán tại "giá tốt hơn" chỉ được bán kênh
              online - Online Only, chúng đã từng làm mưa làm gió một thời gian
              và hiện đang rơi vào tình trạng bể size, bể số.
            </RowDescription>
          </RowContent>
        </RowContentContainer>
      </Row>
    </Container>
  );
};
export default Concept;
