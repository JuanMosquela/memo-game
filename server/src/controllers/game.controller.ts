import { Request, Response } from "express";
import pool from "../config/postgress.config";
import RequestUserId from "../types/types";

const saveGame = async (req: RequestUserId, res: Response) => {
  try {
    const id = req.userId;
    console.log(id);

    const { points, total_moves } = req.body;

    const game_saved = await pool.query(
      "INSERT INTO stats (points, total_moves, stats_id) VALUES ($1, $2, $3)",
      [points, total_moves, id]
    );
    res.status(200).json({ msg: "progress saved succesfully", game_saved });
  } catch (error) {
    res.status(400).send(error);
  }
  return;
};

const getAllUsersGameStats = async (req: Request, res: Response) => {
  try {
    const user_stats = await pool.query(
      "SELECT * FROM users INNER JOIN stats ON users.id = stats.stats_id ORDER BY points DESC"
    );

    if (!user_stats) {
      return res.status(404).send({ msg: "Bad request" });
    }

    if (!user_stats.rows) {
      return res.status(401).send({ msg: "No players histoy found " });
    }

    res.status(201).send(user_stats.rows);
  } catch (error) {
    res.status(501).send(error);
  }
};

export { saveGame, getAllUsersGameStats };
