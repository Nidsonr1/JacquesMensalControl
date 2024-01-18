import { LoginUserController } from "@controllers/user/login-user-controller";
import { RegisterUserController } from "@controllers/user/register-user-controller";
import { Router } from "express";



export const userRoutes = Router();

const registerUserController = new RegisterUserController()
const loginUserController = new LoginUserController()

userRoutes.post('/register', registerUserController.handle);
userRoutes.post('/login', loginUserController.handle);