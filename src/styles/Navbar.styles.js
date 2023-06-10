import styled from "styled-components";

export const StyledNavbar = styled.nav`
  /* CUSTOM COLORS */
  --eerie-black: #172121ff;
  --magnolia: #f6f2ffff;
  --dark-cyan: #32908fff;
  --pomp-and-power: #8d5a97ff;
  --rich-black: #121420ff;

  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: 500;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    color: var(--eerie-black);
    text-decoration: none;
    margin: 10px;
    padding: 5px;
    text-transform: uppercase;
  }

  a:hover {
    color: var(--dark-cyan);
  }

  .leftNav {
    display: flex;
    flex-direction: row;
  }

  .rightNav {
    display: flex;
    flex-direction: row;
  }

  svg {
    font-size: 2rem;
  }
`;
