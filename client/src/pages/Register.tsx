import { useFormik } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registerSchemas } from "../schemas/registerSchemas";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { useSingUpMutation } from "../redux/api/authApi";
import { selectAuth } from "../redux/slices/authSlice";

const Register = () => {
  const [visible, setVisible] = useState(false);
  const [file, setFile] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useSelector(selectAuth);
  const from = location.state?.from?.pathname || "/";

  const [signUp, { data, error, isLoading }] = useSingUpMutation();

  useEffect(() => {
    console.log(error);
    if (data?.user) {
      navigate("/login");
    }

    // if (error?.status === 401) {
    //   toast.error(error?.data?.msg);
    // }
  }, [data, error]);

  const onSubmit = async () => {
    try {
      const formData = new FormData();

      console.log(values);

      for (const value of Object.entries(values)) {
        console.log(value[0], value[1]);
        formData.append(value[0], value[1]);
      }

      if (file) {
        formData.append("file", file);
      }

      await signUp(formData);
    } catch (error) {
      console.log(error);
      //   toast.error(`${error}`, { position: "top-right" });
    } finally {
      resetForm();
    }
  };

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
    resetForm,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchemas,
    onSubmit,
  });

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh]   bg-gray">
      <form
        className="w-[400px] bg-dark py-6 px-5  relative"
        method="post"
        onSubmit={handleSubmit}
      >
        <Link
          className="block  text-center py-1  font-bold uppercase text-sm md:text-md lg:text-3xl text-black mb-10 "
          to="/"
        >
          <img className="mb-6" src={logo} alt="" />
        </Link>
        <h2 className="text-letter text-2xl mb-8 font-semibold">
          Create an account
        </h2>
        <div className="relative mb-4 min-h-[60px]">
          <input type="file" onChange={handleFile} />
          <input
            className="w-full py-1 text-md outline-none bg-dark text-letter rounded-md p-2 border-2 border-letter border-b-2 "
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            type="text"
            name="username"
            placeholder="UserName"
          />
          {errors.username && touched.username && (
            <p className="pt-2 text-letter text-sm font-semibold">
              {errors.username}
            </p>
          )}
        </div>
        <div className="relative mb-4 min-h-[60px]">
          <input
            className="w-full py-1 text-md outline-none bg-dark  text-letter rounded-md p-2 border-2 border-letter border-b-2  "
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            type="text"
            name="email"
            placeholder="Email Adress"
          />
          {errors.email && touched.email && (
            <p className="pt-2 text-letter text-sm font-semibold">
              {errors.email}
            </p>
          )}
        </div>
        <div className="relative mb-4 min-h-[60px]">
          <input
            className="w-full py-1 text-md outline-none bg-dark  text-letter rounded-md p-2 border-2 border-letter border-b-2 "
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            type={visible ? "text" : "password"}
            name="password"
            placeholder="Password"
          />
          {visible ? (
            <AiFillEyeInvisible
              className="absolute right-[15px] top-[10%] text-xl text-letter"
              onClick={() => setVisible(!visible)}
            />
          ) : (
            <AiFillEye
              className="absolute right-[15px] top-[10%] text-xl text-letter"
              onClick={() => setVisible(!visible)}
            />
          )}
          {errors.password && touched.password && (
            <p className="pt-2 text-letter text-sm font-semibold">
              {errors.password}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bloc flex items-center justify-center w-full h-12 bg-green hover:bg-greenhover text-white hover:text-dark duration-150 rounded-md py-2 font-bold  "
        >
          {isLoading ? (
            <CircularProgress
              size="1.5rem"
              sx={{ color: "rgba(255,255,255)" }}
            />
          ) : (
            <span className="text-sm uppercase">Register</span>
          )}
        </button>
        <div className=" pt-10 text-end ">
          <p className="   text-letter text-md font-thin pb-2">
            Already have an Account?
            <br />
            <Link className="text-green text-xl font-bold" to="/login">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Register;
