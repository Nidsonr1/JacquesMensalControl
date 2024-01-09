import { prisma } from "@lib/prisma";
import { ILoginResponse, IPrismaRegisterUser } from "@DTO/user";
import { UserRepository } from "@repositories/user-repository";

export class PrismaUserRepository implements UserRepository {
  async findByCim(cim: string): Promise<ILoginResponse | null> {
    const user = await prisma.users.findFirst({
      where: {
        cim
      },
      select: {
        id: true,
        name: true,
        cim: true,
        password: true,
        email: true,
        phone: true,
        createdAt: true,
        lodgeId: true,
        roleId: true,
        Lodges: {
          select: {
            name: true,
            logo: true,
            colors: true
          }
        },
        Roles: {
          select: {
            name: true
          }
        }
      }
    })

    return user
  }

  async register(data: IPrismaRegisterUser): Promise<void> {
    await prisma.users.create({
      data: {
        name: data.name,
        cim: data.cim,
        email: data.email,
        password: data.password,
        phone: data.phone,
        lodgeId: data.lodgeId,
        roleId: data.roleId
      }
    });
  }
}