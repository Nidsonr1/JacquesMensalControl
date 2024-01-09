import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListLodgeUseCase } from "@use-cases/lodge/list-lodge-use-case";

export class ListLodgeController {
  async handle(req: Request, res: Response) {
    const listLodgesUseCase = container.resolve(ListLodgeUseCase);

    const result = await listLodgesUseCase.execute();

    return res.json(result);
  }
}