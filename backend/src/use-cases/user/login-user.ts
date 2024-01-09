import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { env } from "env";
import { sign } from "jsonwebtoken";
import { invalidCredentials, notFound } from "@lib/api-error";
import { UserRepository } from "@repositories/user-repository";
import { LodgeRepository } from "@repositories/lodge-repository";
import { ILoginUserRequest, ILoginUserResponse } from "@DTO/user";
import { RoleRepository } from "@repositories/role-repository";

@injectable()
export class LoginUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository,

    @inject("LodgeRepository")
    private lodgeRepository: LodgeRepository,

    @inject('RoleRepository')
    private roleRepository: RoleRepository
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
    const roleInfos = await this.roleRepository.findById(user.roleId);

    if (!lodgeInfos) throw new notFound('Loja');
    if (!roleInfos) throw new notFound('Role');

    return {
      id: user.id,
      name: user.name,
      token,
      lodge: {
        name: lodgeInfos.name,
        colors: lodgeInfos.colors,
        logo: lodgeInfos.logo
      },
      role: {
        name: roleInfos.name,
      }
    }
  }
}