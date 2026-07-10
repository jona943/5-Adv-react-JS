import { Bot, MessageSquarePlus } from "lucide-react";
import { usoChat } from "./ChatContext";

function Sidebar() {
    // Consumimos el contexto global 
    const { estado, despacho } = usoChat();
    return (
        <aside className="w-64 bg-slate-900 border-r
        border-slate-800 p-4 flex flex-col h-full 
        shrink-0">
            {/*Encabezado lateral*/}
            <div className="flex items-center gap-2 mb-6">
                <Bot className="text-indigo-400 h-6 w-6" /> {/* Icono de un bot */}
                <span className="font-bold text-lg text-indigo-300">NubIA-Seek</span>
            </div>

            {/*Boton de nuevo chat*/}
            <button onClick={() => despacho({
                type: 'CREAR_CHAT'
            })}
                className="flex items-center justify-center gap-2 w-full
            py-2.5 px-4 bg-orange-600 hover:bg-orange-500 
            active:bg-green-700 text-white font-semibold rounded-lg
            shadow-md cursor-pointer mb-6">
                <MessageSquarePlus /> {/* Icono de un chat */}
                <span>Nuevo Chat</span>
            </button>

            {/*Lista del Historial*/}
            <div className="flex-1 overflow-y-auto space-y-2">
                <p className="text-xs font-semibold text-slate-500 uppercase
                tracking-wider mb-2">
                    Historial
                </p>
                {/*Recorre el arreglo chat*/}
                {estado.chats.map((chat) => {
                    const esActivo = chat.id === estado.chatActivoId;
                    return (
                        <div key={chat.id} onClick={() => despacho({ type: 'SELECCIONAR_CHAT', payload: chat.id })}
                             className={`p-2 rounded-lg text-sm cursor-pointer transition border truncate ${
                                 esActivo 
                                     ? "bg-slate-800 text-green-300 border-green-500/30 font-medium" 
                                     : "text-slate-400 hover:bg-slate-800/50 hover:text-red-200 border-transparent"
                             }`}>
                            {chat.titulo}
                        </div>
                    );
                })}
            </div>

            {/*Footer lateral*/}
            <div className="pt-4 border-t border-slate-600 text-xs text-slate-400 text-center">
                Desarrollado con DEV.F - Jonathan Medina
            </div>
        </aside>
    )
}

export default Sidebar;