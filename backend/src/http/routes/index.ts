import { Router } from "express";
import { rolesRoutes } from "./roles.routes";
import { lodgesRoutes } from "./lodges.routes";
import { authRoutes } from "./auth.routes";

export const routes = Router();

routes.use('/roles', rolesRoutes);
routes.use('/lodges', lodgesRoutes);
routes.use('/auth', authRoutes);