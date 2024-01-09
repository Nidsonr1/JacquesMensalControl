import { ListLodgesController } from "@controllers/lodge/list-lodges-controller";
import { RegisterLodgeController } from "@controllers/lodge/register-lodge-controller";
import { Router } from "express";

import { storage } from "middlewares/upload";
import multer from "multer";


export const lodgesRoutes = Router();
const uploadFile = multer({
  storage: storage
})

const registerLodgeController = new RegisterLodgeController()
const listLodgeController = new ListLodgesController()

lodgesRoutes.post('/', uploadFile.single('file'), registerLodgeController.handle);
lodgesRoutes.get('/', listLodgeController.handle);