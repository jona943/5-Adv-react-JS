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

        {/* Usamos handleSubmit(onSubmit) para delegar 
        a React Hook Form el control del envío*/}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-slate-300 mb-1">
              Nombre completo
            </label>

            <input type="text" id="nombre" placeholder="Ej. Jonathan Medina"

              {...register("nombre",
                { required: "El nombre es obligatorio", minLength: { value: 3, message: "El nombre debe ser minimo de 3 caracteres", }, })}

              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 
              focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition"/>

            {/* Renderizado condicional si existe un error */}
            {errors.nombre && (<span className="text-red-400 text-xs mt-1 block font-medium">{errors.nombre.message}</span>)}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
              Correo Electronico
            </label>

            <input type="email" id="email" placeholder="correo@ejemplo.com"
              {...register("email", { required: "El correo electronico es obligatorio", pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "El formato no es valido" } })}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400 transition"
            />
            {/* Renderizado condicional */}
            {errors.email && (<span className="text-red-400 text-xs mt-1 block font-medium">
              {errors.email.message}
            </span>)}
          </div>

          {/* Boton de envio */}
          <button type="submit" className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-indigo-500/20 transition cursor-pointer">
            Enviar Formulario
          </button>

        </form>
      </div>
    </div>
  )
}

export default App;
