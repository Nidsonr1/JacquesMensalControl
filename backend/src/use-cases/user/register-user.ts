import { IRegisterUserRequest } from "@DTO/user";
import { AlreadyExist } from "@lib/api-errors";
import { UserRepository } from "@repositories/user-repository";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";



@injectable()
export class RegisterUser {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) {}

  async execute(data: IRegisterUserRequest) {
    const userExist = await this.userRepository.findByCim(data.cim);

    if (userExist) throw new AlreadyExist('Usuário');

    const password = `${data.name}${data.cim}`;

    const passwordHash = await hash(password, 10);

    const newUser = {
      ...data,
      password: passwordHash
    };

    await this.userRepository.register(newUser);

    return {
      name: data.name,
      password
    }
  }
}