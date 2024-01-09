import { container } from 'tsyringe';

import { LodgeRepository } from '@repositories/lodge-repository';
import { PrismaLodgeRepository } from '@repositories/implementations/prisma-lodge-repository';

import { RoleRepository } from '@repositories/role-repository';
import { PrismaRoleRepository } from '@repositories/implementations/prisma-role-repository';

import { UserRepository } from '@repositories/user-repository';
import { PrismaUserRepository } from '@repositories/implementations/prisma-user-repository';

container.registerSingleton<LodgeRepository>("LodgeRepository", PrismaLodgeRepository);
container.registerSingleton<RoleRepository>("RoleRepository", PrismaRoleRepository);
container.registerSingleton<UserRepository>("UserRepository", PrismaUserRepository);