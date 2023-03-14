import {
  Box,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
//   import { useNavigate, useParams } from "react-router-dom";
//   import { toast } from "react-toastify";
//   import { selectAuth } from "../redux/slices/authSlice";
//   import { useSelector } from "react-redux";
//   import { useCreateTodoMutation } from "../redux/api/todosApi";
//   import { FiEdit } from "react-icons/fi";

const SuccessModal = ({ gameFinished }: any) => {
  console.log(gameFinished);
  // const auth = useSelector(selectAuth);

  const [open, setOpen] = useState(gameFinished);

  const [title, setTitle] = useState("");

  // const navigate = useNavigate();

  // const [createTodo, { data, isLoading, error }] = useCreateTodoMutation();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#FFF",
    borderRadius: "12px",
    p: 4,
  };

  const handleOpen = () => {
    //   if (!auth?.token) {
    //     toast.error("Debes estar autenticado");
    //     navigate("/login");
    //     return;
    //   }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   try {
  //     createTodo({
  //       email: auth.email,
  //       title,
  //       progress: 10,
  //       date: new Date(),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  // //   if (!isLoading) {
  // //     setOpen(false);
  // //   }

  //   //   if (reviewData && !isLoading) {
  //   //     toast.success("Product reviewed");
  //   //   }

  //   //   if (error?.status === 501) {
  //   //     toast.error(`${error?.data?.msg}`);
  //   //   }
  // }, [error, data]);

  return (
    <>
      <Modal open={gameFinished} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: { md: "500px", sm: "70%", xs: "90%" },
            transform: "translate(-50%, -50%)",
            bgcolor: "#FFF",
            borderRadius: "10px",
            outline: "none",
            p: 4,
          }}
        >
          <form className="block w-full">
            <h3 className=" text-blue text-2xl font-semibold mb-4">
              Congratulations, You won the memogame
            </h3>
            <p className="text-sm  font-semibold text-slate-400">
              The game wants to save your progress, do you want to continue ?
            </p>
            <textarea
              className="bg-gray p-2 text-sm w-full outline-none mt-2 resize-none rounded-md   "
              name="textarea"
              rows={7}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className=" bg-blue hover:bg-blue/90 text-white font-medium  text-md md:w-[100px] w-full h-[40px] drop-shadow-lg "
              >
                ok
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};
export default SuccessModal;
