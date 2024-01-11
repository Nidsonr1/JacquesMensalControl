import { Lodges } from "@prisma/client";
import { RoleRepository } from "@repositories/role-repository";


export interface IRegisterUserRequest {
  name: string;
  cim: string;
  email: string;
  phone: string;
  lodgeId: string;
  roleId?: string;
}

export interface IPrismaRegisterUser {
  name: string;
  cim: string;
  email: string;
  password: string;
  phone: string;
  lodgeId: string;
  roleId?: string;
}

export interface ILoginRequest {
  cim: string;
  password: string;
}

export interface ILoginResponse {
  id: string;
  name: string;
  cim: string;
  password: string;
  email: string;
  phone: string;
  createdAt: Date;
  Lodges: object
  Roles: object | null
}

export interface ILoginToDomain {
  id: string;
  name: string;

}