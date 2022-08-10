import CountryCard from "../CountryCard/CountryCard";
import { StyledList } from "./CountriesList.styled";

const CountriesList = (props) => {
  console.log("...... " + props.countries.length);
  return (
    <StyledList>
      {props.countries.map((country) => (
        <CountryCard
          key={country.name.common}
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
/*<CountryCard
                    imgURL="../assets/images/Flag_of_Brazil.svg"
                    name="United States of America"
                    population="323,947,000"
                    region="Americas"
                    capital="Washington, D.C."
                    />
                <CountryCard
                    imgURL="https://pt.wikipedia.org/wiki/Bandeira_do_Brasil#/media/Ficheiro:Flag_of_Brazil.svg"
                    name="United States of America"
                    population="323,947,000"
                    region="Americas"
                    capital="Washington, D.C."
                    />*/
