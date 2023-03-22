import express from "express";
import cors from "cors";
import "dotenv/config";

import authRouter from "./routes/auth.route";
import gameRouter from "./routes/game.route";
import fileUpload from "express-fileupload";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    createParentPath: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/game", gameRouter);

app.listen(PORT, () => {
  try {
    console.log(`Servidor escuchadno al puerto ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
