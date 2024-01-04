import { Replace } from "@helpers/replace";
import { randomUUID } from "crypto";


export interface LodgesProps {
  name: string;
  createdAt: Date;
}

export class Lodge {
  private _id: string;
  private props: LodgesProps;

  constructor(props: Replace<LodgesProps, {createdAt?: Date}>,id?: string) {
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
  
  public get createdAt(): Date {
		return this.props.createdAt;
	}
}