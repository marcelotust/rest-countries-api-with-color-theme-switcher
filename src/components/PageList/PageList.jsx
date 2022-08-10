import { useEffect } from "react";
import CountriesList from "../CountriesList/CountriesList";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import { StyledPage, StyledContainer } from "./PageList.styled";
import { useRESTCountries } from "../../hooks/useRESTCountries";

let countries = [];

const PageList = () => {
  const { dataResponse, getRESTCountries } = useRESTCountries();

  useEffect(() => {
    getRESTCountries("all");
  }, []);

  useEffect(() => {
    if (dataResponse && dataResponse.length > 0) {
      countries = dataResponse;
    }
  }, [dataResponse]);

  return (
    <StyledPage>
      <StyledContainer>
        <Search />
        <Filter />
        {countries.length > 0 && <CountriesList countries={countries} />}
      </StyledContainer>
    </StyledPage>
  );
};

export default PageList;
