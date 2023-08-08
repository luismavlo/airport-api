import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import AppDataSource from "./database/config";

async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(process.env.PORT);
    console.log(`Server on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
}

main();
