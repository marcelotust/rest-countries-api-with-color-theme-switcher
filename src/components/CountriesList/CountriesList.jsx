import CountryCard from "../CountryCard/CountryCard";
import { StyledList } from "./CountriesList.styled";

const CountriesList = (props) => {
  return (
    <StyledList>
      {props.countries.map((country) => (
        <CountryCard
          key={country.name.common}
          id={country.name.common}
          imgURL={country.flags.svg}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </StyledList>
  );
};

export default CountriesList;
