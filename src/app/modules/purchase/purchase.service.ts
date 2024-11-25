import { Sequelize } from "sequelize";
import sequelize from "../../../lib/db";
import Product from "../product/product.model";
import User from "../user/user.model";
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
      order_no: Math.floor(1000 + Math.random() * 9000),
      product_id: purchase.product_id,
      purchase_quantity: purchase.purchase_quantity,
      total_price: total_price,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const getAllPurchases = async () => {
  const purchases = await PurchaseHistory.findAll({
    attributes: [
      "order_id",
      "user_id",
      "product_id",
      "purchase_quantity",
      "total_price",
      [Sequelize.col("User.name"), "user_name"], // Flatten User name
      [Sequelize.col("User.phone"), "user_email"], // Flatten User email
      [Sequelize.col("Product.product_name"), "product_name"], // Flatten Product name
      [Sequelize.col("Product.product_price"), "product_price"],
    ],
    include: [
      {
        model: User,
        attributes: [],
      },
      {
        model: Product,
        attributes: [],
      },
    ],
    order: [["total_price", "DESC"]],
  });

  return purchases;
};

export const PurchaseService = { createPurchase, getAllPurchases };
