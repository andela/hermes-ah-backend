import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from'cors';
import db from './database/models/index';


const app = express();

app.use(cors());
app.use(express.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 2000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is listen on ${port}`);
  db.sequelize.sync();
});