import React from "react";
import { StyledH2, StyledImg, StyledLI, StyledUL } from "./InfoCountry.styled";

const InfoCountry = (props) => {
  //console.log(">aaa<>< "+Object.keys(props.country.name.nativeName)[0]);
  //const abv = Object.keys(props.country.name.nativeName)[0];
  //console.log("abv "+ abv)

  return (
    <div>
      <StyledImg
        src={props.country.flags.svg}
        alt={`${props.country.name.common} Flag`}
      />
      <div>
        <StyledH2>{props.country.name.common}</StyledH2>
        <StyledUL>
          <StyledLI>
            <b>Native Name:</b>{" "}
            {
              props.country.name.nativeName[
                Object.keys(props.country.name.nativeName)[0]
              ].common
            }
          </StyledLI>
          <StyledLI>
            <b>Population:</b> {props.country.population}
          </StyledLI>
          <StyledLI>
            <b>Region:</b> {props.country.region}
          </StyledLI>
          <StyledLI>
            <b>Sub Region:</b> {props.country.subregion}
          </StyledLI>
          <StyledLI>
            <b>Capital:</b> {props.country.capital}
          </StyledLI>
          <StyledLI>
            <b>Top Level Domain:</b> {props.country.tld[
                Object.keys(props.country.tld)[0]
              ]}
          </StyledLI>
          <StyledLI>
            <b>Currencies: </b>
            {Object.keys(props.country.currencies).map(
              (currency, i) => `${i > 0 ? ", ": ""}${props.country.currencies[currency].name}`
            )}
          </StyledLI>
          <StyledLI>
            <b>Languages:</b> {Object.keys(props.country.languages).map(
              (language, i) => `${i > 0 ? ", ": ""}${props.country.languages[language]}`
            )}
          </StyledLI>
        </StyledUL>
      </div>
    </div>
  );
};

export default InfoCountry;
