import { useEffect, useState } from "react";
import { Menu } from "lucide-react"

import Sidebar from "./components/Sidebar"; 
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";

// Nuevos hooks 
import { usoChat } from "./components/ChatContext";
import useOllamaHook from "./components/useOllamaHook";

function App() {
  const {estado, despacho} = usoChat();
  const {enviarConsulta, respuesta, cargando, error} = useOllamaHook();

  const chatActivo = estado.chats.find(c => c.id === estado.chatActivoId);
  const mensajes = chatActivo ? chatActivo.mensaje : [];
  
  // Si no hay ningun chat en la app al cargar, creamos uno por defect
  useEffect(() => {
    if (estado.chats.length === 0) {
      despacho({ type: 'CREAR_CHAT'});
    }
  }, [estado.chats, despacho]);

  useEffect(() => {
    if (respuesta){
      despacho({
        type: 'ACTUALIZAR_BOT_MENSAJE',
        payload: respuesta
      });
    }
  }, [respuesta, despacho]);

  useEffect(() => {
    despacho({
      type: 'CARGANDO',
      payload: cargando
    });
  }, [cargando, despacho]);

  useEffect(() => {
    if (error){
      despacho({
        type:'ERROR',
        payload: error
      });
    }
  }, [error, despacho]);

  // Funcion para enviar mensaje
  const enviarMensaje = (text) => {
    despacho({
      type: 'AGREGAR_MENSAJE',
      payload: {text, sender: "user"}
    });
    enviarConsulta(text);
  }



  return (
    <div className="
    flex h-screen w-full bg-slate-950 
    text-slate-100 font-sans overflow-hidden">

      <Sidebar/>

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

        <MessageList messages={mensajes} loading={estado.cargando}/>

        <ChatInput onSendMessage={enviarMensaje}/>

      </main>
    </div>
  )
}

export default App;