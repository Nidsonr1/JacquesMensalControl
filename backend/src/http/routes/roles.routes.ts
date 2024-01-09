import { Router } from "express";

import { ListRolesController } from "@controllers/role/list-roles-controller";
import { RegisterRoleController } from "@controllers/role/register-role-controller";

export const rolesRoutes = Router();

const registerRolesController = new RegisterRoleController()
const listRolesController = new ListRolesController()


rolesRoutes.post('/', registerRolesController.handle);
rolesRoutes.get('/', listRolesController.handle);