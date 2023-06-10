import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: 500;

  a {
    color: #333333;
    text-decoration: none;
    margin: 10px;
    padding: 5px;
    text-transform: uppercase;
  }

  svg {
    font-size: 2rem;
  }

  .logo {
    color: red;
    margin: 10px;
    padding: 5px;
  }

  .hiddenLinks {
    display: none;
    width: 100%;
  }

  .leftNav,
  .rightNav {
    display: flex;
    flex-direction: row;
  }

  * {
    border: 1px solid black;
  }

  @media screen and (min-width: 641px) {
    .hiddenLinks {
      display: block;
    }

    a:hover {
      color: #0a0a0a;
      font-weight: 600;
    }

    .menuIcon {
      display: none;
    }
  }
`;
