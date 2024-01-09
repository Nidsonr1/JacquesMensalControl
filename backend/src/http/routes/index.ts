import { Router } from "express";
import { lodgeRoutes } from "./lodge.routes";
import { roleRoutes } from "./role.routes";
import { userRoutes } from "./user.routes";

export const routes = Router();

routes.use('/lodge', lodgeRoutes);
routes.use('/roles', roleRoutes);
routes.use('/users', userRoutes);