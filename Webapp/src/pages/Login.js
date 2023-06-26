import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const { username, password } = data;

  const [error, setError] = useState("");
  const submit = () => {
    console.log(data);
    axios
      .post("http://localhost:8000/api/v1/accounts/token/login/", data, {})
      .then((response) => {
        setData("");

        navigate("/Profile");
      })
      .catch((error) => {
        console.log(error);
        setError(
          "Invalid Credentials!\nor your account may not be activated\nplease check your email for activation"
        );
      });
  };

  return (
    <div class="main">
      <div class="login">
        <label for="chk" aria-hidden="true">
          {" "}
          Log In{" "}
        </label>
        <p class="errortext">{error}</p>
        <label>
          <input
            placeholder="Usernamel"
            value={username}
            onChange={(event) => {
              setData({ ...data, username: event.target.value });
            }}
          />
        </label>
        <label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => {
              setData({ ...data, password: event.target.value });
            }}
          />
        </label>
        <div class="ForgotPassword">
          <center>
            {" "}
            <Link to="/forgotPassword">Forgot your password?</Link>
          </center>
        </div>

        <button onClick={submit} type="button">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
