import { Router } from "express";
import { requestHandler } from "../utils";
import { DB } from "../db";
import {users} from '../db/schema'

export const healthzRoutes = Router();

const handler = requestHandler(async (req, res, next) => {

  const data= await DB.select().from(users)

  console.log(data);
  res.status(200).json({
    status: 200,
    success: true,
    message: "API is up and running",
  });
});

healthzRoutes.get("/healthz", handler);