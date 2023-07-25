import mongoose, { mongo } from "mongoose";
import chalk from "chalk";

mongoose.set("returnOriginal", false);

let connectionString = process.env.DB_URL || "mongodb://127.0.0.1:27017/api-project"

mongoose
  .connect(connectionString)
  .catch((err) => {
    console.log(`Error connection to MongoDB: ${err.message}`)
  });

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"))
})

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`))
})

export default mongoose.connection;
