import { StatusCodes } from "http-status-codes";
import ApiError from "../../../errors/ApiError";
import Product from "../product/product.model";
import PurchaseHistory from "../purchase/purchase.model";
import User from "../user/user.model";

const insertData = async (data: any) => {
  try {
    const [userResult, userCreate] = await User.findOrCreate({
      where: { phone: data.user.phone },
      defaults: { name: data.user.name },
    });
    console.log(userResult.dataValues, "User");

    const [productResult, productCreate] = await Product.findOrCreate({
      where: { product_code: data.product.product_code },
      defaults: {
        product_name: data.product.product_name,
        product_price: data.product.product_price,
      },
    });

    console.log(productResult.dataValues, "Product");

    const [orderResult, orderCreate] = await PurchaseHistory.findOrCreate({
      where: { order_no: data.order.order_no },
      defaults: {
        user_id: userResult.dataValues.user_id,
        product_id: productResult.dataValues.product_id,
        purchase_quantity: data.order.purchase_quantity,
        total_price:
          data.order.purchase_quantity * productResult.dataValues.product_price,
      },
    });
  } catch (err) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Something went wrong");
  }
  return data;
};

export const ReportService = { insertData };
