import "./db";
import "./config";
import express, { Application } from "express";
import { createServer } from "http";
import { healthzRoutes, userRoutes } from "./routes";


const bootstrap = async (app: Application) => {
  /**
   * Routes
   */
  app.use("/", healthzRoutes);
  app.use("/api/v1/users", userRoutes);

  /**
   * HTTP Server
   */
  const http = createServer(app);
  const server = http.listen(9000);

  server.on("listening", () => {
    console.log("Listening on port 9000");
  });

  server.on("error", (error) => {
    console.log(error);
    server.close();
  });
};

new Promise(resolve => {
  resolve(bootstrap(express()));
}).catch(err => {
  console.log(err);
});