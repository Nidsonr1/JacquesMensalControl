import { RegisterRole } from "@use-cases/role/register-role";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { z } from "zod";



export class RegisterRoleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const registerRoleUseCase = container.resolve(RegisterRole);

    const registerRoleSchema = z.object({
      name: z.string()
    });

    const newRole = registerRoleSchema.parse(req.body);

    await registerRoleUseCase.execute(newRole);

    return res.status(201).json();

  }
}