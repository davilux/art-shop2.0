import styled from "styled-components";

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    width: 100%;
    padding: 10px;
  }

  input[type="text"],
  input[type="password"] {
    padding: 10px;
    background-color: #ffffffff;
  }

  .passwordContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  input:focus {
    outline: 2px solid black;
  }

  .passwordContainer > button {
    border: 0;
    background-color: #ffffffff;
  }

  .submitButton {
    width: 90px;
    margin: 10px;
  }

  //   *{
  //     border 1px solid black;
  //   }
`;
