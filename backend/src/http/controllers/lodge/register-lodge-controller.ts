import { container } from "tsyringe";
import { Request, Response } from "express";

import { registerLodgeSchema } from "@lib/zodSchemas/lodge";
import { RegisterLodgeUseCase } from "@use-cases/lodge/register-lodge-use-case";

export class RegisterLodgeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const registerLodgeUseCase = container.resolve(RegisterLodgeUseCase);
    const lodgeRegister = registerLodgeSchema.parse(req.body);

    await registerLodgeUseCase.execute(lodgeRegister)

    return res.status(201).send();
  }
}