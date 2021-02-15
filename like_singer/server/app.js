import express  from 'express';
import IndexRoutes from './routes/index';

const app = express();

app.set('port', process.env.PORT ||  3000);

app.use(IndexRoutes);

export default app;