import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsyncs";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { PurchaseService } from "./purchase.service";

const createPurchase = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { purchase } = req.body;
    const result = await PurchaseService.createPurchase(purchase);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Product created successfully!",
      data: { result, created: true },
    });
    next();
  }
);

const getAllPurchases = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const purchases = await PurchaseService.getAllPurchases();
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Purchases retrieved successfully!",
      data: purchases,
    });
    next();
  }
);

export const PurchaseController = { createPurchase, getAllPurchases };
