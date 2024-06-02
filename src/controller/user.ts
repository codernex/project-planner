import { requestHandler } from "../utils";
import { DB } from "../db";
import { users } from "../db/schema";
import { Controller } from "./base";

class UserController extends Controller {
  constructor() {
    super();
  }

  getUsers = requestHandler(async (req, res, next) => {
    const data = await DB.select().from(users);

    this.success(res,data);
  });

}

export const userController = new UserController();