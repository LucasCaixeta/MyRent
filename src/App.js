import React from "react";
import { Nav, Dropdown, Icon, Navbar } from "rsuite";
import logo from "./assets/logo_transparent.png";
import styled from "styled-components";

const SoonMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  overflow: auto;
`;

function App() {
  return (
    <div>
      <SoonMessage>
        <img src={logo} alt="Logo" width="120px" />

        <h1>My Rent - Rental Manager Software</h1>
      </SoonMessage>
    </div>
  );
}

export default App;
