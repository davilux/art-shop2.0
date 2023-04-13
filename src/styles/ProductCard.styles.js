import styled from "styled-components";

export const StyledProductCard = styled.li`
  width: 200px;
  background-color: purple;
  padding: 10px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    margin: 0;
  }

  img {
    width: 100%;
  }

  p {
    color: red;
  }
`;
