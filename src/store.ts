import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import type { DraftPatient, Patient } from './types'

type PatientState = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => { //Recibe ctualmente paciente sin id y retorna uno con id
    return {
        ...patient,
        id: uuidv4() //Genera un id unico
    }
}

export const usePatientStore = create<PatientState>((set, get) => ({
    patients: [],
    addPatient: (data) => {
        const newPatient = createPatient(data)
        set((state) => ({ //Recupera el estado actual
            patients: [...state.patients, newPatient]
        }))
    }
}))