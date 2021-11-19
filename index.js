
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL = 'mongodb+srv://spikeuser:tz52smdcowBAIy2H@cluster0.9dtiq.mongodb.net/test';
const PORT = process.env.PORT|| 4001;

mongoose.connect(process.env.MONGODB_URL||CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
}
mongoose.set('useFindAndModify', false);
