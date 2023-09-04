const patientsRouter = require('express').Router();
import patientServices from '../services/patientServices';

patientsRouter.get('/', async (_req: any, res: any) => {
    res.json(patientServices.removeSinFromPatients());
})

patientsRouter.post('/', async (req: any, res: any) => {
    const newUser = patientServices.createPatient(req.body);
    res.json(newUser);
})

module.exports = patientsRouter;