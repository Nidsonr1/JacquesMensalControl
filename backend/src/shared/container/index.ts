import { container } from "tsyringe";

import { RoleRepository } from "@repositories/role-repository";
import { PrismaRoleRepository } from "@repositories/implementations/prisma-role-repository";

container.registerSingleton<RoleRepository>("RoleRepository", PrismaRoleRepository);