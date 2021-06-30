import styled from 'styled-components'
import {
    Link
  } from "react-router-dom";

const StyledNavBar = styled.ul`
    display: flex;
    list-style-type: none;
    li {
        margin: 0 32px;
        &:hover {
            font-weight: bold;
            cursor: pointer;
        }
    }
`;

const StyledNavBarContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

function NavBar() {
    return (
        <StyledNavBarContainer>
           <StyledNavBar>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/portfolio">Portfolio</Link></li>
               <li><Link to="/skills">Skills</Link></li>
               <li><Link to="/contact">Contact</Link></li>
           </StyledNavBar>
        </StyledNavBarContainer>
    )
}
export default NavBar;