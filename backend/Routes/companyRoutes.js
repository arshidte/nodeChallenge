import express from "express";
const router = express.Router();

import { getCompany, searchCompany } from '../Controllers/companyControllers.js';
import { protect } from "../Middleware/authMiddleware.js";

router.route("/").get(protect, getCompany);
router.route("/search").get(protect, searchCompany);

export default router;