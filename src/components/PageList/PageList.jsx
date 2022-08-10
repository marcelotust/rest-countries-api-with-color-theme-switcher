import { useEffect } from "react";
import CountriesList from "../CountriesList/CountriesList";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import { StyledPage, StyledContainer } from "./PageList.styled";
import { useRESTCountries } from "../../hooks/useRESTCountries";

const PageList = () => {
  const { dataResponse, getRESTCountries } = useRESTCountries();
  

  useEffect(() => {
    getRESTCountries("all");
  }, []);

  useEffect(() => {
    console.log(">>>" + dataResponse);
  }, [dataResponse]);

  return (
    <StyledPage>
      <StyledContainer>
        <Search />
        <Filter />
        <CountriesList />
      </StyledContainer>
    </StyledPage>
  );
};

export default PageList;
