import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const NotFoundImg = styled.img`
  height: 300px;
`;
export const Label = styled.h3`
  float: bottom;
  font-size: 36px;
`;
export const BackButton = styled.button`
  margin-top: 20px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  background-color: #9032a8;
  cursor: pointer;
  &:hover {
    background-color: #a232a8;
  }
`;
const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundImg src="https://i.ibb.co/hYTjhvb/404-SVG-Animated-Page-Concept.png"></NotFoundImg>
      <Label>Page Not Found</Label>
      <Link to="/">
        <BackButton>BACK</BackButton>
      </Link>
    </NotFoundContainer>
  );
};

export default NotFound;
