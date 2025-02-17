import { Server } from "http";
import mongoose from "mongoose";
import { config } from "./app/config";
import app from "./app";

let server: Server;
async function main() {
  await mongoose.connect(config.database_url as string);
  server = app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
  });
}

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
});

main();
