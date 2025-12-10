import { Types } from "mongoose";
import { ILogado } from "./ILogado.types";

declare module "fastify"{

    interface FastifyRequest {

        user?: ILogado;
    };
};

export interface GetId {

    id: Types.ObjectId;
};