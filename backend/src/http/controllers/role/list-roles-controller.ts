import { ListRoles } from "@use-cases/role/list-roles";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { z } from "zod";

export class ListRolesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listRolesUseCase = container.resolve(ListRoles);

    const listRolesSchema = z.string().optional()

    const listRoles = listRolesSchema.parse(req.query.search);

    const result = await listRolesUseCase.execute(listRoles);

    return res.json(result)
  }
}