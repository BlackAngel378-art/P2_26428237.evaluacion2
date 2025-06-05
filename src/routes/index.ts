import { Router } from 'express';
import path from 'path';

const router = Router();

router.get('/', (req, res) => {
  res.render('index');
});

export default router;