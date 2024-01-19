import { Unauthenticated } from "@lib/api-errors";
import { env } from "env";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


interface IPayload {
  sub: string;
}

export async function EnsureAuthenticated(
  req: Request,
  _: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new Unauthenticated();

  const [, token] = authHeader.split(' ');

  if(!token) throw new Unauthenticated();

  const { sub } = verify(token, env.ACCESS_KEY) as IPayload;
  req.userId = sub;

  return next();
}