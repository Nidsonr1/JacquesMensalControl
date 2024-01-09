import { prisma } from "@lib/prisma";
import { Roles } from "@prisma/client";
import { RoleRepository } from "@repositories/role-repository";

export class PrismaRoleRepository implements RoleRepository {
  async list(search?: string | undefined): Promise<Roles[] | null> {
    const roles = await prisma.roles.findMany({
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

    const result = search ? roles : await prisma.roles.findMany()

    return result
  }
  async findByName(name: string): Promise<Roles | null> {
    const role = await prisma.roles.findFirst({
      where: {
        name
      }
    });
    
    return role ? role : null;
  }
  async register(name: string): Promise<void> {
    await  prisma.roles.create({
      data: {
        name
      }
    });
  }

  async findById(id: string): Promise<Roles | null> {
    const role = await prisma.roles.findFirst({
      where: {
        id
      }
    });

    return role ? role : null
  }
}

