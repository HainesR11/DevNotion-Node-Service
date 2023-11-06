import { OTP, createUser, generateToken } from "../controllers/authentication";
import { Router } from "express";
import call from "../utils/MakeCall";

const router = Router();

router.route("/").get(call(generateToken)).post(call(createUser));
router.route("/forgotPassword").get(call(OTP))

export default router;
