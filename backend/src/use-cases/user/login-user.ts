import { ILoginUserRequest, ILoginUserResponse } from "@DTO/user";
import { invalidCredentials } from "@lib/api-error";
import { LodgeRepository } from "@repositories/lodge-repository";
import { UserRepository } from "@repositories/user-repository";
import { compare } from "bcrypt";
import { env } from "env";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

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

    return {
      id: user.id,
      name: user.name,
      token,
      lodge: {
        name: lodgeInfos?.name
      }
    }
  }
}