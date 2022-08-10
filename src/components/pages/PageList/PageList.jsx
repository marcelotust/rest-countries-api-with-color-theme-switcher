import { useEffect, useState } from "react";
import CountriesList from "../../CountriesList/CountriesList";
import Filter from "../../Filter/Filter";
import Search from "../../Search/Search";
import { StyledPage, StyledContainer } from "./PageList.styled";
import { useRESTCountries } from "../../../hooks/useRESTCountries";

const PageList = () => {
  const { dataResponse, getRESTCountries } = useRESTCountries();
  const [ countries, setCountries ] = useState([]);

  useEffect(() => {
    getRESTCountries("all");
  }, []);

  useEffect(() => {
    if (dataResponse && dataResponse.length > 0) {
      setCountries(dataResponse);
    }
  }, [dataResponse]);

  const searchChangeHandler = (term) => {
    let searchedCountries = [];
    dataResponse.map((country) => {
      if (country.name.common.toLowerCase().includes(term.toLowerCase())) {
        searchedCountries.push(country);
      }
      setCountries(searchedCountries);
    });
  };

  return (
    <StyledPage>
      <StyledContainer>
        <Search onInputChange={searchChangeHandler} />
        <Filter />
        {countries && countries.length > 0 && <CountriesList countries={countries} />}
      </StyledContainer>
    </StyledPage>
  );
};

export default PageList;
