import { DataTypes } from "sequelize";
import sequelize from "../../../lib/db";
import User from "../user/user.model";
import Product from "../product/product.model";

const PurchaseHistory = sequelize.define(
  "PurchaseHistory",
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "product_id",
      },
    },

    purchase_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    tableName: "PurchaseHistory",
    timestamps: false,
  }
);

// Define associations
PurchaseHistory.belongsTo(User, { foreignKey: "user_id" });
PurchaseHistory.belongsTo(Product, { foreignKey: "product_id" });

// User.hasMany(PurchaseHistory, { foreignKey: "user_id" });
// Product.hasMany(PurchaseHistory, { foreignKey: "product_id" });

// sequelize.sync();

export default PurchaseHistory;
