import { NotFound } from "@lib/api-errors";
import { registerUserSchema } from "@lib/zodShchemas/user";
import { FindRoleByName } from "@use-cases/role/find-by-name";
import { ListRoles } from "@use-cases/role/list-roles";
import { RegisterUser } from "@use-cases/user/register-user";
import { Request, Response } from "express";
import { container } from "tsyringe";



export class RegisterUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const findRoleUseCase = container.resolve(FindRoleByName);
    const registerUserUseCase = container.resolve(RegisterUser);
    let validateBody;


    if (!req.body.roleId) {
      const role = await findRoleUseCase.execute('user');
      
      if (!role) throw new NotFound('Role');
    
      validateBody = {
        ...req.body,
        roleId: role.id
      }
    } else {
      validateBody = req.body
    }

    const newUser = registerUserSchema.parse(validateBody);

    const result = await registerUserUseCase.execute(newUser)

    return res.status(201).json(result)
  }
}