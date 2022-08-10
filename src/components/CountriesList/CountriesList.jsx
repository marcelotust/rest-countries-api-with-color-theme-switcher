import CountryCard from "../CountryCard/CountryCard"
import { StyledList } from "./CountriesList.styled"

const CountriesList = () => {

    return (
        <StyledList>
                <CountryCard
                    imgURL="../assets/images/Flag_of_Brazil.svg"
                    name="United States of America"
                    population="323,947,000"
                    region="Americas"
                    capital="Washington, D.C."
                    />
                <CountryCard
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
                    />
        </StyledList>
    )
  }
  
  export default CountriesList