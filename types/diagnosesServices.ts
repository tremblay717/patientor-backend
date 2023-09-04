import data from '../data/diagnoses';
import { Diagnosis } from "./Diagnosis";

const diagnoses: Array<Diagnosis> = data;

const getDiagnoses = (): Diagnosis[] => {
    return diagnoses
}

export default {
    getDiagnoses
};
