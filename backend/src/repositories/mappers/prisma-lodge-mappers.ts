import { Lodge } from "entities/lodge";
import { Lodges } from '@prisma/client'


export class PrismaLodgeMapper {
  static toPrisma(lodge: Lodge) {
    return {
      id: lodge.id,
      name: lodge.name,
      colors: lodge.colors,
      logo: lodge.logo,
      createdAt: lodge.createdAt
    }
  }

  static toDomain(lodge: Lodges) {
    return new Lodge(
      {
        name: lodge.name,
        colors: lodge.colors,
        logo: lodge.logo,
        createdAt: lodge.createdAt
      },
      lodge.id
    )
  }
}