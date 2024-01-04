import { inject, injectable } from "tsyringe";

import { Lodge } from "entities/lodge";
import { LodgeRepository } from "@repositories/lodge-repository";
import { notFound } from "@lib/api-error";

@injectable()
export class ListLodgeUseCase {
  constructor(
    @inject('LodgeRepository')
    private lodgeRepository: LodgeRepository
  ) {}

  async execute(): Promise<Lodge[] | null> {
    const lodges = await this.lodgeRepository.list();

    if (lodges?.length == 0) {
      throw new notFound('Loja')
    }

    return lodges;
  } 
}