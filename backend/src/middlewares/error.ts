import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ApiErrors } from 'lib/api-error';
import { env } from 'env';


export async function ThrowApiErrors(
  error: Error & Partial<ApiErrors>,
  _: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ZodError) {
    return res.status(400).json({
      message: 'Validation Error',
      issues: error
    });
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error);
  }

  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : 'Internal Server Error';
  return res.status(statusCode).json({ message })
}