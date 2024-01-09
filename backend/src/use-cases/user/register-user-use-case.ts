import { IRegisterUserRequest, IRegisterUserResponse } from "@DTO/user";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { User } from "entities/user";
import { alreadyRegistred } from "@lib/api-error";
import { UserRepository } from "@repositories/user-repository";

@injectable()
export class RegisterUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository
  ) {}

  async execute(data: IRegisterUserRequest): Promise<IRegisterUserResponse> {
    const userExist = await this.userRepository.findByCim(data.cim);

    if(userExist) throw new alreadyRegistred('Usuário');

    const [name] = data.name.split(" ")

    const password = `${name}${data.cim}`

    const passwordHash = await hash(password, 10);

    const newUser = new User({
      ...data,
      password: passwordHash
    });

    await this.userRepository.create(newUser);

    return {
      name: data.name,
      password
    };
  }
}