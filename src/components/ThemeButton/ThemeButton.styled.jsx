import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background-color: #ffffff;
  font-size: 12px;
  font-weight: 300;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    color: red;
  }
`;