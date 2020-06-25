import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('HELLO!'));

app.listen(process.env.PORT ?? 3000);
