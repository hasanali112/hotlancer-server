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

main();
