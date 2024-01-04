import { alreadyRegistred } from "@lib/api-error";
import { RoleRepository } from "@repositories/role-repository";
import { Role } from "entities/role";
import { inject, injectable } from "tsyringe";

export interface IRegisterRoleRequest {
  name: string
}

@injectable()
export class RegisterRoleUseCase {
  constructor(
    @inject('RoleRepository')
    private roleRepository: RoleRepository
  ) {}

  async execute(data: IRegisterRoleRequest) {
    const roleExist = await this.roleRepository.findByName(data.name);

    if(roleExist) throw new alreadyRegistred('Role');

    const role = new Role(data);

    await this.roleRepository.create(role);
  }
}