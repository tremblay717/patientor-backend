import { Patient, NO_SSN, NEW_PATIENT } from "../types/Patient";
import { Gender } from "../types/Patient";
import data from '../data/patients';
import { v4 as uuidv4 } from 'uuid';

const patients:Patient[] = data;

const removeSinFromPatients = (filter?: Patient): NO_SSN[] => {

    if (filter) {
        const temporaryPatients:Patient[] = patients.filter(patient => patient.id === filter.id)
        return temporaryPatients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
            id, name, dateOfBirth, gender, occupation
        }))
    }
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id, name, dateOfBirth, gender, occupation
    }))
}


const isGender = (param: string): param is Gender => {
    return Object.values<string>(Gender).includes(param)
}

const createPatient = (body: NEW_PATIENT) => {

    const genderOk:boolean = isGender(body.gender);

    if(!genderOk) {
        return {'error':'gender'}
    }

     const obj = {
        id: uuidv4(),
        name: body.name,
        dateOfBirth: body.dateOfBirth,
        ssn: body.ssn,
        gender: body.gender,
        occupation: body.occupation,
        entries:[]
    }!;

    data.push(obj);
    return removeSinFromPatients(obj)[0]
}

const getPatient = (id:string) => {
    const patient:Patient = data.find(patient => patient.id === id)!;
    return patient
}

export default {
    removeSinFromPatients,
    createPatient,
    getPatient
};