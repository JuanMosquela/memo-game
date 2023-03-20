import { CircularProgress } from "@mui/material";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { setCredentials } from "../redux/slices/authSliceRedux";

import { useFormik } from "formik";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { loginSchemas } from "../schemas/loginSchemas";
import logo from "../assets/logo.svg";
import { useSingInMutation } from "../redux/api/authApi";
import { selectAuth, setCredentials } from "../redux/slices/authSlice";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const auth = useSelector(selectAuth);

  const dispatch = useDispatch();

  const [signIn, { data, isLoading, error, isSuccess }] = useSingInMutation();

  console.log(data, error);

  const onSubmit = async () => {
    try {
      await signIn(values);
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data?.token) {
      dispatch(setCredentials(data));
    }
    // if (error) {
    //   toast.error(error?.data?.error);
    // }

    if (auth?.token) navigate(from);
  }, [isSuccess, error]);

  useEffect(() => {
    console.log(auth);
    if (auth.token) navigate(from);
  }, [auth]);

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        usernameOrEmail: "",
        password: "",
      },
      validationSchema: loginSchemas,
      onSubmit,
    });

  return (
    <div className="flex justify-center items-center min-h-[100vh] bg-gray  ">
      <div className="flex  rounded-lg overflow-hidden relative   shadow-md ">
        <form
          className="w-[400px] bg-dark py-6 px-5 "
          method="post"
          onSubmit={handleSubmit}
        >
          <Link
            className="block  text-center py-1  font-bold uppercase text-sm md:text-md lg:text-3xl text-black mb-10  "
            to="/"
          >
            <img className="mb-6" src={logo} alt="" />
          </Link>
          <h2 className="text-letter text-2xl mb-8 font-semibold">Sign In</h2>
          <div className="relative mb-4 min-h-[60px]">
            <input
              className="w-full py-1 text-md outline-none border-2 border-letter bg-dark text-letter rounded-md p-2  "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.usernameOrEmail}
              type="text"
              name="usernameOrEmail"
              placeholder="Username or Email"
            />
            {errors.usernameOrEmail && touched.usernameOrEmail && (
              <p className="pt-2 text-letter text-sm font-semibold">
                {errors.usernameOrEmail}
              </p>
            )}
          </div>
          <div className=" relative mb-4 min-h-[60px]">
            <input
              className=" w-full py-1 text-md outline-none border-2 border-letter bg-dark text-letter rounded-md p-2  "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              type={visible ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            {visible ? (
              <AiFillEyeInvisible
                className="absolute right-[15px] top-[10%] text-xl text-letter "
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
            className="bloc flex items-center justify-center w-full h-12 bg-green hover:bg-greenhover duration-150 text-white hover:text-dark rounded-md py-2 font-bold  "
          >
            {isLoading ? (
              <>
                <CircularProgress
                  sx={{ color: "rgba(255,255,255,.8)" }}
                  size="1.5rem"
                />
              </>
            ) : (
              <span className="text-sm uppercase">Login</span>
            )}
          </button>

          <div className=" pt-10 text-end ">
            <p className="   text-letter text-md font-thin pb-2">
              Need an Account?
              <br />
              <Link className="text-green text-xl font-bold" to="/register">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
