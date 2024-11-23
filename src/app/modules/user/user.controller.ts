import { StatusCodes } from "http-status-codes";
import { NextFunction, Request, RequestHandler, Response } from "express";

import catchAsync from "../../../shared/catchAsyncs";
import sendResponse from "../../../shared/sendResponse";
import { UserService } from "./user.service";

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const [result, created] = await UserService.createUser(user);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "User created successfully!",
      data: { result, created },
    });
    next();
  }
);

export const UserController = { createUser };
