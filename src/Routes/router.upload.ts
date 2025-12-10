import { FastifyInstance } from "fastify";
import multer from "multer";
import { upload_file } from "../Controllers/upload.controller";
import { autenticar_token } from "../middlewares/auth.middleware";


export default async function router_upload(app: FastifyInstance) {

    app.post(`/upload`, { preHandler: autenticar_token }, upload_file);
};