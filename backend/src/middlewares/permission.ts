import { Forbiden, NotFound } from "@lib/api-errors";
import { FindUserById } from "@use-cases/user/find-user-by-id";
import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";



export function can(permissionRoutes: string[]) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const findUser = container.resolve(FindUserById);

    
    const { userId } = req;
    
    const user = await findUser.execute(userId);

    if (!user.Roles) throw new NotFound("Usuário");

    let arrayPermission = []

    arrayPermission.push(user.Roles)

    const permissionExist = arrayPermission
      .map((permission) => permission.name)
      .some((permission) => permissionRoutes.includes(permission))    

    if(!permissionExist) throw new Forbiden();

    return next();
  }
}