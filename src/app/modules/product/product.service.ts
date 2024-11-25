import { IProduct } from "./product.interface";
import Product from "./product.model";

const createProduct = async (product: IProduct) => {
  const [result, created] = await Product.findOrCreate({
    where: { product_code: product.product_code },
    defaults: {
      product_name: product.product_name,
      product_price: product.product_price,
    },
  });
  return [result, created];
};

const getAllProducts = async () => {
  const products = await Product.findAll({
    where: {},
    attributes: ["product_id", "product_code", "product_name", "product_price"],
    order: [["created_at", "DESC"]],
  });
  return products;
};

export const ProductService = { createProduct, getAllProducts };
