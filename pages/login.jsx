"use client";

import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("jh");
  const [password, setPassword] = useState("hjh");
  const [data, setData] = useState([]);
  const userExsits = Cookies.get("user");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("resss");
    try {
      setDisabled(true);
      console.log("resss");

      const res = await axios.post(`/api/user/route`, {
        email,
        password,
      });
      setData(res?.data?.msz);
      console.log("resss", res);
      if (res?.data) {
        if (res?.data?.success) {
          Cookies.set("user", res.data.token, { expires: 1 });

          router.back("/");
        }
        alert(res.data.msg);
      }
      setDisabled(false);
    } catch (error) {
      setDisabled(false);
      alert(error?.response.data?.msg);
    }
  };

  const handleSignup = async (e) => {
    try {
      setDisabled(true);
      e.preventDefault();
      const res = await axios.post(`/api/user/signup`, {
        name,
        email,
        password,
      });
      if (res?.data) {
        if (res?.data?.success) {
          Cookies.set("user", res.data.token, { expires: 1 });

          router.back();
        }
        console.log("printing signup responce", res?.data);
        alert(res.data.message);
      }
      setDisabled(false);
    } catch (error) {
      setDisabled(false);
      alert(error.response.data.message);
      console.log("printing signup error", error.response.data.message);
    }
  };

  return (
    <div className=" relative flex justify-center items-center bg-login-backgroundImage bg-no-repeat bg-cover min-h-screen ">
      <Head>
        <title>Westay : Login</title>
      </Head>
      <div className="absolute top-5 gap-5 flex justify-center items-center left-[8rem]">
        <Link href="/" className=" text-4xl font-bold">
          WEstay
        </Link>
        <p className=" mt-2 text-white">
          Hotels and homes across 800 cities, 24+ countries
        </p>
      </div>
      <div className=" flex  justify-around items-center w-full lg:w-[90%]">
        <div className=" text-white font-bold w-[40%]">
          <h1 className=" text-4xl ">There’s a smarter way to OYO around</h1>
          <p>
            Sign up with your phone number and get exclusive access to discounts
            and savings on OYO stays and with our many travel partners.
          </p>
        </div>
        <form
          onSubmit={login ? handleLogin : handleSignup}
          className=" border bg-white text-black w-[40%]  "
        >
          <p className=" bg-gradient-to-br from-red-700 to-red-200 h-8 px-6 text-white">
            Sign up & Get ₹500 OYO Money
          </p>
          <div className=" font-bold px-6 my-7">
            <h1 className=" text-3xl  my-7">Login / SignUp</h1>
            <p className="  font-bold my-5  ">
              Please Enter Your Details To Continue
            </p>
            {!login && (
              <div className="relative">
                <p className="absolute text-xs  bg-white top-[-8px] left-5 text-red-500 px-2 ">
                  Your Name
                </p>
                <input
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="true"
                  className=" border outline-none p-2  w-[90%]"
                  type="text"
                  name="userName"
                  id="userName"
                />
              </div>
            )}

            <div className="relative my-5">
              <p className="absolute text-xs  bg-white top-[-8px] left-5 text-red-500 px-2 ">
                Your email
              </p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className=" border outline-none p-2  w-[90%]"
                // required
                autoComplete="true"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="relative">
              <p className="absolute text-xs  bg-white top-[-8px] left-5 text-red-500 px-2 ">
                Your Password
              </p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="true"
                className=" border outline-none p-2  w-[90%]"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button
              type="submit"
              className={
                `${disabled? " bg-gray-700 hover:bg-gray-700" : "bg-green-600"} w-[90%] my-4 py-2 transition-all duration-200   hover:bg-green-700 text-white`
              }
            >
              {login ? "Login" : "SignUp"}
            </button>
            {login ? (
              <h1 className=" my-2">
                Not a Existing Member ?{" "}
                <span
                  onClick={() => {
                    setLogin(false);
                  }}
                  className=" cursor-pointer text-red-500"
                >
                  SignUp
                </span>{" "}
              </h1>
            ) : (
              <h1 className=" my-2">
                Already a Member ?
                <span
                  onClick={() => {
                    setLogin(true);
                  }}
                  className=" cursor-pointer text-red-500"
                >
                  Login
                </span>{" "}
              </h1>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
