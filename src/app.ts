import express from "express";
import router_produto from "./Routes/router.produto";

const app = express();

app.use(express.json());
app.use(`/produtos`, router_produto);

export default app;