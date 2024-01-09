export interface IRegisterUserRequest {
  name: string;
  email: string;
  cim: string;
  lodgeId: string;
  roleId: string | null;
  phone: string;
}

export interface IListUser {
  name: string;
  email: string;
  password: string;
  cim: string;
  phone: string;
  lodgeId: string;
  roleId: string;
  createdAt: Date;
  lodge: {
    name: string
  }
}

export interface IRegisterUserResponse {
  name: string;
  password: string;
}

export interface ILoginUserRequest {
  cim: string;
  password: string;
}

export interface ILoginUserResponse {
  id: string;
  name: string;
  token: string;
  lodge: {
    name: string;
    colors: string[];
    logo: string;
  },
  role: {
    name: string;
  }
}