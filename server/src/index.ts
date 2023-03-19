import express from "express";
import cors from "cors";
import "dotenv/config";

import authRouter from "./routes/auth.route";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/auth", authRouter);

app.listen(PORT, () => {
  try {
    console.log(`Servidor escuchadno al puerto ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
