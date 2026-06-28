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
    // Contenedor principal
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-6">

      {/* Tarjeta del formulario "Card" */}
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
        {/* Titulo de la tarjeta */}
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-400">Formulario de pueba</h2>

        {/* Aqui ira mi etiqueta <form> */}
        <p className="text-center text-slate-400 text-sm">
          Contenedor listo
        </p>
        

      </div>
    </div>
  )
}

export default App;
