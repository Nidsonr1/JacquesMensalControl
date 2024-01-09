import { ILoginRequest } from "@DTO/user";
import { InvalidCredentials } from "@lib/api-errors";
import { UserRepository } from "@repositories/user-repository";
import { compare } from "bcrypt";
import { env } from "env";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";



@injectable()
export class LoginUser {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository
  ) {}

  async execute({ cim, password }: ILoginRequest){
    const user = await this.userRepository.findByCim(cim);

    if (!user) throw new InvalidCredentials();

    const passwordCompare = await compare(password, user.password);

    if(!passwordCompare) throw new InvalidCredentials();

    const token = sign({ cim }, env.ACCESS_KEY, {
      subject: user.id,
      expiresIn: '1d'
    });

    return {
      id: user.id,
      name: user.name,
      token,
      lodge: user.Lodges,
      role: user.Roles
    }
  }
}