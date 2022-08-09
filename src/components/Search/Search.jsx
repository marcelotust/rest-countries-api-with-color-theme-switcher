import { StyledInput } from "./Search.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <StyledInput
      type="text"
      placeholder="Search for a country..."
    ></StyledInput>
  );
};

export default Search;
