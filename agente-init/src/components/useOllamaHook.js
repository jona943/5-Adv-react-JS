import { useState } from "react";

function useOllamaHook() {
    const [respuesta, setRespuesta] = useState("");
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    const enviarConsulta = async (pregunta) => {
        console.log("Enviado a Ollama: ", pregunta);

        setCargando(true);
        setRespuesta("")
        setError(null);

        try {
            const respuesta = await
                fetch("http://localhost:11434/api/generate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        model: "deepseek-r1:1.5b",
                        prompt: pregunta,
                        stream: true, // Envio de datos por parte
                    })
                })

            if (!respuesta.ok || !respuesta.body) {
                throw new Error("No se pudo conectar con Ollama o la respuesta esta vacia")
            }

            /*----------------------------------------------------------*/
            const lector = respuesta.body.getReader();
            const decodificador = new TextDecoder("utf-8");
            while (true) {
                const { value: valor, done: realizado } = await lector.read();
                // si -realizado- es true, significa que Ollama termino de hablar
                if (realizado) break;

                // Convercion de bytes del fragento actual a texto
                const fragmentoTexto = decodificador.decode(valor, { stream: true });

                /* -- Ollama envía cada fragmento como una línea JSON --
                                      Ejemplo:     
                       {"model":"deepseek-r1:1.5b",           
                        "response":"Hola","done":false} 

                A veces llegan varias líneas juntas, las separamos 
                por saltos de línea (\n)
                */
                const lineas = fragmentoTexto.split("\n");
                for (const linea of lineas) {
                    if (linea.trim() === "") continue; // Se ignoran las lineas vacias

                    try {
                        const objetoJSON = JSON.parse(linea);

                        if (objetoJSON.response) {
                            setRespuesta((prev) => prev + objetoJSON.response);
                        }
                    } catch (e) {
                        console.warn("Linea incompleta o error al parsear JSON")
                    }
                }
            }
            /*----------------------------------------------------------*/

        } catch (err) {
            console.log("Error: ", err);
            setError(err.message);
        } finally {
            setCargando(false); 
        }
    };
    return {
        enviarConsulta, respuesta, cargando, error
    }
}

export default useOllamaHook;