import { Router } from "express";
import { lodgeRoutes } from "./lodge";
import { roleRoutes } from "./role";

export const routes = Router();

routes.use('/lodge', lodgeRoutes);
routes.use('/roles', roleRoutes);