const patientsRouter = require('express').Router();
// const { response } = require('../app')
import data from '../data/patients';
import { Patient } from "../interfaces/Patient";

patientsRouter.get('/', async (_req: any, res: any) => {
    const patients: Array<Patient> = data;
    res.json(patients);
})

module.exports = patientsRouter;


