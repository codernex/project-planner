import { NextFunction, Request, Response } from "express";
import { APIResponse, Handler } from "../types";


export const requestHandler = <
  TQuery,
  TBody,
  TParams,
  TResponse=APIResponse
>(
  handler: Handler<TQuery, TBody, TParams, TResponse>,
  config?: {
    query?: TQuery;
    params?: TParams;
    body?: TBody;
  },
) => {
  return async (
    req: Request<TParams, any, TBody, TQuery>,
    res: Response<TResponse>,
    next: NextFunction,
  ) => {
    try{
      await Promise.resolve(handler(req, res, next));
    }catch (err){
      await Promise.reject(err)
    }
  };
};