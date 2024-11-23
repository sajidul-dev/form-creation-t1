import { Sequelize } from "sequelize";
import config from "../config";

const sequelize = new Sequelize(
  config.db.database as string,
  config.db.user as string,
  config.db.password,
  {
    host: config.db.host,
    dialect: "mysql",
    dialectModule: require("mysql2"),
  }
);

export default sequelize;
