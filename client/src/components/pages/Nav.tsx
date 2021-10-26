import * as React from "react";
import styled from "styled-components";

const Navbar = styled.div`
  background-color: #010d11;
  display: block;
  text-align: center;
  padding: 30px 30px;
  text-decoration: none;
`;

const Logo = styled.img``;

const NavLinks = styled.ul`
  & li {
    float: left;
  }

  & a {
    font-size: 1.4rem;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 15px;
    cursor: pointer;
    background-color: #010d11;
    border-radius: 30px;
    line-height: 1em;

    &:hover {
      background-color: #ff6600;
      border-radius: 30px;
    }
  }
`;

class Nav extends React.Component {
  render() {
    return (
      <Navbar>
        <NavLinks>
          <li>
            <a href="/home">82 Learn</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup">SignUp</a>
          </li>
        </NavLinks>
      </Navbar>
    );
  }
}

export default Nav;
