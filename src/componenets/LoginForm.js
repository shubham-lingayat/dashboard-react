import { useState, React } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
          Email Address
          <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          name="email"
          className="bg-slate-800 rounded-[0.5rem] text-slate-100 w-full p-[12px]"
        />
      </label>

      <label className="w-full relative">
        <p className="text-slate-100 mb-1 leading-[1.375rem] ">
          Password
          <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
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
        <Link to="#">
          <p className="text-xs mt-1 text-blue-500 max-w-max ml-auto">
            Forgot Password
          </p>
        </Link>
      </label>

      <button className="bg-yellow-500 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-6">
        LogIn
      </button>
    </form>
  );
}
export default LoginForm;
