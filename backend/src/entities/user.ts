import { Replace } from "@helpers/replace";
import { randomUUID } from "crypto";

export interface UsersProps {
  name: string;
  email: string;
  password: string;
  cim: string;
  phone: string;
  lodgeId: string;
  roleId: string;
  createdAt: Date;
}

export class User {
  private _id: string;
  private props: UsersProps;

  constructor(props: Replace<UsersProps, {
    createdAt?: Date, 
    lodgeId: string, 
    roleId: string
  }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      lodgeId: props.lodgeId,
      roleId: props.roleId,
      createdAt: props.createdAt ?? new Date()
    }
  }

  public get id(): string {
    return this._id
  }

  public set name(name: string) {
    this.props.name = name
  }

  public get name(): string {
    return this.props.name
  }

  public set email(email: string) {
    this.props.email = email
  }

  public get email(): string {
    return this.props.email
  }

  public set password(password: string) {
    this.props.password = password
  }

  public get password(): string {
    return this.props.password
  }

  public set cim(cim: string) {
    this.props.cim = cim
  }

  public get cim(): string {
    return this.props.cim
  }

  public set phone(phone: string) {
    this.props.phone = phone
  }

  public get phone(): string {
    return this.props.phone
  } 
  
  public get createdAt(): Date {
		return this.props.createdAt;
	}

  public get lodgeId(): string {
    return this.props.lodgeId
  }

  public get roleId(): string {
    return this.props.roleId
  }
}