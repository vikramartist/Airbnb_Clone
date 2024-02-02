import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { useState } from "react";
import Message from "../components/Message";
import axios from "axios";
import schema from "../utilities/PasswordChecker.js";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    axios.get(`/test`);
  };

  const validatePassword = (password) => {
    console.log(schema.validate(password, { details: true }));
  };

  return (
    <div className="w-full h-[100vh] relative">
      <div className="bg-gray-100 p-5 flex justify-center items-center">
        <a href="#" className="text-black underline font-medium">
          Learn about Guest Favourites, the most loved homes on Airbnb
        </a>
      </div>
      <Link className="absolute m-5 flex text-red-500" to={"/"}>
        <Logo />
      </Link>
      <div className="register-form invisible-scrollbar">
        <h5 className="text-rose-600">REGISTER</h5>
        <h6 className="text-md font-light text-red-800 ">Welcome to Airbnv</h6>
        <form
          onSubmit={registerUser}
          action=""
          method="POST"
          className="mt-2 py-2 w-[90%]"
        >
          <section className="register-input">
            <label htmlFor="username">UserName</label>
            <input
              type="username"
              id="username"
              name="username"
              placeholder="Username"
              value={userName}
              className="register-input-style"
              onChange={(e) => setUserName(e.target.value)}
            />
            {userName ? (
              <Message color={"green"}>Looks good</Message>
            ) : (
              <Message color={"red"}>Username cannot be blank</Message>
            )}
          </section>
          <section className="register-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              className="register-input-style"
              onChange={(e) => setEmail(e.target.value)}
            />
            {userName ? (
              <Message color={"green"}>Looks good</Message>
            ) : (
              <Message color={"red"}>Email cannot be blank</Message>
            )}
          </section>
          <section className="register-input">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              className="register-input-style"
              title={
                <Message color={"red"}>
                  <p>
                    Password should contain atleast one special character and
                    digit.
                  </p>
                  <p>Password should not be blank.</p>
                  <p>Password length should be atleast 8.</p>
                  <p>
                    Password should have both uppercase and lowercase letters.
                  </p>
                </Message>
              }
              onChange={(e) => validatePassword(e.target.value)}
            />
            {password ? (
              <Message color={"green"}>Password looks good</Message>
            ) : (
              <Message color={"red"}>Password cannot be blank</Message>
            )}
          </section>
          <section className="w-full flex items-center justify-center">
            <button className="register-btn">REGISTER</button>
          </section>
          <p className="auth">
            Already a member?&nbsp;
            <Link className="auth-link" to={"/login"}>
              Login
            </Link>
          </p>
        </form>
        or
        <section className="register-alternate">
          <div className="register-online">
            <span className="text-lg font-serif text-rose-700">G</span>
            <h6 className="text-md font-light text-rose-700">
              Continue with Google
            </h6>
          </div>
          <div className="register-online">
            <span className="text-lg font-serif text-rose-700">@</span>
            <h6 className="text-md font-light text-rose-700">
              Continue with Email
            </h6>
          </div>
          <div className="register-online">
            <span className="text-lg font-serif text-rose-700">F</span>
            <h6 className="text-md font-light text-rose-700">
              Continue with Facebook
            </h6>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
