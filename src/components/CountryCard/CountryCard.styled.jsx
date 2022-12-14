import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCard = styled.li`
  box-sizing: border-box;
  width: 264px;
  height: 336px;
  margin-bottom: 30px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const StyledContainer = styled.div`
  padding: 18px;
  padding-top: 0px;
`;

export const StyledUL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:active {
    //text-decoration: none;
  }
  &:link {
    //text-decoration: none;
  }
  &:visited {
    //text-decoration: none;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 18px;
  font-weight: 800;
  padding: 5px;
`;

export const StyledLI = styled.li`
  font-size: 14px;
  font-weight: 300;
  padding: 5px;
`;

export const StyledImg = styled.img`
  max-width: 100%;
  max-height: 160px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
