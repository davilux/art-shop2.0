import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: 500;
  background-color: white;

  a {
    color: #333333;
    text-decoration: none;
    padding: 15px;
    text-transform: uppercase;
  }

  svg {
    font-size: 2rem;
    background-color: #ffffff00;
  }

  .logo {
    color: red;
    margin: 10px;
    padding: 5px;
  }

  .menuBar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    width: 100%;
  }

  .hiddenLinks {
    display: none;
    flex-direction: column;
    margin: 0;
    margin-top: 60px;
    // margin-top should match the height of the menu bar
    padding: 0;
    width: 100%;
    position: fixed;
  }

  .hiddenLinks > a:nth-child(odd) {
    background-color: #e0e0e0;
  }

  * {
    background-color: white;
  }

  @media screen and (min-width: 641px) {
    .hiddenLinks {
      display: block;
    }

    a:hover {
      color: #0a0a0a;
      font-weight: 600;
    }

    .mobileMenuIcon {
      display: none;
    }
  }
`;
