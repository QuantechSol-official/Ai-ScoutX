import * as yup from 'yup';

// Define the validation schema using Yup
export const schema = yup.object().shape({
  email: yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  
  password: yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: yup.string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
