import { ILoginResponse, IRegisterUserRequest } from "@DTO/user";
import { Users } from "@prisma/client";



export interface UserRepository {
  register(data: IRegisterUserRequest): Promise<void>;
  findByCim(cim: string): Promise<ILoginResponse | null>
}