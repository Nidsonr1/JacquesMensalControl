import { Router } from "express";

import { can } from "middlewares/permission";
import { EnsureAuthenticated } from "middlewares/ensure-authenticated";

import { ListRolesController } from "@controllers/role/list-roles-controller";
import { RegisterRoleController } from "@controllers/role/register-role-controller";

export const rolesRoutes = Router();

const registerRolesController = new RegisterRoleController()
const listRolesController = new ListRolesController()


rolesRoutes.post(
  '/register',
  can(['admin']), 
  EnsureAuthenticated,
  registerRolesController.handle
);
rolesRoutes.get(
  '/list',
  EnsureAuthenticated,
  can(['admin', 'tesourer']), 
  listRolesController.handle
);