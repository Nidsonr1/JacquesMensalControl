import { inject, injectable } from "tsyringe";

import { Lodge } from "entities/lodge";
import { IRegisterLodgeRequest } from "@DTO/lodge";
import { LodgeRepository } from "@repositories/lodge-repository";
import { alreadyRegistred } from "@lib/api-error";


@injectable()
export class RegisterLodgeUseCase {
  constructor(
    @inject('LodgeRepository')  
    private lodgeRepository: LodgeRepository
  ) {}

  async execute(data: IRegisterLodgeRequest): Promise<void> {
    const lodgeExist = await this.lodgeRepository.findByName(data.name);

    if (lodgeExist) {
      throw new alreadyRegistred("Loja");
    }

    const lodge = new Lodge(data);

    await this.lodgeRepository.create(lodge)
  }
}