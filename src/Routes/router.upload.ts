import { Router } from "express";
import multer from "multer";
import { upload_file } from "../Controllers/upload.controller";

const router_upload = Router();
const upload = multer({ dest: `uploads/`});

router_upload.post(`/upload`, upload.single(`file`), upload_file);

export default router_upload;