import { StyledCard, StyledContainer, StyledH2, StyledImg, StyledLI, StyledUL } from "./CountryCard.styled"


const CountryCard = (props) => {
  return (
      <StyledCard>
        <StyledImg src={props.imgURL} alt={`${props.name} Flag`} />
        <StyledContainer>
            <StyledH2>{props.name}</StyledH2>
            <StyledUL>
                <StyledLI><b>Population:</b> {props.population}</StyledLI>
                <StyledLI><b>Region:</b> {props.region}</StyledLI>
                <StyledLI><b>Capital:</b> {props.capital}</StyledLI>
            </StyledUL>
        </StyledContainer>
      </StyledCard>
  )
}

export default CountryCard