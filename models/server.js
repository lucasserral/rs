import express from "express";

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
    // public directory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.send("Hola mundo");
    });
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Running on ${this.PORT}`);
    });
  }
}

export default Server;
