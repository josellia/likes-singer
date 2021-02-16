import express  from 'express';
import SingerRoutes from './routes/singer.routes';

const app = express();

app.set('port', process.env.PORT ||  3000);

app.use(express.json())

app.use('/api/singers',SingerRoutes);

export default app;