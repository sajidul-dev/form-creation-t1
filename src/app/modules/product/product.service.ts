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

export const ProductService = { createProduct };
