import { RoleRepository } from "@repositories/role-repository";
import { inject, injectable } from "tsyringe";



@injectable()
export class FindRoleById {
  constructor(
    @inject('RoleRepository')
    private roleRepository: RoleRepository
  ) {}

  async execute(id: string) {
    const role = await this.roleRepository.findById(id);

    return role;
  }
}