import { NextFunction, Request, Response } from "express";

export type Handler<
  TQuery,
  TBody,
  TParams,
  TResponse = APIResponse
> = (req: Request<TParams, any, TBody, TQuery>, res: Response<TResponse>, next?: NextFunction) => Promise<void> | Promise<Response> | Promise<NextFunction>


export type APIResponse= {
  status: number,
  data?: any
  error?: Record<string, any>,
  success: boolean,
  message?: string
}