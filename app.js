import express from "express";
import * as dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
