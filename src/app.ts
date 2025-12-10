import Fastify from "fastify";
import fastifyFormbody from "@fastify/formbody";
import cors from "@fastify/cors"
import multipart from "@fastify/multipart";
import router_produto from "./Routes/router.produto";
import router_cliente from "./Routes/router.cliente";
import router_categoria from "./Routes/router.categoria";
import router_brecho from "./Routes/router.brecho";
import router_chat from "./Routes/router.chat";
import router_marca from "./Routes/router.marca";
import router_upload from "./Routes/router.upload";
import router_pedido from "./Routes/router.pedido";
import router_sacola_brecho from "./Routes/router.sacola_brecho";
import router_endereco from "./Routes/router.endereco";
import router_estoque from "./Routes/router.estoque";
import router_stripe from "./Routes/router.stripe";
import router_gemini from "./Routes/router.gemini";
import router_auth from "./Routes/router.auth";

const app = Fastify({ logger: true });

app.register(fastifyFormbody);
app.register(cors);
app.register(multipart)
app.register(router_auth, { prefix: "/auth" });
app.register(router_stripe, { prefix: "/api/payments" });
app.register(router_endereco, { prefix: "/enderecos" });
app.register(router_upload, { prefix: "/api" });
app.register(router_gemini, { prefix: "/gemini" });
app.register(router_pedido, { prefix: "/pedidos" });
app.register(router_sacola_brecho, { prefix: "/sacolas_brechos" });
app.register(router_produto, { prefix: "/produtos" });
app.register(router_cliente, { prefix: "/clientes" });
app.register(router_categoria, { prefix: "/categorias" });
app.register(router_brecho, { prefix: "/brechos" });
app.register(router_chat, { prefix: "/chats" });
app.register(router_marca, { prefix: "/marcas" });
app.register(router_estoque, { prefix: "/estoque" });

export default app;