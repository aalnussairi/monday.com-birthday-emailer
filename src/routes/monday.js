import { Router } from 'express';
import { executeAction } from '../controllers/mondayController.js';
import authMiddleware from '../middlewares/authentication.js';

const mondayRoutes = Router();

mondayRoutes.post('/execute_action', authMiddleware, executeAction);

export default mondayRoutes;
