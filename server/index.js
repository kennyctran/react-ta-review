const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

module.exports = app;
