import { container } from "tsyringe";
import { Request, Response } from "express";

import { registerLodgeSchema } from "@lib/zodShchemas/lodge";
import { RegisterLodge } from "@use-cases/lodge/register-lodge";

export class RegisterLodgeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const registerLodgeUseCase = container.resolve(RegisterLodge);
    
    const file = req.file?.filename;
    const validateBody = {
      ...req.body,
      logo: file
    }

    const newLodge = registerLodgeSchema.parse(validateBody);
    
    await registerLodgeUseCase.execute(newLodge);
    
    return res.status(201).json()
  }
}