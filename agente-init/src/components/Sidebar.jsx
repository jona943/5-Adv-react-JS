import { Bot, MessageSquarePlus } from "lucide-react";

function Sidebar({ chat = [], onNewChat }) {
    return (
        <aside>
            {/*Encabezado lateral*/}
            <div>
                <Bot/> {/* Icono de un bot */}
                <span>NubIA-Seek</span>
            </div>

            {/*Boton de nuevo chat*/}
            <button onClick={onNewChat}>
                <MessageSquarePlus/> {/* Icono de un chat */}
                <span>Nuevo Chat</span>
            </button>

            {/*Lista del Historial*/}
            <div>
                <p>Historial</p>
                {/*Recorre el arreglo chat*/}
                {chat.map((chat, index) => (
                    <div key={index}>
                        {chat.title}
                    </div>
                ))}
            </div>

            {/*Footer lateral*/}
            <div>
                Desarrollado con DEV.F - Jonathan Medina
            </div>
        </aside>
    )
}

export default Sidebar;