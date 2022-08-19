import { useEffect, useState } from "react";
import CountriesList from "../../components/CountriesList/CountriesList";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import { StyledPage, StyledContainer } from "./PageList.styled";
import { useRESTCountries } from "../../hooks/useRESTCountries";
//import { ApiController } from "../../../providers";

const PageList = () => {
  const { dataResponse, getRESTCountries } = useRESTCountries();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getRESTCountries("all");

    return () => {
      //CLEAN UP FUNCTION
      //ApiController.abort();
    };
  }, []);

  useEffect(() => {
    console.log("entrou");
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
        {countries && countries.length > 0 && (
          <CountriesList countries={countries} />
        )}
      </StyledContainer>
    </StyledPage>
  );
};

export default PageList;
