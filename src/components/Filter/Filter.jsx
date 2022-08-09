import { StyledButton } from "./Filter.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Filter = () => {

  return (
      <StyledButton>
        <p>Filter by Region</p>
        <FontAwesomeIcon icon={faAngleDown} />
      </StyledButton>
  )
}

export default Filter