import sequelize from "../../../lib/db";
import Product from "../product/product.model";
import PurchaseHistory from "./purchase.model";

const createPurchase = async (purchase: any) => {
  try {
    const product = await Product.findByPk(purchase.product_id);
    if (!product) {
      throw new Error("Product not found");
    }
    const total_price =
      Number(product.dataValues.product_price) * purchase.purchase_quantity;
    const result = await PurchaseHistory.create({
      user_id: purchase.user_id,
      product_id: purchase.product_id,
      purchase_quantity: purchase.purchase_quantity,
      total_price: total_price,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

export const PurchaseService = { createPurchase };
