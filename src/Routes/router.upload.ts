import { Router } from "express";
import multer from "multer";
import { upload_file } from "../Controllers/upload.controller";
import { autenticar_token } from "../middlewares/auth.middleware";

const router_upload = Router();
const upload = multer({ dest: `uploads/`});

router_upload.use(autenticar_token);
router_upload.post(`/upload`, upload.single(`file`), upload_file);

export default router_upload;