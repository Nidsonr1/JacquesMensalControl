import { IFindByIdResponse, ILoginResponse, IRegisterUserRequest } from "@DTO/user";



export interface UserRepository {
  register(data: IRegisterUserRequest): Promise<void>;
  findByCim(cim: string): Promise<ILoginResponse | null>;
  findById(id: string): Promise<IFindByIdResponse | null>
}
