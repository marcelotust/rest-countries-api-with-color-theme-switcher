import { useEffect, useState } from "react";
import CountriesList from "../../components/CountriesList/CountriesList";
import Search from "../../components/Search/Search";
import { StyledPage, StyledContainer, StyledSelect } from "./PageList.styled";
import { useRESTCountries } from "../../hooks/useRESTCountries";

const options = [
  { value: "africa", label: "Africa" },
  { value: "americas", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const PageList = () => {
  const { dataResponse, getRESTCountries } = useRESTCountries();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getRESTCountries("all");
  }, []);

  useEffect(() => {
    if (dataResponse && dataResponse.length > 0) {
      setCountries(dataResponse);
    }
  }, [dataResponse]);

  const searchChangeHandler = (term) => {
    setCountries(searchByTerm(term));
  };

  const selectChangeHandler = (select) => {
    if (select) {
      setCountries(filterByRegion(select.value));
    } else {
      clearAll();
    }
  };

  const clearAll = () => {
    setCountries([...dataResponse]);
  };

  const searchByTerm = (term) => {
    let searchedCountries = [];
    dataResponse.map((country) => {
      if (country.name.common.toLowerCase().includes(term.toLowerCase())) {
        searchedCountries.push(country);
      }
    });
    return searchedCountries;
  };

  const filterByRegion = (region) => {
    let searchedCountries = [];
    dataResponse.map((country) => {
      if (country.region.toLowerCase() === region) {
        searchedCountries.push(country);
      }
    });
    return searchedCountries;
  };

  return (
    <StyledPage>
      <StyledContainer>
        <Search onInputChange={searchChangeHandler} />
        <StyledSelect
          options={options}
          isClearable="true"
          placeholder="Filter by Region"
          onChange={selectChangeHandler}
        />
        {countries && countries.length > 0 && (
          <CountriesList countries={countries} />
        )}
      </StyledContainer>
    </StyledPage>
  );
};

export default PageList;
