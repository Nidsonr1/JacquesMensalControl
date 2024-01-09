import { Router } from "express";
import { rolesRoutes } from "./roles.routes";



export const routes = Router();

routes.use('/roles', rolesRoutes);