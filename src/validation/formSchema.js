import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("must be a valid email address")
    .max(60, "email address is too long")
    .required("email is required"),
  password: yup.string().password().required("password is required"),
});

const registerSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("must be a valid email address")
    .max(60, "email address is too long")
    .required("email is required"),
  password: yup.string().password().required("password is required"),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Password do not match"),
});

export { loginSchema, registerSchema };
