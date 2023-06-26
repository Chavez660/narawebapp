import React, { useState } from "react";
import axios from "axios";
export default function RegistrationScreen() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const { first_name, last_name, username, email, password } = data;
  const [success, setSuccess] = useState("");

  const submit = () => {
    console.log(data);
    axios
      .post("http://localhost:8000/api/v1/accounts/users/", data, {})
      .then((response) => {
        console.log(data);
        setData("");
        setSuccess(
          "Successfully Registered!\nplease check your email\nfor activation."
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="main">
      <div class="signUp">
        <label for="chk" aria-hidden="true">
          {" "}
          Registration{" "}
        </label>
        <p class="successtext">{success}</p>

        <label>
          <input
            placeholder="First Name"
            type="text"
            value={first_name}
            onChange={(event) => {
              setData({ ...data, first_name: event.target.value });
            }}
          />
        </label>
        <label>
          <input
            placeholder="Last Name"
            type="text"
            value={last_name}
            onChange={(event) => {
              setData({ ...data, last_name: event.target.value });
            }}
          />
        </label>
        <label>
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(event) => {
              setData({ ...data, username: event.target.value });
            }}
          />
        </label>
        <label>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(event) => {
              setData({ ...data, email: event.target.value });
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
        <button type="button" onClick={submit}>
          Register
        </button>
      </div>
    </div>
  );
}
