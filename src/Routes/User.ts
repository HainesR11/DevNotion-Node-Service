import { Router } from "express";
import call from "../utils/MakeCall";
import { updateUser } from "../controllers/User/User";

const router = Router();

router.patch('/:id', call(updateUser))

export default router