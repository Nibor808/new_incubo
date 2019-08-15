'use strict';
import express from 'express';
import parser from 'body-parser';
import path from 'path';
import sendMail from './utils/send_mail';
import logger from './utils/logger';

global.logger = logger;

const port = process.env.PORT || 8888;
const app = express();
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(__dirname));

app.post('/sendmail', sendMail);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  logger.info(`Listening on ${port}`);
});
