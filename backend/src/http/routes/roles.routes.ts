import { RegisterRoleController } from "@controllers/role/register-role-controller";
import { Router } from "express";



export const rolesRoutes = Router();

const registerRolesController = new RegisterRoleController()

rolesRoutes.post('/', registerRolesController.handle)