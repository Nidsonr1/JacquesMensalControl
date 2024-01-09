import { registerRoleSchema } from "@lib/zodSchemas/role";
import { RegisterRoleUseCase } from "@use-cases/role/register-role-use-case";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class RegisterRoleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const registerRoleUseCase = container.resolve(RegisterRoleUseCase);

    const newRole = registerRoleSchema.parse(req.body);
    await registerRoleUseCase.execute(newRole);

    return res.status(201).send();
  }
}