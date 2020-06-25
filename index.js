import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const Bee = mongoose.model('Bee', { test: Number });

const app = express();

app.get('/', async (req, res) => {
  await new Bee({
    test: 453545
  }).save();
  const bees = await Bee.find();
  res.send(`HELLO! ${JSON.stringify(bees)}`);
});

app.listen(process.env.PORT);
