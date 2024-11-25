import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsyncs";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { ReportService } from "./report.service";

const insertData = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { data } = req.body;
    const result = await ReportService.insertData(data);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Report created successfully!",
      data: { result, created: true },
    });
    next();
  }
);

export const ReportController = { insertData };
