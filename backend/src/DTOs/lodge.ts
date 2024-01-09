export interface IRegisterLodgeRequest {
  name: string;
  colors: string[];
  logo: string;
}

export interface IListLodgeResponse {
  id: string;
  name: string;
}