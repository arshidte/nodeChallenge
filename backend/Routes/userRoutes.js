import express from "express";
const router = express.Router();

import { authUser } from "../Controllers/userControllers.js";


router.post("/login", authUser);

export default router;