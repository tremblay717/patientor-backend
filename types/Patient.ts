export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

interface Discharge  {
    date:string,
    criteria:string
}

interface SickLeave {
    startDate: string,
    endDate: string,
}

//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
    id: string,
    date: string,
    specialist: string,
    type: string,
    description: string,
    employerName?:string,
    diagnosisCodes?:string[],
    healthCheckRating?: number,
    discharge?:Discharge,
    sickLeave?: SickLeave
}

export interface Patient  {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: string,
    occupation: string,
    entries:Entry[]
}


export type NO_SSN = Omit<Patient, 'ssn' | 'entries'>
export type NEW_PATIENT = Omit<Patient, 'id' | 'entries'>