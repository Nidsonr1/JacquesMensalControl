import { Roles } from "@prisma/client";
import { Role } from "entities/role";

export class PrismaRoleMapper {
  static toPrisma(role: Role) {
    return {
      id: role.id,
      name: role.name,
      createdAt: role.createdAt
    };
  };

  static toDomain(role: Roles) {
    return new Role({
      name: role.name,
      createdAt: role.createdAt
    },
    role.id
    );
  };
}