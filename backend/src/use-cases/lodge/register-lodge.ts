import { IRegisterLodgeRequest } from "@DTO/lodges";
import { AlreadyExist } from "@lib/api-errors";
import { LodgeRepository } from "@repositories/lodge-repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class RegisterLodge {
  constructor(
    @inject('LodgeRepository')
    private lodgeRepository: LodgeRepository
  ) {}

  async execute(data: IRegisterLodgeRequest) {
    const lodgeExist = await this.lodgeRepository.findByName(data.name);

    if (lodgeExist) throw new AlreadyExist('Loja');

    await this.lodgeRepository.register(data);
  }
}