import * as yup from "yup";

export const loginSchemas = yup.object().shape({
  usernameOrEmail: yup.string().required("This field is requiered"),
  password: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is requiered"),
});
