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
    margin: 0px;
  }

  img {
    width: 100%;
  }

  button {
    background-color: red;
    border: 3px solid red;
    padding: 10px;
    cursor: pointer;
    border-radius: 100px;
  }
  button:hover {
    background-color: white;
    border: 3px solid black;
    padding: 10px;
    cursor: pointer;
    border-radius: 100px;
  }

  p {
    margin: 10px 0px;
    color: red;
  }
`;
