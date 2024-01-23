const express = require('express');
const route = require('./src/routes/routes.js');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use('/', route);

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
