import React, { useState } from "react";
import { Link } from "react-router-dom";
import { emailValidation } from "../../utils/validations";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [emailError, setEmailError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { email } = formData;
  
    // Perform email validation
    const errors = emailValidation(email);
  
    if (Object.keys(errors).length === 0) {
      // No errors, submit form
      console.log(formData);
  
      // Clear form data
      setFormData({ email: "" });
  
      // Clear email error state
      setEmailError("");
    } else {
      // Update email error state
      setEmailError(errors.email);
    }
  };
  

  return (
    <>
      <div className="flex flex-col px-4 max-w-lg mx-auto w-full py-4 my-8">
        <h1 className="text-xl mb-2">Reset your Password</h1>
        <h1 className="text-sm text-black font-thin tracking-wide mt-4">We will send you an email to reset your password</h1>

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
              className={`px-3 py-2 text-base tracking-wider outline-none text-slate-500 w-full`}
            />
          </span>
          {emailError && (
            <span className="text-red-400 text-xs tracking-wider">
              {emailError}
            </span>
          )}
          <div className="mt-10">
            <button type="submit" className="px-12 py-3 bg-black text-white tracking-wider text-sm duration-200 hover:scale-105">
              SUBMIT
            </button>
            <Link
              to="/login"
              className="link-animate text-slate-600 before:bg-slate-300 before:h-[1.5px] pb-1 px-[2px] ml-12"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
