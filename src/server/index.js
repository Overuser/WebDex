import express from 'express';
import { router } from './routes/routes.js';
import mongoose from 'mongoose';
import cors from 'cors'

const app = express();

app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}))
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})
app.use(express.json());
app.use('/api',router)
// app.use()

//connect to db
mongoose.connect('mongodb://127.0.0.1:27017/Webdex')
  .then(() => {
    mongoose.set('debug', true); // Enable query debugging
    app.listen(5000, () => {
      console.log('connected to DB & listing at port 5000');
    });
  })
  .catch((error) => console.error(error))
