import { useForm } from "react-hook-form";

function App() {
  // inicalizacion useForm
  const { register, handleSubmit, formState: { errors }, } = useForm();

  // Funcion de validacion de envio valido
  const onSubmit = (data) => {
    console.log(`Datos enviados: --> ${data}  <-- `);
    alert(`Datos enviados con exito: --> ${data} <-- `);
                                      // ${JSON.stringify(data)} --Convercion a string
  }

  return (
    <>
    {}
    </>
  )
}

export default App;