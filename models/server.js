import express from "express";
import cors from "cors";

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;

    // Middlewares;
    this.middlewares();

    // App routes
    this.routes();
  }

  middlewares() {
    // CORS
    // this.app.use(cors);

    // public directory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.json({
        msg: "get API",
      });
    });

    this.app.put("/api", (req, res) => {
      res.json({
        msg: "put API",
      });
    });

    this.app.post("/api", (req, res) => {
      res.json({
        msg: "post API",
      });
    });

    this.app.delete("/api", (req, res) => {
      res.json({
        msg: "delete API",
      });
    });
    this.app.patch("/api", (req, res) => {
      res.json({
        msg: "patch API",
      });
    });
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Running on ${this.PORT}`);
    });
  }
}

export default Server;
