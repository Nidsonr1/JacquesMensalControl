import { User } from "entities/user";
import { Users } from "@prisma/client";

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      cim: user.cim,
      email: user.email,
      password: user.password,
      phone: user.phone,
      lodgeId: user.lodgeId,
      roleId: user.roleId
    }
  }

  static toDomain(user: Users) {
    return new User(
      {
        name: user.name,
        email: user.email,
        password: user.password,
        cim: user.cim,
        phone: user.phone,
        createdAt: user.createdAt,
        roleId: user.roleId,
        lodgeId: user.lodgesId,
      },
      user.id,
    )
  }
}