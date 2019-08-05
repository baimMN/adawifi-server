require('dotenv').config();

const { env } = process;
const express = require('express');
const { validator } = require('mtr-validator');
const { database: db } = require('mtr-mysql');
const auth = require('mtr-auth');
const router = require('./routes/api');

const app = express();
app.enable('trust proxy');

// Middleware
app.use(auth);
app.use(express.urlencoded({ extended: false }));
app.use(validator());
app.use(router);

// Database
const { pool } = db;
pool.getConnection((err, conn) => {
  if (err) {
    console.log(`\x1b[31mError when connect to database ${env.DB_SCHEMA}@${env.DB_HOST}`); // eslint-disable-line no-console
    throw err;
  }
  console.log(`Listening on database ${env.DB_SCHEMA}@${env.DB_HOST}`); // eslint-disable-line no-console
  pool.releaseConnection(conn);
});

module.exports = app;
