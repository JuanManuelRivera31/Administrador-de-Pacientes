import { toast } from "react-toastify";
import type { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from '../store';

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({patient} : PatientDetailsProps) {
  
  const deletePatient = usePatientStore((state) => state.deletePacient);
  const getPatientById = usePatientStore((state) => state.getPatientById);
  
  const handleClick = () => {
    deletePatient(patient.id)
      toast('Paciente eliminado correctamente',{
        type: 'error'
      });
  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem
        label="ID"
        data={patient.id}
      />
      <PatientDetailItem
        label="Nombre"
        data={patient.name}
      />
      <PatientDetailItem
        label="Propietario"
        data={patient.caretaker}
      />
      <PatientDetailItem
        label="Email"
        data={patient.email}
      />
      <PatientDetailItem
        label="Fecha Alta"
        data={patient.date.toString()}
      />
      <PatientDetailItem
        label="Sintomas"
        data={patient.symptoms}
      />

      <div className="flex flex-col md:flex-row gap-3 justify-around mt-10">
        <button type="button" className="py-2 px-12 bg-indigo-500 hover:bg-indigo-700 text-white 
        font-bold uppercase rounded-lg"
        onClick={() => getPatientById(patient.id)}>
          Editar
        </button>

        <button 
          type="button" 
          className="py-2 px-12 bg-red-500 hover:bg-red-700 text-white 
                  font-bold uppercase rounded-lg"
          onClick={handleClick}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

