import express  from 'express';
import SingerRoutes from './routes/singer.routes';
import  cors  from 'cors';
import bodyParser from "body-parser";


const app = express();

app.set('port', process.env.PORT ||  3000);

app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))




app.use('/api/singers',SingerRoutes);

export default app;