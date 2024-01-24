const express = require('express');
const mongoose = require('mongoose');
const route = require('./src/routes/routes.js');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use('/', route);

const port = process.env.PORT || 3000;

mongoose
  .connect(
    process.env.DB_URL,
  )
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
