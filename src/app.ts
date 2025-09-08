import express from "express";
import router_produto from "./Routes/router.produto";
import router_cliente from "./Routes/router.cliente";

const app = express();

app.use(express.json());
app.use(`/produtos`, router_produto);
app.use(`/clientes`, router_cliente);

export default app;