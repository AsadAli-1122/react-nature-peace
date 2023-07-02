export const emailValidation = (email) => {
    const errors = {};
  
    // Check if email is empty
    if (!email.trim()) {
      errors.email = "Email is required";
    } else {
      // Check if email contains "@"
      const atIndex = email.indexOf("@");
      const dotIndex = email.lastIndexOf(".");
      if (atIndex === -1 || dotIndex === -1 || dotIndex < atIndex) {
        errors.email = "Invalid email format";
      }
    }
  
    return errors;
  };
  