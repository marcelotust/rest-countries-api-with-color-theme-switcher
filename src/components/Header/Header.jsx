import { StyledHeader, StyledH1 } from "./Header.styled";
import ThemeButton from "../ThemeButton/ThemeButton";

const Header = () => {
  return (
    <StyledHeader>
      <StyledH1>Where in the world?</StyledH1>
      <ThemeButton />
    </StyledHeader>
  );
};

export default Header;
