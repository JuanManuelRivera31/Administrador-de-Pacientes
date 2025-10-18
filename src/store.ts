import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import type { DraftPatient, Patient } from './types'

type PatientState = {
    patients: Patient[],
     activeId: string | null;  
    addPatient: (data: DraftPatient) => void
    deletePacient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => { //Recibe ctualmente paciente sin id y retorna uno con id
    return {
        ...patient,
        id: uuidv4() //Genera un id unico
    }
}

export const usePatientStore = create<PatientState>()(
    devtools((set) => ({
        patients: [],
        activeId: '',
        addPatient: (data) => {
            const newPatient = createPatient(data)
            set((state) => ({ //Recupera el estado actual
                patients: [...state.patients, newPatient]
            }))
        },
        deletePacient: (id) => {
            set((state) => ({
                patients: state.patients.filter( patient => patient.id !== id) //Trae todos los pacientes menos el que coincide con el id
            }))
        },
        getPatientById: (id) => {
            set(() => ({
                activeId: id
            }))
        },
        updatePatient: (data) => {
            set((state) => ({
                patients: state.patients.map( patient => //Iteramos sobre pacientes
                    patient.id === state.activeId //Identificamos el paciente a editar
                    ? { id: state.activeId, ...data } //Si el id coincide, actualiza el paciente con los nuevos datos ingresados por usuario
                    : patient //Si no coincide, retorna el paciente sin cambios
                ),
                activeId: '' //Limpia el activeId después de actualizar
            }))
        }
    })
))