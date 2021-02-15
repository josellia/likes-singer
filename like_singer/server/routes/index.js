import { Router } from 'express';
const router = Router();

router.get('/singers', (req, res) => {
   res.send('Singers');
}); 

export default router;