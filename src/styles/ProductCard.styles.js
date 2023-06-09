import styled from "styled-components";

export const StyledProductCard = styled.li`
  width: 200px;
  background-color: #ebebeb;
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
    background-color: #333333;
    color: #d6d6d6;
    border: 0;
    padding: 10px;
    cursor: pointer;
    border-radius: 100px;
  }
  button:hover {
    background-color: #0a0a0a;
    border: 0;
    padding: 10px;
    cursor: pointer;
    border-radius: 100px;
  }

  p {
    margin: 10px 0px;
  }
`;
