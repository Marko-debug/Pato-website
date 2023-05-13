import express from 'express';
import { validate } from "./middleware/validate";

import {
    createImageController,
    findImageController,
    findAllImagesController,
    deleteImageController,
} from "./image.controller";
import { createImageSchema } from "./image.schema";

const router = express.Router();
    
router
    .route("/")
    .get(findAllImagesController)
    .post(validate(createImageSchema), createImageController);
router
    .route("/:image_id")
    .get(findImageController)
    .delete(deleteImageController);

export default router;