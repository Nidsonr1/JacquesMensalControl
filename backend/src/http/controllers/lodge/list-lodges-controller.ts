import { listLodgesSchema } from "@lib/zodShchemas/lodge";
import { ListLodges } from "@use-cases/lodge/list-lodges";
import { Request, Response } from "express";
import { container } from "tsyringe";



export class ListLodgesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listLodgesUseCase = container.resolve(ListLodges);

    const listLodge = listLodgesSchema.parse(req.query.search);

    const result = await listLodgesUseCase.execute(listLodge)

    return res.json(result);
  }
}