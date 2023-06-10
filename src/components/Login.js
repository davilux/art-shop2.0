import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/reducers/usersSlice";
import { useNavigate } from "react-router-dom";

import { StyledLoginForm } from "../styles/LoginForm.styles";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //TODO: Improve UI for front-end validation
    if (!username) return alert("Username required.");
    if (!password) return alert("Please enter a password.");
    if (password.length < 8)
      return alert("Password must be at least 8 characters.");
    else {
      const dispatchRes = await dispatch(
        loginUser({
          username: username.toLowerCase(),
          password,
        })
      );

      // Check if a user successfully logged in:
      if (dispatchRes.payload.refreshToken) navigate("/shop");
    }
  };

  const toggleHiddenPassword = (e) => {
    e.preventDefault();
    setPasswordHidden(!passwordHidden);
  };

  return (
    <>
      <h1>Login</h1>
      <StyledLoginForm onSubmit={(e) => handleSubmit(e)}>
        <label>
          Username
          <br />
          <input
            type="text"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password
          <br />
          <div className="passwordContainer">
            <input
              type={passwordHidden ? "password" : "text"}
              password="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button onClick={toggleHiddenPassword}>
              {passwordHidden ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
        </label>
        <input className="submitButton" type="submit" value="Submit" />
      </StyledLoginForm>
    </>
  );
};

export default Login;
