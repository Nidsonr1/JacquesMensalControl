import { prisma } from "@lib/prisma";
import { PrismaRoleMapper } from "@repositories/mappers/prisma-role-mapper";
import { RoleRepository } from "@repositories/role-repository";
import { Role } from "entities/role";



export class PrismaRoleRepository implements RoleRepository {
  async create(data: Role): Promise<void> {
    const role = PrismaRoleMapper.toPrisma(data);

    await prisma.roles.create({
      data: role
    });
  }

  async findByName(name: string): Promise<Role | null> {
    const role = await prisma.roles.findFirst({
      where: {
        name
      }
    });

    return role ? PrismaRoleMapper.toDomain(role) : null;
  }
}