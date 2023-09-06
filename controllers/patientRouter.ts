const patientsRouter = require('express').Router();
import { Patient } from '../types/Patient';
import patientServices from '../services/patientServices';

// List all patients with SSN and entries removed
patientsRouter.get('/', async (_req: any, res: any) => {
    res.json(patientServices.removeSinFromPatients());
})

// List a specific patient
patientsRouter.get('/:id', async (req: any, res: any) => {
    const patient: Patient = patientServices.getPatient(req.params.id)!;
    if (!patient) {
        res.json({ 'error': 'Patient not found' });
    }
    res.json(patient);

})

// Add patient to database
patientsRouter.post('/', async (req: any, res: any) => {
    const newUser = patientServices.createPatient(req.body);
    res.json(newUser);
})

module.exports = patientsRouter;