import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUserAction } from "../redux/Slice/UserSlice";
import { toast } from "react-toastify";

// import { toast } from "react-toastify";

function Register() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const storeData = useSelector((store) => store?.users);
  const { msg } = storeData.registered;
  console.log();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.email === "" || user.username === "" || user.password === "") {
      return alert("Input fields cannot be empty!");
      //   console.log("Input fields cannot be empty!");
    } else {
      dispatch(registerUserAction(user));
      setUser({ ...user, email: "", username: "", password: "" });
    }

    // toast.error(msg);
    // toast.error(msg);
  };

  const handleMovie = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="flex justify-center bg-purple-400 ">
      <div className=" shadow bg-white p-6 w-80 my-40">
        <h2 className="text-center font-semibold pb-4"> Register</h2>
        <form className="flex  grap flex-col" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            value={user.email}
            onChange={handleMovie}
            className="border py-2 px-3 mb-2 rounded-xl border-orange-500"
          />
          <label>Username</label>
          <input
            type=""
            placeholder="enter your name"
            name="username"
            value={user.username}
            onChange={handleMovie}
            className="border py-2 px-3 mb-2 rounded-xl border-orange-500"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user.password}
            onChange={handleMovie}
            className="border py-2 px-3 rounded-xl border-orange-500"
          />
          <button
            type="submit"
            className="bg-black hover:bg-orange-300 rounded-xl text-white w-20 my-5 py-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
