import { StyledHeader, StyledH1 } from "./Header.styled";
import ThemeButton from "../ThemeButton/ThemeButton";

const Header = (props) => {
  return (
    <StyledHeader>
      <StyledH1>Where in the world?</StyledH1>
      <ThemeButton themeToggler={props.themeToggler} />
    </StyledHeader>
  );
};

export default Header;
