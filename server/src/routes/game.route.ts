import { Router } from "express";
import { getAllUsersGameStats, saveGame } from "../controllers/game.controller";

import verifyToken from "../middlewares/verify-token";

const router = Router();

router.post("/save", verifyToken, saveGame);
router.get("/stats", verifyToken, getAllUsersGameStats);

export default router;
