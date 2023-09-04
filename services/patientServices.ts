import { Patient, NO_SSN } from "../types/Patient";
import data from '../data/patients';

const patients: Array<Patient> = data;

const removeSinFromPatients = (): NO_SSN[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id, name, dateOfBirth, gender, occupation
    }))
}

export default { 
    removeSinFromPatients 
};