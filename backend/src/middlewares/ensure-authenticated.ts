import { unauthenticated } from "@lib/api-error";
import { env } from "env";
import { NextFunction, Request } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function EnsureAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if(!authHeader) throw new unauthenticated();

  const [, token] = authHeader.split(' ');

  if (!token) throw new unauthenticated();

  const { sub } = verify(token, env.ACCESS_KEY) as IPayload;

  req.userId = sub;

  return next()
}