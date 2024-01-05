import { registerUserSchema } from "@lib/zodSchemas/user";
import { RegisterUserUseCase } from "@use-cases/user/register-user-use-case";
import { Request, Response } from "express";
import { container } from "tsyringe";



export class RegisterUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const registerUserUseCase = container.resolve(RegisterUserUseCase);
    const newUser = registerUserSchema.parse(req.body);

    const result = await registerUserUseCase.execute(newUser);

    return res.status(201).json(result);
  }
}