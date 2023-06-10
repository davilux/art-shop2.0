import styled from "styled-components";

export const StyledNavbar = styled.nav`
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

  .leftNav > :not(.logo),
  .rightNav {
    display: none;
  }

  .leftNav > :first-child {
    color: red;
    margin: 10px;
    padding: 5px;
  }

  * {
    border: 1px solid black;
  }

  @media screen and (min-width: 641px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    a:hover {
      color: #0a0a0a;
      font-weight: 600;
    }

    .leftNav > :not(:first-child) {
      display: inline;
    }

    .leftNav,
    .rightNav {
      display: flex;
      flex-direction: row;
    }
  }
`;
