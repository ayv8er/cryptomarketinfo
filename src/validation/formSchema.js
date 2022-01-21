import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const formSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("must be a valid email address")
    .max(60, "email address is too long")
    .required("email is required"),
  password: yup.string().password().required(),
});

export default formSchema;
