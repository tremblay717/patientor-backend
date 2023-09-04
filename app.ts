import express from 'express';
const app = express();
const morgan = require('morgan');
const diagnosesController = require('./controllers/diagnoses');

app.use(express.json());
app.use(morgan('tiny'));

app.get('/', (_req, res) => {
    res.send('GET / not defined');
});
app.use('/api/diagnoses', diagnosesController);

module.exports = app;