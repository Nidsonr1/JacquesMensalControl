import { Replace } from "@helpers/replace";
import { randomUUID } from "crypto";


export interface UsersProps {
  name: string;
  email: string;
  phone: string;
  createdAt: Date
}

export class User {
  private _id: string;
  private props: UsersProps;


  constructor(props: Replace<UsersProps, {createdAt?: Date}>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
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

  public set phone(phone: string) {
    this.props.phone = phone
  }

  public get phone(): string {
    return this.props.phone
  } 
  
  public get createdAt(): Date {
		return this.props.createdAt;
	}
}