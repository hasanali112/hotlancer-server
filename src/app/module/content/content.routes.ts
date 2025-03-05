import { Router } from 'express';
import { ContentController } from './content.controller';

const router = Router();

router.get('/get-content', ContentController.getAllContent);
router.post('/create-content', ContentController.createContent);

export const ContentRoutes = router;
