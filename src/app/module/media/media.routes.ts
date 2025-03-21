import { Router } from 'express';
import { MediaController } from './media.controller';

const router = Router();

router.get('/', MediaController.getAllImagesFromDB);

router.post('/create-media', MediaController.createMedia);

export const MediaRoutes = router;
