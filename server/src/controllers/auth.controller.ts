import { Request, Response } from "express";
import bcrypt from "bcrypt";
import pool from "../config/postgress.config";
import generateToken from "../helpers/generate-token";
import { v4 as uuid_v4 } from "uuid";
import cloudinary from "../config/clodinary.config";

const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    let uploaded_file: any;

    if (req?.files?.file) {
      const { tempFilePath }: any = req.files.file;
      uploaded_file = await cloudinary.uploader.upload(tempFilePath, {
        folder: "memo_game/users",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashed_password = bcrypt.hashSync(password, salt);

    try {
      const user = await pool.query(
        "INSERT INTO users (username, picture,  email, hashed_password, id) VALUES($1, $2, $3 ,$4, $5 )",
        [
          username,
          uploaded_file && uploaded_file.secure_url,
          email,
          hashed_password,
          uuid_v4(),
        ]
      );

      res.status(200).json({
        msg: "User registered succesfully",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

type UserModel = {
  username: string;
  email: string;
  hashed_password: string;
  id: string;
};

const login = async (req: Request, res: Response) => {
  try {
    const { usernameOrEmail, password } = req.body;

    const user: any = await pool.query(
      "SELECT * FROM users WHERE email = $1 OR username = $1",
      [usernameOrEmail]
    );

    if (user.rowCount === 0) {
      return res.status(404).send({ error: "User not found" });
    }

    // Compare password

    const check_password = await bcrypt.compare(
      password,
      user.rows[0].hashed_password
    );

    if (!check_password) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }

    const token = await generateToken(user.rows[0].id);

    console.log(user.rows[0]);

    const { hashed_password, ...rest } = user.rows;

    res.status(200).json({
      msg: "user login succesfully",
      user: user.rows[0].username,
      email: user.rows[0].email,
      picture: user.rows[0].picture,
      token,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export { register, login };
