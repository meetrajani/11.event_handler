import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const handleLogin = () => {
    // Logic for handling login
  };

  const handleForgotPassword = () => {
    // Logic for handling forgot password
  };

  return (
    <div className="body bg-dark">
      <div className="container-fluid position-relative d-flex p-0">
        <div className="container-fluid">
          <div
            className="row h-100 align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
              <div className="bg-secondary rounded p-4 p-sm-5 my-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h3 className="text-light">Sign In</h3>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <a
                    href="#"
                    className="Forgotlogin text-light"
                    onClick={handleForgotPassword}
                  >
                    Forgot Password
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleLogin}
                  className="btn btn-primary py-3 w-100 mb-4"
                >
                  Sign In
                </button>
                <p className="text-center mb-0">
                  Don't have an Account?{" "}
                  <Link className="Signuppagebutton text-light" to={"/"}>
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
