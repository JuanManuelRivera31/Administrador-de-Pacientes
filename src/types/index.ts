export type Patient = {
    id: string;
    name: string;
    caretaker: string;
    email: string;
    date: Date;
    symptoms: string;
}

export type DraftPatient = Omit<Patient, 'id'>;
// Utility types permiten no volver a escribir todas las propiedades y omitar
//Nuevo type con todo a execpción del id