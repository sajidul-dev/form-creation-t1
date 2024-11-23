import { Sequelize } from "sequelize";

const sequelize = new Sequelize("E-commerce", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
