import data from '../data/diagnoses';
import { Diagnosis } from "../interfaces/Diagnosis";

const diagnoses: Array<Diagnosis> = data;

const getDiagnoses = (): Diagnosis[] => {
    return diagnoses
}

export default {
    getDiagnoses
};
