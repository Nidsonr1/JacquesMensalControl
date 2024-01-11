import { LodgeRepository } from "@repositories/lodge-repository";
import { inject, injectable } from "tsyringe";



@injectable()
export class ListLodges {
  constructor(
    @inject('LodgeRepository')
    private lodgeRepository: LodgeRepository
  ) {}

  async execute(search?: string) {
    const lodges = await this.lodgeRepository.list(search);

    return lodges;
  }
}