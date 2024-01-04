import { prisma } from "@lib/prisma";
import { LodgeRepository } from "@repositories/lodge-repository";
import { PrismaLodgeMapper } from "@repositories/mappers/prisma-lodge-mappers";
import { Lodge } from "entities/lodge";

export class PrismaLodgeRepository implements LodgeRepository {
  async create(data: Lodge): Promise<void> {
    const lodge = PrismaLodgeMapper.toPrisma(data);

    await prisma.lodges.create({
      data: lodge
    })
  }

  async findByName(name: string): Promise<Lodge | null> {
    const lodge = await prisma.lodges.findFirst({
      where: {
        name
      }
    });

    return lodge ? PrismaLodgeMapper.toDomain(lodge) : null
  }
  findById(id: string): Promise<Lodge | null> {
    throw new Error("Method not implemented.");
  }
  async list(): Promise<Lodge[] | null> {
    const lodges = await prisma.lodges.findMany();

    return lodges ? lodges.map(lodge => PrismaLodgeMapper.toDomain(lodge)) : null;
  }
}