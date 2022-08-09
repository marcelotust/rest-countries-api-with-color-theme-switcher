import styled from "styled-components";

export const StyledButton = styled.button`
  box-sizing: border-box;
  width: 200px;
  height: 48px;
  padding: 16px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: white;
  font-size: 12px;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: red;
  }
`;
