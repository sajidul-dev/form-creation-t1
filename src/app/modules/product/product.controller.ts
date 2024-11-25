import { StatusCodes } from "http-status-codes";
import { NextFunction, Request, RequestHandler, Response } from "express";

import catchAsync from "../../../shared/catchAsyncs";
import sendResponse from "../../../shared/sendResponse";
import { ProductService } from "./product.service";

const createProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { product } = req.body;
    const [result, created] = await ProductService.createProduct(product);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Product created successfully!",
      data: { result, created },
    });
    next();
  }
);

const getAllProducts: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const products = await ProductService.getAllProducts();
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Products retrieved successfully!",
      data: products,
    });
    next();
  }
);

export const ProductController = { createProduct, getAllProducts };
