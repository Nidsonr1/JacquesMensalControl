import { PrismaUserMapper } from "@repositories/mappers/prisma-user-mappers";
import { UserRepository } from "@repositories/user-repository";
import { User } from "entities/user";
import { prisma } from "@lib/prisma";
import { ILoginUserRequest } from "@DTO/user";



export class PrismaUserRepository implements UserRepository {
  async create(data: User): Promise<void> {
    const newUser = PrismaUserMapper.toPrisma(data);

    await prisma.users.create({
      data: {
        id: newUser.id,
        name: newUser.name,
        password: newUser.password,
        cim: newUser.cim,
        email: newUser.email,
        phone: newUser.phone,
        roleId: newUser.roleId,
        lodgesId: newUser.lodgeId
      }
    });
  }

  async findByCim(cim: string): Promise<User | null> {
    const user = await prisma.users.findFirst({
      where: {
        cim
      },
    });

    return user ? PrismaUserMapper.toDomain(user) : null;
  }
  findByName(name: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  

}