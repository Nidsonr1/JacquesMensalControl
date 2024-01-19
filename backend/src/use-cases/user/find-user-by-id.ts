import { NotFound } from "@lib/api-errors";
import { UserRepository } from "@repositories/user-repository";
import { inject, injectable } from "tsyringe";


@injectable()
export class FindUserById {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ){}

  async execute(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) throw new NotFound('Usuário');
    
    return user
  }
}