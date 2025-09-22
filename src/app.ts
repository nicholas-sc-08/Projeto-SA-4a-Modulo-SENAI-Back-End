import express from "express";
import cors from "cors";
import router_produto from "./Routes/router.produto";
import router_cliente from "./Routes/router.cliente";
import router_categoria from "./Routes/router.categoria";
import router_brecho from "./Routes/router.brecho";
import router_chat from "./Routes/router.chat";
import router_marca from "./Routes/router.marca";
import router_upload from "./Routes/router.upload";
import router_pedido from "./Routes/router.pedido";
import router_sacola_brecho from "./Routes/router.sacola_brecho";

const app = express();

app.use(express.json());
app.use(cors());
app.use(`/api`, router_upload);
app.use(`/pedidos`, router_pedido);
app.use(`/sacolas_brechos`, router_sacola_brecho);
app.use(`/produtos`, router_produto);
app.use(`/clientes`, router_cliente);
app.use(`/categorias`, router_categoria);
app.use(`/brechos`, router_brecho);
app.use(`/chats`, router_chat);
app.use(`/marcas`, router_marca);

export default app;