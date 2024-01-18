import { LoginUserController } from "@controllers/user/login-user-controller";
import { RegisterUserController } from "@controllers/user/register-user-controller";
import { Router } from "express";



export const authRoutes = Router();

const registerUserController = new RegisterUserController()
const loginUserController = new LoginUserController()

authRoutes.post('/register', registerUserController.handle);
authRoutes.post('/login', loginUserController.handle);