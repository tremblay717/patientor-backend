export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}

export interface Patient  {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: string,
    occupation: string,
    entries?:string[]
}


export type NO_SSN = Omit<Patient, 'ssn' | 'entries'>
export type NEW_PATIENT = Omit<Patient, 'id' | 'entries'>