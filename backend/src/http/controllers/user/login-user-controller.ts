import { loginUserSchema } from "@lib/zodShchemas/user";
import { LoginUser } from "@use-cases/user/login-user";
import { Request, Response } from "express";
import { container } from "tsyringe";



export class LoginUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const loginUserUseCase = container.resolve(LoginUser);

    const loginUserValidation = loginUserSchema.parse(req.body);

    const result = await loginUserUseCase.execute(loginUserValidation)

    return res.json(result)
  }
}