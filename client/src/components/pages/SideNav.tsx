import * as React from "react";
import styled from "styled-components";

const Sidebar = styled.div``;

const SideContainer = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 20%;
  height: 100%;
  min-width: 200px;
  background-color: white;
  z-index: 999;
  padding: 5em 1em;
  transition: transform 300ms;
`;

const NavName = styled.div`
  a {
    font-weight: bold;
    font-size: 1.3em;
    color: black;
  }
`;

const SideNav = ({}) => {
  const [nav, showNav] = React.useState(false);

  function close() {
    showNav(false);
  }

  return (
    <div>
      <Sidebar>
        <SideContainer>
          <NavName onClick={close}>
            <a href="/dash">Topic 1</a>
          </NavName>
        </SideContainer>
      </Sidebar>
    </div>
  );
};
export default SideNav;
