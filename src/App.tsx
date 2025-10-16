import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"

function App() {


  return (
    <>
    <div className="container mx-auto mt-20">
      <h1 className='text-5xl font-bold text-center md:w-2/3 mx-auto'>
        Seguimiento de Pacientes {''}
        <span className="text-indigo-700">Veterinaria</span>
      </h1>

      <div className="mt-12 md:flex">
        <PatientForm />
        <PatientList />
      </div>
    </div>
   
    </>
  )
}

export default App
