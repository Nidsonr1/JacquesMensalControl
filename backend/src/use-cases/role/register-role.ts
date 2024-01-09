import { AlreadyExist } from "@lib/api-errors";
import { RoleRepository } from "@repositories/role-repository";
import { inject, injectable } from "tsyringe";

export interface IRegisterRoleRequest { name: string }

@injectable()
export class RegisterRole {
  constructor(
    @inject('RoleRepository')
    private roleRepository: RoleRepository
  ) {}

  async execute(data: IRegisterRoleRequest): Promise<void> {
    const roleExist = await this.roleRepository.findByName(data.name);

    if (roleExist) throw new AlreadyExist('role');

    await this.roleRepository.register(data.name);
  }
}