import express  from 'express';
import SingerRoutes from './routes/singer.routes';
import  cors  from 'cors';
import bodyParser from "body-parser";
import  multer from 'multer';
import path from 'path';

const app = express();

app.set('port', process.env.PORT ||  3000);

app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))

// app.use(multer({
//    dest:  
// }).single('image'))

app.use('/api/singers',SingerRoutes);

export default app;