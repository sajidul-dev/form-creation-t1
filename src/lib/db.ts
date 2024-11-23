import { Sequelize } from "sequelize";

const sequelize = new Sequelize("E-commerce", "root", "", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: require("mysql2"),
});

export default sequelize;
