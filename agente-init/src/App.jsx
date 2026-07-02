import { useState } from "react";
import { Menu } from "lucide-react"

import Sidebar from "./components/Sidebar"; 
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";

function App() {
  // 
  const [messages, setMessages] = useState([
    { text: "¿Como configurar Ollama localmente?", sender: "user" },
    {text: "¡Hola! Para configurar Ollama de forma local, debes descargar la app desde su sitio oficial, abrir tu terminal y ejecutar el comando: 'ollama run deepseek-r1:1.5b'. ¿Te gustaría que detallemos los pasos?", sender: "bot"}
  ]);
  
  // Lista estatica de simulacion de chats
  const [historyChats] = useState([
    { title: "Configuraciones de Ollama"},
    { title: "Pueba de validacion Zod"}
  ]);
  
  // Estado para controlar cuando esta escribiendo el bot
  const [loading, setLoading] = useState(false);

  // Funcion orquestadora de mensajes
  const handleSendMessage = (text) => {
    // Agregar al estado mensaje de usuario
    setMessages((prev) => [...prev, {text, sender: "user"}]);
    // Activacion de anidacion
    setLoading(true);
    // Simulacio de respuesta de 1.5 seg
    setTimeout(() => {
      setMessages((prev) => [
        ...prev, {
          text: `Recibi tu mensaje: "${text}". proximamente lo conectaremos con Ollama Local`,
          sender: "bot"
        }
      ]);
      setLoading(false);
    }, 1500);
  }

  const handleNewChat = () => {
    setMessages([]); // Limpieza de pantalla para un nuevo chat    
  }

  return (
    <div className="
    flex h-screen w-full bg-slate-950 
    text-slate-100 font-sans overflow-hidden">

      <Sidebar chat={historyChats} onNewChat={handleNewChat}/>

      <main className="flex-1 flex flex-col h-full bg-slate-900">
        <header className="border-b border-indigo-400 bg-slate-800 backdrop-blur-md px-6
        py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <button className="md:hidden text-slate-400 hover:text-red-500 cursor-pointer">
              <Menu className="h-6 w-6"/>
            </button>
          <div>
            <h1 className="text-lg font-bold flex items-center gap-2 text-green-200">
              Asistente NubIA
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"/>
            </h1>
            <p className="text-xs text-orange-500">
              deepseek-r1:1.5b ° Local
            </p>
          </div>  
          </div>
        </header>

        <MessageList messages={messages} loading={loading}/>

        <ChatInput onSendMessage={handleSendMessage}/>

      </main>
    </div>
  )
}

export default App;