import styled from "styled-components";

export const StyledPage = styled.div`
  background-color: ${({ theme }) => theme.HighlightedBackground};;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 30px;
`;