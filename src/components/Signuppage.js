import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const SignupPage = () => {
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Logic for handling sign up
  };

  const handleLogin = () => {
    // Logic for handling login
  };

  const handleForgotPassword = () => {
    // Logic for handling forgot password
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const url = "http://localhost:3030/studentdata";

  const [data, setData] = useState({
    Username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // const { } = data;
    
  //   if (password !== confirmPassword) {
  //     alert('Password and Confirm Password do not match.');
  //     return;
  //   }
    
  //   // Now you can submit the form or perform other actions.
  //   // You may want to send the data to an API, for example.
  //   console.log('Form Data:', data);
  // };
  console.log(data)

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!data.Username || !data.email) {
      console.log("Please fill in all fields");
      return;
    }

    console.log({ data });

    axios
      .post(url, data)
      .then((res) => {
        console.log("Data sent successfully:", res.data);
        setData({
          Username: "",
          email: "",
        });
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  const [studentdata, setStudentdata] = useState([]);
  const getdata = async () => {
    try {
      const responce = await axios.get(url);
      setStudentdata(responce.data);
    } catch (err) {
      console.log(err);
    }
  };

  // const deleteUser = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:3030/studentdata/${id}`);
  //     console.log("post is deleted");
  //     setStudentdata(
  //       studentdata.filter((studentdata) => studentdata.id !== id)
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getdata();
  // }, [data]);

  return (
    <div className="body bg-dark">
      <div className="container-fluid position-relative d-flex p-0">
        <div className="container-fluid">
          <div
            className="row h-100 align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
              <div onSubmit={submitHandler} className="bg-secondary rounded p-4 p-sm-5 my-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h3 className="text-light">Sign Up</h3>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    name="Username"
                    placeholder="Name"
                    onChange={changeHandler}
                    value={data.Username}
                  />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="name@example.com"
                    name="email"
                    onChange={changeHandler}
                    value={data.email}
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={changeHandler}
                    value={data.password}
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={changeHandler}
                    value={data.confirmPassword}
                  />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <button
                  type="button"
                  // onClick={handleSignUp}
                  className="btn btn-primary py-3 w-100 mb-4"
                >
                  Sign Up
                </button>
                <p className="text-center mb-0">
                  Already have an Account?{" "}
                  <Link className="singupbutton text-light" to={"Signin/"}>
                    Sign In
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

export default SignupPage;
