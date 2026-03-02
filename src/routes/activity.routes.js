import express from "express";
import { collect } from "../controllers/activity.controller.js";

const router=express.Router()
router.post("/", collect);

 export default router;
