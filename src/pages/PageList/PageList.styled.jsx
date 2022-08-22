import Select from "react-select";
import styled from "styled-components";

export const StyledPage = styled.div`
  background-color: ${({ theme }) => theme.HighlightedBackground};
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

export const StyledSelect = styled(Select)`
  width: 200px;
  //height: 48px;
  font-size: 12px;
  font-weight: 300;
  //padding: 16px;
  //border: none;
  //box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  //border-radius: 10px;
  //background-color: white;
  &.Menu {
    background-color: #e24ab9;
    color: white;
    border-radius: 20px;
    padding: 3px 10px;
    float: left;
  }
`;
