# ✈️ Fly - API RESTful para Moda Sustentável

<img src="https://github.com/nicholas-sc-08/Projeto-SA-4a-Modulo-SENAI/blob/main/Imagens%20do%20README/Banner%20Fly.png" alt="Banner Fly" width="100%"/>

<div style="margin-top: 10px"></div>

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/fly.circular/)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fly-circular-76a172352/?locale=pt_BR)

---

## 📖 Descrição do Projeto

O Fly é um aplicativo inovador que nasceu com o propósito de dar mais visibilidade aos brechós e facilitar a vida dos consumidores apaixonados pela moda sustentável. A plataforma permite que os usuários encontrem brechós e, através deles, descubram peças únicas, tornando possível fazer compras de forma prática e eficiente.

A ideia do Fly surgiu da experiência pessoal de um dos membros do nosso grupo de desenvolvedores. Sua mãe é dona de um brechó e, diariamente, enfrenta o desafio de alcançar novos clientes e tornar seu negócio mais conhecido. Essa realidade nos motivou a criar uma solução tecnológica que beneficie tanto pequenos empreendedores quanto consumidores que buscam alternativas mais acessíveis e ecológicas no mundo da moda.

Com isso, estamos desenvolvendo o Fly, um aplicativo pensado para conectar brechós a um público maior, incentivando o consumo consciente e valorizando peças cheias de história. Acreditamos que, com essa iniciativa, poderemos transformar a forma como as pessoas descobrem e interagem com o universo dos brechós.

---

## 🛠️ Stack Tecnológico

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TS-node](https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white)
![fastify](https://img.shields.io/badge/fastify-202020?style=for-the-badge&logo=fastify&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![next](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![jwt](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![socketio](https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white)
![axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-yellow?style=for-the-badge&logo=pnpm&logoColor=white)
![BabelConfig](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white)
![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=black)
![Windows Terminal](https://img.shields.io/badge/windows%20terminal-4D4D4D?style=for-the-badge&logo=windows%20terminal&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-090909?style=for-the-badge&logo=figma&logoColor=white)
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=black)
![Miro](https://img.shields.io/badge/Miro-050038?style=for-the-badge&logo=Miro&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=black)
![Microsoft Word](https://img.shields.io/badge/Microsoft_Word-2B579A?style=for-the-badge&logo=microsoft-word&logoColor=black)
![Whatsapp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

---

## ⚙️ Iniciar o Back-End

### Pré-requisitos
Certifique-se de ter o **Docker Desktop** e o **Git** instalados em sua máquina.

### 1. Variáveis de Ambiente (`.env`)
Crie o arquivo `.env` na raiz do projeto e insira as seguintes variáveis com suas respectivas chaves:

Insira no projeto as variáveis de ambiente do projeto no seu arquivo ```.env```

```bash
STRIPE_SECRET_KEY="_chave_secreta_do_stripe"
CLOUDINARY_API_KEY="sua_chave_da_api_do_cloudinary"
CLOUDINARY_API_SECRET="sua_chave_secreta_doapi_do_cloudinary"
CLOUDINARY_URL="url_do_cloudinary"
MONGO_URL="mongodb+srv://nome_do_admin:senha_do_admin@cluster0.dba5y1x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
PORT="8080"
JWT_SECRET="sua_chave_secreta_do_jwt"
GEMINI_API_KEY="sua_chave_secreta_do_gemini"
```

Após inserir as variáveis de ambiente na raíz do projeto, execute o comando docker:

```bash
docker compose up --build
```
<div style="margin-top: 20px"></div>

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TS-node](https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white)
![fastify](https://img.shields.io/badge/fastify-202020?style=for-the-badge&logo=fastify&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![next](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![jwt](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![socketio](https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white)
![axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-yellow?style=for-the-badge&logo=pnpm&logoColor=white)
![BabelConfig](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white)
![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=black)
![Windows Terminal](https://img.shields.io/badge/windows%20terminal-4D4D4D?style=for-the-badge&logo=windows%20terminal&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-090909?style=for-the-badge&logo=figma&logoColor=white)
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=black)
![Miro](https://img.shields.io/badge/Miro-050038?style=for-the-badge&logo=Miro&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=black)
![Microsoft Word](https://img.shields.io/badge/Microsoft_Word-2B579A?style=for-the-badge&logo=microsoft-word&logoColor=black)
![Whatsapp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

## Rotas de Requisições HTTP

| **Método** | **Endpoint** | **Descrição** | **Requer JWT** |
|--|--|--|--|
| **POST** | ```/auth/login``` | Rota para gerar o token JWT | **Não** |
| **POST** | ```/gemini/ai/generate``` | Rota para gerar a resposta feita pelo Gemini através do prompt | **Sim** |
| **POST** | ```/api/payments/create-checkout-session``` | Rota para ir ao caixa do cliente | **Sim** |
| **POST** | ```/api/payments/create-checkout-session-brecho``` | Rota para ir ao caixa do brechó | **Sim** |
| **GET** | ```/clientes``` | Busca todos os clientes no banco de dados | **Não** |
| **GET** | ```/clientes/id``` | Busca um único cliente pelo ID | **Sim** | 
| **POST** | ```/clientes``` | Registra um cliente no BDD | **Não** |
| **PUT** | ```/clientes/id```| Atualiza algum cliente no BDD | **Sim** |
| **DELETE** | ```/clientes/id``` | Deleta um registro dos clientes do BDD | **Sim** |
| **GET** | ```/brechos``` | Busca todos os registros dos brechós no BDD | **Não** | 
| **GET** | ```/brechos/id``` | Busca um único registro feito no BDD | **Sim** |
| **POST** | ```/brechos``` | Registra um Brechó no BDD | **Não** |
| **PUT** | ```/brechos/id``` | Atualiza um único registro no banco de um Brechó através do ID | **Sim** |
| **DELETE** | ```/brechos/id``` | Delete um único registro de um Brechó através do ID | **Sim** |
| **GET** | ```/enderecos``` | Busca todos os endereços | **Sim** |
| **GET** | ```/enderecos/id``` | Busca um único endereço pelo ID | **Sim** |
| **POST** | ```/enderecos``` | Registra um único endereço no BDD | **Não** |
| **PUT** | ```/enderecos/id``` | Atualiza um único endereço pelo ID | **Sim** |
| **DELETE** | ```/enderecos/id``` | Deleta um único endereço através do ID | **Sim** |
| **GET** | ```/produtos``` | Busca todos os produtos | **Não** |
| **GET** | ```/produtos/id``` | Busca um único produto pelo ID | **Sim** |
| **POST** | ```/produtos``` | Registra um único produto no BDD | **Sim** |
| **PUT** | ```/produtos/id``` | Atualiza um único produto pelo ID | **Sim** |
| **DELETE** | ```/produtos/id``` | Deleta um único produto através do ID | **Sim** |
| **GET** | ```/estoque``` | Busca todos os personalizados | **Não** |
| **GET** | ```/estoque/id``` | Busca um único personalizado pelo ID | **Não** |
| **POST** | ```/estoque``` | Registra um único personalizado no BDD | **Não** |
| **PUT** | ```/estoque/id``` | Atualiza um único personalizado pelo ID | **Não** |
| **DELETE** | ```/estoque/id``` | Deleta um único personallizado através do ID | **Não** |
| **GET** | ```/sacolas_brechos``` | Busca todos as sacolas dos brechós | **Sim** |
| **GET** | ```/sacolas_brechos/id``` | Busca uma única sacola do brechó pelo ID | **Sim** |
| **POST** | ```/sacolas_brechos``` | Registra uma única sacola do brechó no BDD | **Não** |
| **PUT** | ```/sacolas_brechos/id``` | Atualiza uma única sacola do brechó pelo ID | **Sim** |
| **DELETE** | ```/sacolas_brechos/id``` | Deleta uma única sacola do brechó através do ID | **Sim** |
| **GET** | ```/pedidos``` | Busca todos os pedidos | **Sim** |
| **GET** | ```/pedidos/id``` | Busca um único pedido pelo ID | **Sim** |
| **POST** | ```/pedidos``` | Registra um único pedido no BDD | **Não** |
| **PUT** | ```/pedidos/id``` | Atualiza um único pedido pelo ID | **Sim** |
| **DELETE** | ```/pedidos/id``` | Deleta um único pedido através do ID | **Sim** |
| **GET** | ```/marcas``` | Busca todos as marcas | **Não** |
| **GET** | ```/marcas/id``` | Busca uma única marca pelo ID | **Não** |
| **POST** | ```/marcas``` | Registra uma única marca no BDD | **Não** |
| **PUT** | ```/marcas/id``` | Atualiza uma única marca pelo ID | **Não** |
| **DELETE** | ```/marcas/id``` | Deleta uma única marca através do ID | **Não** |
| **GET** | ```/categorias``` | Busca todos as categorias | **Não** |
| **GET** | ```/categorias/id``` | Busca uma única categorias pelo ID | **Não** |
| **POST** | ```/categorias``` | Registra uma única categorias no BDD | **Não** |
| **PUT** | ```/categorias/id``` | Atualiza uma única categorias pelo ID | **Não** |
| **DELETE** | ```/categorias/id``` | Deleta uma única categorias através do ID | **Não** |
| **GET** | ```/chats``` | Busca todas as conversas | **Sim** |
| **GET** | ```/chats/id``` | Busca uma única mensagem pelo ID | **Sim** |
| **POST** | ```/chats``` | Registra uma única mensagem no BDD | **Não** |
| **PUT** | ```/chats/id``` | Atualiza uma única mensagem pelo ID | **Sim** |
| **DELETE** | ```/chats/id``` | Deleta uma única mensagem através do ID | **Sim** |

## 📄 Licença
Este projeto possuí a licença do MIT.