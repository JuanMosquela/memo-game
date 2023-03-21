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
import { useDispatch, useSelector } from "react-redux";
import { selectGame, setGameFinished } from "../redux/slices/gameSlice";
import error from "../assets/error.png";
import success from "../assets/success.png";
import Points from "./Points";
import { Link } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { useSaveGameMutation } from "../redux/api/gameApi";
//   import { useNavigate, useParams } from "react-router-dom";
//   import { toast } from "react-toastify";
//   import { selectAuth } from "../redux/slices/authSlice";
//   import { useSelector } from "react-redux";
//   import { useCreateTodoMutation } from "../redux/api/todosApi";
//   import { FiEdit } from "react-icons/fi";

const ModalComponent = () => {
  // const auth = useSelector(selectAuth);

  const [title, setTitle] = useState("");

  const { finished, status, points, moves } = useSelector(selectGame);

  const dispatch = useDispatch();

  // const navigate = useNavigate();

  // const [createTodo, { data, isLoading, error }] = useCreateTodoMutation();

  const [saveGame, { data, error, isLoading }] = useSaveGameMutation();

  console.log(data);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#FFF",
    borderRadius: "12px",
    p: 4,
  };

  //   const handleOpen = () => {
  //     //   if (!auth?.token) {
  //     //     toast.error("Debes estar autenticado");
  //     //     navigate("/login");
  //     //     return;
  //     //   }
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      // createTodo({
      //   email: auth.email,
      //   title,
      //   progress: 10,
      //   date: new Date(),
      // });
      saveGame({
        points,
        total_moves: moves,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
      <Modal
        open={finished}
        // onClose={() => dispatchEvent}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "340px",

            transform: "translate(-50%, -50%)",
            bgcolor: "#041A08",
            borderRadius: "10px",
            outline: "none",
          }}
        >
          <img
            className=" absolute top-[-40px] left-0 right-0 w-[200px] h-[200px] object-contain shadow-md rounded-full block m-auto    "
            src={status == "timeout" ? error : success}
            alt=""
          />
          <form className="block w-full mt-[150px] p-6" onSubmit={handleSubmit}>
            <h3 className=" text-greenhover text-2xl font-semibold mb-4">
              {status == "timeout"
                ? "Sorry, your time run out"
                : "Wubba lubba dub dub"}
            </h3>
            <p className="text-md  font-semibold text-letter mb-6">
              {status == "timeout"
                ? "There's an infinite number of realities, Morty. And in a few dozen of those you got lucky and won the game."
                : " Congratulations, you won the Rick & Morty Memo Game. Would you like to save your progress?"}
            </p>

            <ul className="mb-4 space-y-2 ">
              <li className=" bg-letter rounded-md px-4 flex justify-between items-center w-full">
                <p className="font-semibold ">Total Points:</p>
                <Points bgColor={false} />
              </li>
              <li className=" bg-letter rounded-md px-4 flex justify-between items-center w-full">
                <p className="font-semibold ">Total Moves:</p>
                <div className="flex justify-center items-center gap-4 w-[80px] h-[40px]">
                  <FiUsers />
                  {moves}
                </div>
              </li>
            </ul>

            <div className="flex  w-full items-center gap-2 ">
              <button
                onClick={() => dispatch(setGameFinished(false))}
                type="button"
                className="flex-1 rounded-md bg-gray hover:bg-gray-400/90 text-white font-medium  text-sm md:w-[100px] w-full h-[40px] drop-shadow-lg semibold uppercase duration-150"
              >
                <Link to="/">cancel</Link>
              </button>
              <button
                type="submit"
                className="flex-1 rounded-md bg-green hover:bg-greenhover text-letter font-medium  text-sm md:w-[100px] w-full h-[40px] drop-shadow-lg semibold uppercase duration-150"
              >
                {isLoading ? (
                  <>
                    <CircularProgress
                      sx={{ color: "rgba(255,255,255,.8)" }}
                      size="1.5rem"
                    />
                  </>
                ) : (
                  <span className="text-sm uppercase">Save</span>
                )}
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};
export default ModalComponent;
