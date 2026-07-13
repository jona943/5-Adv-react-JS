import { createContext, useContext, useReducer } from "react";
// Importamos el reducer y el estado inicial del otro archivo
import { chatReducer, initialState } from "./chatReducer";

// creaccion de contexto
const ContextoChat = createContext();

// Componente provedor
export function ChatProvedor({ children}) {
    const [ estado, despacho] = useReducer(chatReducer, initialState);
    return (
        <ContextoChat.Provider value={{ estado, despacho}}>
            {children}
        </ContextoChat.Provider>
    )
}

// hook para consumir
export function usoChat() {
    const contexto = useContext(ContextoChat);
    if (!contexto) {
        throw new Error('usoChat debe de usarse dentro de un ChatProvedor');
    }
    return contexto;
}

