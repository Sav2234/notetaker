const express = require('express');

// Import our modular routers for /notes and /feedback
const HTMLRouter = require('./htmlRoutes');
const notesRouter = require('./notes');


const app = express();

app.use('/htmlRoutes', HTMLRouter);
app.use('/notes', notesRouter);

module.exports = app;