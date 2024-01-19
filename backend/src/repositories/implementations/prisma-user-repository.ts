import { prisma } from "@lib/prisma";
import { IFindByIdResponse, ILoginResponse, IPrismaRegisterUser } from "@DTO/user";
import { UserRepository } from "@repositories/user-repository";
import { Users } from "@prisma/client";

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

  async findById(id: string): Promise<IFindByIdResponse | null> {
    const user = await prisma.users.findFirst({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        password: false,
        cim: true,
        email: true,
        phone: true,
        Roles: {
          select: {
            name: true
          }
        }
      }
    });

    return user
  }
}