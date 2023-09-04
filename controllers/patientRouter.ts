const patientsRouter = require('express').Router();
// const { response } = require('../app')
// import data from '../data/patients';
// import { Patient, NO_SSN } from "../interfaces/Patient";
import patientServices from '../services/patientServices'

patientsRouter.get('/', async (_req: any, res: any) => {
    const patientsWithoutSSN = patientServices.removeSinFromPatients();
    res.json(patientsWithoutSSN);
})

module.exports = patientsRouter;