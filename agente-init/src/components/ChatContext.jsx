import { createContext, useContext, useReducer } from "react";

const initialState = {
    chats: [],
    chatActivoId: null,
    cargando: false,
    error: null
};

function chatReducer(estado, accion) {
    switch (accion.type) {
        case 'ACTUALIZAR_BOT_MENSAJE': {
            return {...estado, chats: estado.chats.map(chat => {
                if (chat.id === estado.chatActivoId){
                    const nuevosMensajes = [...chat.mensaje];
                    const ultimoIndex = nuevosMensajes.length - 1;
                    // Si el ultimo mensaje es del bot, lo actualizamos con la respuesta acumulada.
                    // Si no es del bot (es del usuario), agregamos el primer trozo del bot.
                    if (ultimoIndex >= 0 && nuevosMensajes[ultimoIndex].sender === 'bot'){
                        nuevosMensajes[ultimoIndex] = {
                            ...nuevosMensajes[ultimoIndex], text: accion.payload // texto acumulado
                        };
                    } else {
                        nuevosMensajes.push({
                            text: accion.payload, sender: 'bot'
                        });
                    }
                    return {
                        ...chat, mensaje: nuevosMensajes
                    };
                }
                return chat;
            })}
        };
        case 'CREAR_CHAT': {
            const nuevoChat = {
                id: Date.now().toString(),
                titulo: `Chat ${estado.chats.length + 1}`,
                mensaje: []
            };
            return {
                ...estado,
                chats: [...estado.chats, nuevoChat],
                chatActivoId: nuevoChat.id
            };
        }
        case 'SELECCIONAR_CHAT':
            return {
                ...estado,
                chatActivoId: accion.payload
            };
        case 'AGREGAR_MENSAJE':
            return {
                ...estado,
                chats: estado.chats.map(chat => {
                    if (chat.id === estado.chatActivoId) {
                        const actualizarTitulo = chat.mensaje.length === 0
                            ? (accion.payload.text.substring(0, 25) + '...') : chat.titulo;
                        return {
                            ...chat,
                            titulo: actualizarTitulo,
                            mensaje: [...chat.mensaje, accion.payload]
                        };
                    }
                    return chat;
                })
            };
        case 'CARGANDO':
            return {
                ...estado,
                cargando: accion.payload
            };
        case 'ERROR':
            return {
                ...estado,
                error: accion.payload
            };
        default:
            return estado
    }
}

const ContextoChat = createContext();

export function ChatProvedor({ children}) {
    const [ estado, despacho] = useReducer(chatReducer, initialState);
    return (
        <ContextoChat.Provider value={{ estado, despacho}}>
            {children}
        </ContextoChat.Provider>
    )
}

export function usoChat() {
    const contexto = useContext(ContextoChat);
    if (!contexto) {
        throw new Error('usoChat debe de usarse dentro de un ChatProvedor');
    }
    return contexto;
}

