import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { useState } from "react";
import Message from "../components/Message";
import { PasswordChecker } from "../utilities/PasswordChecker.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const isPasswordValid = PasswordChecker(password);
    console.log(isPasswordValid);
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
      <div className="invisible-scrollbar login-form">
        <h5 className="text-rose-600">LOGIN</h5>
        <h6 className="text-md font-light text-red-800 ">Welcome to Airbnv</h6>
        <form
          onSubmit={onSubmit}
          action=""
          method="POST"
          className="mt-4 py-2 w-[90%]"
        >
          <section className="login-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              className="login-input-style"
              onChange={(e) => setEmail(e.target.value)}
            />
            {email ? (
              <Message color={"green"}>Looks good</Message>
            ) : (
              <Message color={"red"}>Email cannot be blank</Message>
            )}
          </section>
          <section className="login-input">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              className="login-input-style"
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
              onChange={(e) => setPassword(e.target.value)}
            />
            {password ? (
              <Message color={"green"}>Password looks good</Message>
            ) : (
              <Message color={"red"}>Password cannot be blank</Message>
            )}
          </section>
          <section className="w-full flex items-center justify-center">
            <button className="login-btn">LOGIN</button>
          </section>
          <p className="auth">
            Don&apos;t have an account?&nbsp;
            <Link className="auth-link" to={"/register"}>
              Register
            </Link>
          </p>
        </form>
        or
        <section className="login-alternate">
          <div className="login-online">
            <span className="text-lg font-serif text-rose-700">G</span>
            <h6 className="text-md font-light text-rose-700">
              Continue with Google
            </h6>
          </div>
          <div className="login-online">
            <span className="text-lg font-serif text-rose-700">@</span>
            <h6 className="text-md font-light text-rose-700">
              Continue with Email
            </h6>
          </div>
          <div className="login-online">
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

export default Login;
