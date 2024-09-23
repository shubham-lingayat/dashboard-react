import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SignupForm({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      toast.error("Password do not match");
      return;
    } else {
      setIsLoggedIn(true);
      toast.success("Account Created");
      const accountData = {
        ...formData,
      };
      const finalData = {
        ...accountData,
        accountType,
      };
      console.log("Form data printing");
      console.log(finalData);
      console.log("accountType : ", accountType);
      navigate("/dashboard");
    }
  }

  return (
    <div>
      <div className="flex bg-slate-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-slate-900 text-slate-100"
              : "bg-transparent text-slate-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => {
            setAccountType("student");
            console.log("Account Type is", accountType);
          }}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "Instructor"
              ? "bg-slate-900 text-slate-100"
              : "bg-transparent text-slate-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => {
            setAccountType("Instructor");
            console.log("Account Type is", accountType);
          }}
        >
          Instructor
        </button>
      </div>
      <div>
        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full gap-y-4 mt-6"
        >
          <div className="flex justify-between gap-x-4 ">
            <label className="w-full">
              <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
                First Name <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="text"
                name="firstname"
                onChange={changeHandler}
                placeholder="Enter First Name"
                value={formData.firstname}
                className="bg-slate-800 rounded-[0.5rem] text-slate-100 w-full p-[12px]"
              />
            </label>
            <label className="w-full">
              <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
                Last Name <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="text"
                name="lastname"
                onChange={changeHandler}
                placeholder="Enter Last Name"
                value={formData.lastname}
                className="bg-slate-800 rounded-[0.5rem] text-slate-100 w-full p-[12px]"
              />
            </label>
          </div>
          <label className="w-full">
            <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Address"
              value={formData.email}
              className="bg-slate-800 rounded-[0.5rem] text-slate-100 w-full p-[12px]"
            />
          </label>
          <div className="flex justify-between gap-x-4">
            <label className="w-full relative">
              <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
                Create Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Password"
                value={formData.password}
                className="bg-slate-800 rounded-[0.5rem] text-slate-100 w-full p-[12px]"
              />
              <span
                className="absolute right-3 top-[38px] cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
            <label className="w-full relative">
              <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
                Confirm Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showPassword2 ? "text" : "password"}
                name="confirmpassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                value={formData.confirmpassword}
                className="bg-slate-800 rounded-[0.5rem] text-slate-100 w-full p-[12px]"
              />
              <span
                className="absolute right-3 top-[38px] cursor-pointer"
                onClick={() => setShowPassword2((prev) => !prev)}
              >
                {showPassword2 ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
          </div>
          <button className="bg-yellow-500 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-6">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
export default SignupForm;
