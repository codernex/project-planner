import { DB } from "../db";
import { APIResponse } from "../types";
import { Response } from "express";

export class Controller {
  constructor(protected db = DB) {
  }

  success<TRes extends Response<APIResponse>,TData>(res: TRes, data: any, status = 200) {
    return res.status(status).json({ success: true, data, status });
  }

  error<TRes extends Response<APIResponse>>(res: TRes, error: any, status = 500) {
    return res.status(status).json({ success: false, error, status });
  }

}