import React, { useState } from "react";
import { Link } from "react-router-dom";
import { emailValidation } from "../../utils/validations";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Clear password error when input changes
    if (name === "password" || name === "cpassword") {
      setPasswordError("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const togglecPasswordVisibility = () => {
    setShowcPassword((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, cpassword } = formData;

    // Perform email validation
    const errors = emailValidation(email);

    if (password !== cpassword) {
      // Set password error when passwords don't match
      setPasswordError("Passwords do not match");
    } else if (Object.keys(errors).length === 0) {
      // No errors, submit form
      console.log(formData);

      // Clear form data
      setFormData({ email: "", password: "", cpassword: "" });

      // Clear email and password error states
      setEmailError("");
      setPasswordError("");
    } else {
      // Update email error state
      setEmailError(errors.email);
    }
  };

  return (
    <>
      <div className="flex flex-col px-4 max-w-lg mx-auto w-full py-4 my-8 justify-center">
        <h1 className="text-xl mb-2">Register</h1>
        <h1 className="text-[1.35rem] text-slate-400">
          Do you already have an account ?{" "}
          <Link
            to="/login"
            className="link-animate text-black before:bg-black before:h-[1.5px] pb-1 px-[2px]"
          >
            Login
          </Link>
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col py-4 pt-8">
          <span
            className={`border-2 ${emailError === "" ? "" : "border-red-400"}`}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="px-3 py-2 text-base tracking-wider outline-none text-slate-500 w-full"
            />
          </span>
          {emailError && (
            <span className="text-red-400 text-xs tracking-wider">
              {emailError}
            </span>
          )}
          <span className="border-2 flex justify-between items-center mt-4">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="px-3 py-2 text-base tracking-wider outline-none text-slate-500 w-full"
            />
            <span
              className="cursor-pointer pr-3 duration-200"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </span>
          </span>
          <span className="border-2 flex justify-between items-center mt-4">
            <input
              type={showcPassword ? "text" : "password"}
              name="cpassword"
              placeholder="Confirm Password"
              value={formData.cpassword}
              onChange={handleInputChange}
              className="px-3 py-2 text-base tracking-wider outline-none text-slate-500 w-full"
            />
            <span
              className="cursor-pointer pr-3 duration-200"
              onClick={togglecPasswordVisibility}
            >
              {showcPassword ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </span>
          </span>
          {passwordError && (
            <span className="text-red-400 text-xs tracking-wider">
              {passwordError}
            </span>
          )}
          <div className="mt-4">
            <button type="submit" className="px-12 py-3 bg-black text-white tracking-wider text-sm duration-200 hover:scale-105">
              REGISTER
            </button>
            <Link
              to="/"
              className="link-animate text-slate-600 before:bg-slate-300 before:h-[1.5px] pb-1 px-[2px] ml-12"
            >
              Return to Store
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
