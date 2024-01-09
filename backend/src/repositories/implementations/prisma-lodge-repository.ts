import { IRegisterLodgeRequest } from "@DTO/lodges";
import { prisma } from "@lib/prisma";
import { Lodges } from "@prisma/client";
import { LodgeRepository } from "@repositories/lodge-repository";



export class PrismaLodgeRepository implements LodgeRepository {
  async list(search?: string | undefined): Promise<Lodges[] | null> {
    const lodges = await prisma.lodges.findMany({
      where: {
        OR: [
          {
            name: {
              contains: search,
              mode: 'insensitive'
            }
          }
        ]
      }
    });

    const result = search ? lodges : await prisma.lodges.findMany(); 

    return result;
  }
  async register(data: IRegisterLodgeRequest): Promise<void> {
    await prisma.lodges.create({
      data
    });
  }
  
  async findByName(name: string): Promise<Lodges | null> {
    const lodge = await prisma.lodges.findFirst({
      where: {
        name
      }
    });

    return lodge ? lodge : null;
  }
}