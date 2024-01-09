import { RoleRepository } from "@repositories/role-repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListRoleUseCase {
  constructor(
    @inject('RoleRepository')
    private roleRepository: RoleRepository
  ) {}

  async execute(name: string) {
    const role = await this.roleRepository.findByName(name);

    return role;
  }
}