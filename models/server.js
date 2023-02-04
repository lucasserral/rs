import express from "express";
import cors from "cors";
import userRouter from "../routes/user.routes.js";

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;
    this.usersPath = "/api/users";

    // Middlewares;
    this.middlewares();

    // App routes
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Read and parse body
    this.app.use(express.json());

    // public directory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, userRouter);
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Running on ${this.PORT}`);
    });
  }
}

export default Server;
