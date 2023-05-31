import React, { useState } from "react";
import "./RegisterScreen.css";
import { useNavigate } from "react-router-dom";

const SignupScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:2000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
      credentials: "include",
    });

    const data = res.json();
    console.log(data);
    if (res.status === 200) {
      alert("user register succesfully");
      setUsername("");
      setEmail("");
      setPassword("");
      navigate("/login");
    }
  };
  return (
    <>
      <img
        style={{
          width: "100vw",
          height: "100%",
          position: "relative",
        }}
        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
        alt=""
      />
      <div className="registerScreen">
        <form>
          <h1 style={{ color: "white", textShadow: "1px 4px 5px black" }}>
            Register Account
          </h1>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            style={{ textShadow: "1px 5px 5px black" }}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupScreen;
