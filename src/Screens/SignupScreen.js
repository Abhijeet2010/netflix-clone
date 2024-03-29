import React, { useState } from "react";
import "./SignupScreen.css";
import { useNavigate } from "react-router-dom";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const signIn = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:2000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    const data = res.json();
    console.log(data);
    if (res.status === 200) {
      alert("user saved succesfully");
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__grey">New to Netflix? </span>{" "}
          <span className="signupScreen__link" onClick={register}>
            Sign up Now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
