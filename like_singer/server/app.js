import express  from 'express';
import SingerRoutes from './routes/singer.routes';
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT ||  3000);

app.use(express.json())
app.use(cors());
app.use('/api/singers',SingerRoutes);

export default app;