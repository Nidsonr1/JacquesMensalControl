import { inject, injectable } from "tsyringe";

import { LodgeRepository } from "@repositories/lodge-repository";
import { notFound } from "@lib/api-error";
import { IListLodgeResponse } from "@DTO/lodge";

@injectable()
export class ListLodgeUseCase {
  constructor(
    @inject('LodgeRepository')
    private lodgeRepository: LodgeRepository
  ) {}

  async execute(): Promise<IListLodgeResponse[]> {
    const lodges = await this.lodgeRepository.list();
    
    if (!lodges) throw new notFound('Loja');
    
    const result = lodges.map((lodge) => {
      return {
        id: lodge.id,
        name: lodge.name,
      }
    });

    return result
  } 
}