import CountriesList from "../CountriesList";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import { StyledPage, StyledContainer } from "./PageList.styled";

const PageList = () => {
  return (
    <StyledPage>
      <StyledContainer>
        <Search />
        <Filter />
      </StyledContainer>
    </StyledPage>
  );
};
//<CountriesList />

export default PageList;
