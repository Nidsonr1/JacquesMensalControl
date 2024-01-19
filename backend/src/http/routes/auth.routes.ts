import { Router } from "express";

import { LoginUserController } from "@controllers/user/login-user-controller";
import { RegisterUserController } from "@controllers/user/register-user-controller";
import { EnsureAuthenticated } from "middlewares/ensure-authenticated";
import { can } from "middlewares/permission";

export const authRoutes = Router();

const registerUserController = new RegisterUserController()
const loginUserController = new LoginUserController()

authRoutes.post(
  '/register', 
  EnsureAuthenticated,
  can(['Admin', 'tesourer']),
  registerUserController.handle
);
authRoutes.post('/login', loginUserController.handle);