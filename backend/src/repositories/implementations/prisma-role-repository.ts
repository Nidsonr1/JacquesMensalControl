import { prisma } from "@lib/prisma";
import { Roles } from "@prisma/client";
import { RoleRepository } from "@repositories/role-repository";

export class PrismaRoleRepository implements RoleRepository {
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
}