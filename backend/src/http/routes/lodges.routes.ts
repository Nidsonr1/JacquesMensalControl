import multer from "multer";
import { Router } from "express";

import { can } from "middlewares/permission";
import { storage } from "middlewares/upload";
import { EnsureAuthenticated } from "middlewares/ensure-authenticated";

import { ListLodgesController } from "@controllers/lodge/list-lodges-controller";
import { RegisterLodgeController } from "@controllers/lodge/register-lodge-controller";


export const lodgesRoutes = Router();
const uploadFile = multer({
  storage: storage
})

const registerLodgeController = new RegisterLodgeController()
const listLodgeController = new ListLodgesController()

lodgesRoutes.post(
  '/register', 
  EnsureAuthenticated,
  can(['admin']), 
  uploadFile.single('file'), 
  registerLodgeController.handle
);

lodgesRoutes.get('/list', listLodgeController.handle);