import express from 'express';
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const diagnosesController = require('./controllers/diagnoses');
const patientsController = require('./controllers/patientRouter');

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static('build'));

app.get('/api/ping', (_req, res) => {
    res.send('pong');
});
app.use('/api/diagnoses', diagnosesController);
app.use('/api/patients', patientsController)
module.exports = app;


