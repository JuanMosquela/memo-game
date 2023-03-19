import { Request, Response } from "express";
import bcrypt from "bcrypt";
import pool from "../config/postgress.config";
import generateToken from "../helpers/generate-token";

const register = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    console.log(first_name);

    const salt = bcrypt.genSaltSync(10);
    const hashed_password = bcrypt.hashSync(password, salt);

    try {
      const user = await pool.query(
        "INSERT INTO users (first_name, last_name, email, hashed_password) VALUES($1, $2, $3, $4)",
        [first_name, last_name, email, hashed_password]
      );
      console.log(user);
      res.status(200).json({
        msg: "User registered succesfully",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ msg: "algo malo paso" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user: any = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rowCount === 0) {
      return res.status(404).send({ error: "User not found" });
    }

    // Compare password

    const check_password = await bcrypt.compare(
      password,
      user.rows[0].hashed_password
    );

    console.log(check_password);

    if (!check_password) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }

    const token = generateToken(user.id);

    res.status(200).json({
      msg: "user login succesfully",

      user: user.rows[0].first_name,
      email: user.rows[0].email,
      token,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export { register, login };
