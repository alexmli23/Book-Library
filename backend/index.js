import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoutes from './routes/bookRoute.js'
import cors from "cors"

const app = express();

app.use(express.json());

app.get('/', (request, response) =>{
    console.log(request);
    return response.status(234).send("Hi Alex here");
});

app.use('/books', booksRoutes)

app.use(cors)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });