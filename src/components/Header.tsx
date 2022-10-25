import styled from 'styled-components';
import { Link } from "react-router-dom";

function Header() {
  return (
    <StyledHeader>
      <Link to="/">Solar System</Link>
      <Link to="/photos">Photo of the day</Link>
      <Link to='/random'>Photo by date</Link>
    </StyledHeader>
  )
}

const StyledHeader = styled.div({
  height: '5vh',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white',
  padding: '2.5vh 20vw',
});

export default Header