import { NotFound } from "@lib/api-errors";
import { RoleRepository } from "@repositories/role-repository";
import { inject, injectable } from "tsyringe";



@injectable()
export class ListRoles {
  constructor(
    @inject('RoleRepository')
    private roleRepository: RoleRepository
  ) {}

  async execute(search?: string) {
    const roles = await this.roleRepository.list(search);

    if(!roles) throw new NotFound('Role');

    return roles.map(role => {
      return {
        id: role.id,
        name: role.name,
        createdAt: role.createdAt
      }
    })
  }
}