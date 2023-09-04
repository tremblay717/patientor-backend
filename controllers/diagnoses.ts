const diagnosesRouter = require('express').Router();
// const { response } = require('../app')
import data from '../data/diagnoses';
import { Diagnosis } from "../interfaces/Diagnosis";

diagnosesRouter.get('/', async (_req:any, res:any) => {
    const diagnoses:Array<Diagnosis> = data;
    res.json(diagnoses);
})

module.exports = diagnosesRouter;


