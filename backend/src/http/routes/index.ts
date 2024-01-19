import { Router } from "express";

import { authRoutes } from "./auth.routes";
import { rolesRoutes } from "./roles.routes";
import { lodgesRoutes } from "./lodges.routes";

export const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/roles', rolesRoutes);
routes.use('/lodges', lodgesRoutes);