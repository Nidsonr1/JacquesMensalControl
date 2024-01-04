import { RegisterRoleController } from "@controllers/role/register-role-controller";
import { Router } from "express";

export const roleRoutes = Router();

const registerRoleController = new RegisterRoleController();

roleRoutes.post('/', registerRoleController.handle);