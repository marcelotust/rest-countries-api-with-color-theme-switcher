import { StyledButton } from "./ThemeButton.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const ThemeButton = (props) => {

  return (
    <StyledButton onClick={props.themeToggler}>
      <FontAwesomeIcon icon={faMoon} />
      <p>Dark Mode</p>
    </StyledButton>
  );
};

export default ThemeButton;
