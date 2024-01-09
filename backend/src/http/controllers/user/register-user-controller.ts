import { registerUserSchema } from "@lib/zodSchemas/user";
import { ListRoleUseCase } from "@use-cases/role/list-role";
import { RegisterUserUseCase } from "@use-cases/user/register-user-use-case";
import { Request, Response } from "express";
import { container } from "tsyringe";



export class RegisterUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    let roleId

    let validateBody;
    const registerUserUseCase = container.resolve(RegisterUserUseCase);
    const findRoleByName = container.resolve(ListRoleUseCase);
    
    if(!req.body.roleId) {
      roleId = await findRoleByName.execute('user');

      validateBody = {
        ...req.body,
        roleId: roleId?.id
      }
    } else {
      validateBody = req.body
    }

    const newUser = registerUserSchema.parse(validateBody);

    const result = await registerUserUseCase.execute(newUser);

    return res.status(201).json(result);
  }
}