import multer from "multer";
import { Router } from "express";

import { storage } from "@lib/upload";
import { ListLodgeController } from "@controllers/lodge/list-lodge-controller";
import { RegisterLodgeController } from "@controllers/lodge/register-lodge-controller";

const listLodgeController = new ListLodgeController();
const registerLodgeController = new RegisterLodgeController();

export const lodgeRoutes = Router();
const uploadFile = multer({ storage: storage });

lodgeRoutes.post(
  '/', 
  uploadFile.single('file'),
  registerLodgeController.handle
);

lodgeRoutes.get('/', listLodgeController.handle);