import styled from "styled-components";

export const StyledNavbar = styled.nav`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;

  display: flex;
  flex-direction: row;

  a {
    color: red;
    text-decoration: none;
    margin: 10px;
    padding: 5px;
    text-transform: uppercase;
  }

  a:hover {
    color: purple;
  }

  * {
    border: 1px solid black;
  }
`;
