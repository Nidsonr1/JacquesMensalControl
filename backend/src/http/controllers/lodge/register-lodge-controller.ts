import { container } from "tsyringe";
import { Request, Response } from "express";

import { registerLodgeSchema } from "@lib/zodSchemas/lodge";
import { RegisterLodgeUseCase } from "@use-cases/lodge/register-lodge-use-case";

export class RegisterLodgeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const file = req.file?.filename;
    const registerLodgeUseCase = container.resolve(RegisterLodgeUseCase);

    const validationBody = {
      ...req.body,
      logo: file
    }

    const lodgeRegister = registerLodgeSchema.parse(validationBody);

    await registerLodgeUseCase.execute(lodgeRegister)

    return res.status(201).json({
      message: 'Loja criada com sucesso!'
    });
  }
}