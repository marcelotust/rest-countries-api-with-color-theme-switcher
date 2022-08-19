import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.HighlightedBackground};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
`;

export const StyledH1 = styled.h1`
  font-size: 14px;
  font-weight: 800;
  padding: 10px;
`;
