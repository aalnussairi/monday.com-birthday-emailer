import { Router } from 'express';
import mondayRoutes from './monday.js';

const router = Router();

router.use(mondayRoutes);

export default router;
