import express from 'express';
const app = express();

import dotEnv from 'dotenv';
dotEnv.config();

import bodyParser from 'body-parser';
app.use(bodyParser.json());

import Api from './routes';
app.use('/api', Api);



app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.HOST}:${process.env.PORT}`);
})