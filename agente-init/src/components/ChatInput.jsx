import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizonal } from "lucide-react";

// ESQUEMA DE VALIDACION
const messageShema = z.object({
    text: z.string()
    .min(3, "El mensaje de tener al menos 3 caracteres")
    .min(150, "El mensaje es demaciado largo (max, 150c"),
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
        <footer>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/*Campo de entrada*/}
                    <input 
                    type="text" placeholder="Escribe tu mensaje a NubIA..."
                    {...register("text")}
                    />

                    {/*Boton de enviar*/}
                    <button type="submit">
                        <SendHorizontal/>
                    </button>

                </form>

                {/*Errores de validacion de Zod*/}
                {errors.text && (
                    <span>
                        {errors.text.message}
                    </span>
                )}

                <p>
                    El modelo local puede tardar unos segundos en razonar su respuesta
                </p>
            </div>
        </footer>
    ) 
}

export default ChatInput;