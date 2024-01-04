import { ListLodgeController } from "@controllers/lodge/list-lodge-controller";
import { RegisterLodgeController } from "@controllers/lodge/register-lodge-controller";
import { Router } from "express";

const registerLodgeController = new RegisterLodgeController();
const listLodgeController = new ListLodgeController();

export const lodgeRoutes = Router();

lodgeRoutes.post('/', registerLodgeController.handle);
lodgeRoutes.get('/', listLodgeController.handle);