import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizontal } from "lucide-react";

// ESQUEMA DE VALIDACION
const messageShema = z.object({
    text: z.string()
    .min(3, "El mensaje de tener al menos 3 caracteres")
    .max(150, "El mensaje es demaciado largo (max, 150c"),
})

function ChatInput({
    onSendMessage
}) {
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors},} = useForm({
            resolver: zodResolver(messageShema),
        });                          
                                   
    const onSubmit = (data) => { 
        onSendMessage(data.text);  
        reset();                   
        };     
        
    return (
        <footer className="p-4 bg-slate-900 border-t border-slate-700 shrink-0">
            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="relative flex items-center">
                    {/*Campo de entrada*/}
                    <input 
                    type="text" placeholder="Escribe tu mensaje a NubIA..."
                    {...register("text")}
                    className="w-full bg-slate-800 focus:border-green-500 focus:ring-1
                    focus:ring-green-500 rounded-xl py-3 pl-4 pr-7 text-sm text-green-100
                    placeholder-green-400 outline-none transition-all"
                    />

                    {/*Boton de enviar*/}
                    <button 
                    type="submit"
                    className="absolute right-3 p-1 text-orange-500 hover:bg-slate-700 
                    rounded-lg transition-all cursor-pointer">
                        <SendHorizontal className="h-5.5 w-6"/>
                    </button>

                </form>

                {/*Errores de validacion de Zod*/}
                {errors.text && (
                    <span className="text-red-400 text-xs mt-2 px-1">
                        {errors.text.message}
                    </span>
                )}

                <p className="text-lime-200 text-center text-[12px] mt-2 tracking-wide">
                    El modelo local puede tardar unos segundos en razonar su respuesta
                </p>
            </div>
        </footer>
    ) 
}

export default ChatInput;