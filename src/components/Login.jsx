import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";

const Login = () => {
  const [passValue, setPassValue] = useState({
    password: "",
    showPassword: false,
  });

  const handlePasswordChange = (prop) => (event) => {
    setPassValue({ ...passValue, [prop]: event.target.value });
  };

  const handleClickShowPassword = () =>
    setPassValue({ ...passValue, showPassword: !passValue.showPassword });
  return (
    <div className="flex flex-col items-center justify-center relative h-screen w-full p-8">
      <div className="relative justify-center bg-slate-100 text-gray-900 rounded-xl shadow-lg mt-2 p-8 xl:w-[550px] h-fit">
        <form className="flex flex-col space-y-8">
          <div>
            <div className="p-4">
              <h1 className="text-4xl font-bold pb-5">Hello Again!</h1>
              <h1 className="text-3xl pb-5">
                Welcome back you've been missed!
              </h1>
            </div>

            <input
              type="text"
              name="user_name"
              placeholder="Enter username"
              className="ring-1 ring-white w-full h-16 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400"
              required
            ></input>
          </div>
          <div className="password_2 block relative">
            <div className="eye_div">
              <input
                placeholder="Password"
                className="ring-1 ring-white w-full h-16 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400"
                type={passValue.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                value={passValue.password}
              />
              <div
                className="icon_button absolute right-4 top-5"
                onClick={handleClickShowPassword}
              >
                {passValue.showPassword ? (
                  <AiOutlineEye className="h-6 font-thin" />
                ) : (
                  <AiOutlineEyeInvisible className="h-6 font-thin" />
                )}
              </div>
              <div className="flex justify-end mt-3">Recovery Password</div>
            </div>
          </div>

          <div className="xl:pb-6 pt-4">
            <button
              type="submit"
              className="inline-block w-full bg-red-400 text-xl text-slate-100 rounded-xl drop-shadow-[0_35px_35px_rgba(244,67,54,0.25)] px-6 py-6 hover:bg-red-500"
            >
              Sign In
            </button>
          </div>
        </form>
        <div class="flex items-center py-6">
          <div class="flex-grow h-px bg-gradient-to-l from-gray-400 to-white"></div>
          <div className="px-2 xl:py-6">Or continue with</div>
          <div class="flex-grow h-px bg-gradient-to-r from-gray-400 to-white"></div>
        </div>
        <div className="flex flex-cols-3 pb-10 xl:px-10 md:px-10 py-3 justify-center gap-10 md:gap-10 xl:gap-12">
          <button className="border-2 w-fit rounded-2xl border-white py-4 px-4 md:px-8 xl:px-8">
            <FcGoogle className="h-8 w-8 xl:h-10 xl:w-10" />
          </button>
          <button className="border-2 w-fit rounded-2xl border-white py-4 px-4 md:px-8 xl:px-8">
            <BsApple className="h-8 w-8 xl:h-10 xl:w-10" />
          </button>
          <button className="border-2 w-fit rounded-2xl border-white py-4 px-4 md:px-8 xl:px-8">
            <BsFacebook color="blue" className="h-8 w-8 xl:h-10 xl:w-10" />
          </button>
        </div>
        <div className="text-bold">
          Not a member?&nbsp;
          <a href="#" className="block-inline text-blue-600">
            Register now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
