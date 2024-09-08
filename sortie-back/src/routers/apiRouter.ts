import express from 'express';
import { saveOutingDeclaration, getDayOutingDeclarations } from '@/controllers/OutingController';


export const apiRouter = express.Router();


apiRouter.get('/outing-declarations', getDayOutingDeclarations);
apiRouter.post('/outing-declarations', saveOutingDeclaration);