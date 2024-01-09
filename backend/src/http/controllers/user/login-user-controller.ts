import { loginUserSchema } from "@lib/zodSchemas/user";
import { LoginUserUseCase } from "@use-cases/user/login-user";
import { Request, Response } from "express";
import { container } from "tsyringe";



export class LoginUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const loginUserUseCase = container.resolve(LoginUserUseCase);

    const loginUser = loginUserSchema.parse(req.body);

    const result = await loginUserUseCase.execute(loginUser);
    
    return res.json(result);
  }
}