import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { env } from "env";
import { sign } from "jsonwebtoken";
import { invalidCredentials, notFound } from "@lib/api-error";
import { UserRepository } from "@repositories/user-repository";
import { LodgeRepository } from "@repositories/lodge-repository";
import { ILoginUserRequest, ILoginUserResponse } from "@DTO/user";

@injectable()
export class LoginUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository,

    @inject("LodgeRepository")
    private lodgeRepository: LodgeRepository
  ) {}

  async execute({ cim, password }: ILoginUserRequest): Promise<ILoginUserResponse> {
    const user = await this.userRepository.findByCim(cim);

    if (!user) throw new invalidCredentials();

    const passwordCompare = await compare(password, user.password);

    if (!passwordCompare) throw new invalidCredentials();

    const token = sign({ cim }, env.ACCESS_KEY, {
      subject: user.id,
      expiresIn: '1d'
    });

    const lodgeInfos = await this.lodgeRepository.findById(user.lodgeId);

    if (!lodgeInfos) throw new notFound('Loja');

    return {
      id: user.id,
      name: user.name,
      token,
      lodge: {
        name: lodgeInfos.name
      }
    }
  }
}