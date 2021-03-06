require('dotenv').config();
import express from 'express';
import cors from 'cors';
const app = express();

import article from './routes/article';
import articleSearch from './routes/articleSearch';
import author from './routes/author';
import ideology from './routes/ideology';
import publication from './routes/publication';
import publicationSearch from './routes/publicationSearch';
import review from './routes/review';
import section from './routes/section';
import trend from './routes/trend';

const corsConfig = {
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'X-CORS-TOKEN']
};

app.use((req, res, next) => {
  if (req.headers['x-cors-token'] === process.env.APIKEY || req.method === 'OPTIONS') {
    next();
  }
  else {
    res.status(400).send('MISSING CORS HEADER');
  }
});

app.use('/api', cors(corsConfig), article);
app.use('/api', cors(corsConfig), articleSearch);
app.use('/api', cors(corsConfig), author);
app.use('/api', cors(corsConfig), ideology);
app.use('/api', cors(corsConfig), publication);
app.use('/api', cors(corsConfig), publicationSearch);
app.use('/api', cors(corsConfig), review);
app.use('/api', cors(corsConfig), section);
app.use('/api', cors(corsConfig), trend);

app.listen(process.env.PORT, () => {
  console.log(
    `Server has been started on port: ${process.env.PORT}`
  )
});
