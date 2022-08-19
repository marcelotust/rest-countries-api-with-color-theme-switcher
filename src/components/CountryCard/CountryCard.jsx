import { StyledCard, StyledContainer, StyledH2, StyledImg, StyledLI, StyledLink, StyledUL } from "./CountryCard.styled"


const CountryCard = (props) => {
  return (
      
      <StyledCard>
        <StyledLink to={`/detail/${props.id}`}>
        <StyledImg src={props.imgURL} alt={`${props.name} Flag`} />
        <StyledContainer>
            <StyledH2>{props.name}</StyledH2>
            <StyledUL>
                <StyledLI><b>Population:</b> {props.population}</StyledLI>
                <StyledLI><b>Region:</b> {props.region}</StyledLI>
                <StyledLI><b>Capital:</b> {props.capital}</StyledLI>
            </StyledUL>
        </StyledContainer>
        </StyledLink>
      </StyledCard>
  )
}

export default CountryCard