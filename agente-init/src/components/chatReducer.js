// Estado inicial                                                                                              
export const initialState = {
    chats: [],
    chatActivoId: null,
    cargando: false,
    error: null
};

// Función reductora pura                                                                                                       
export function chatReducer(estado, accion) {
    switch (accion.type) {
        case 'ACTUALIZAR_BOT_MENSAJE': {
            return {
                ...estado,
                chats: estado.chats.map(chat => {
                    if (chat.id === estado.chatActivoId) {
                        const nuevosMensajes = [...chat.mensaje];
                        const ultimoIndex = nuevosMensajes.length - 1;
                        if (ultimoIndex >= 0 && nuevosMensajes[ultimoIndex].sender === 'bot') {
                            nuevosMensajes[ultimoIndex] = {
                                ...nuevosMensajes[ultimoIndex], text: accion.payload
                            };
                        } else {
                            nuevosMensajes.push({
                                text: accion.payload, sender: 'bot'
                            });
                        }
                        return { ...chat, mensaje: nuevosMensajes };
                    }
                    return chat;
                })
            };
        }
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
            return estado;
    }
}