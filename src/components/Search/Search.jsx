import { StyledInput } from "./Search.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  const inputChangeHandler = (event) => {
    props.onInputChange(event.target.value);
  };

  return (
    <StyledInput
      type="text"
      placeholder="Search for a country..."
      onChange={inputChangeHandler}
    ></StyledInput>
  );
};

export default Search;
