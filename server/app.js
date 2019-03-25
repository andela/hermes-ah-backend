import '@babel/polyfill';
import express from 'express';
import cors from'cors';
import db from './database/models/index';

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 2000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is listen on ${port}`);
  db.sequelize.sync();
});
