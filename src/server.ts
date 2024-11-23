import app from "./app";
import config from "./config";
import sequelize from "./lib/db";

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Database is connected");
    app.listen(config.port, () => {
      console.log(`App is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log("Failed to connect database");
  }
}

main();
