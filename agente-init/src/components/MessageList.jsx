   // src/components/MessageList.jsx                                                                                               
    import { Bot, User } from "lucide-react";                                                                                       
                                                                                                                                    
    function MessageList({ messages = [], loading = false }) {                                                                      
        return (                                                                                                                    
            <section className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-slate-800">                     
                <div className="space-y-4 max-w-3xl mx-auto">                                                                       
                    {messages.map((msg, index) => {                                                                                 
                        const isBot = msg.sender === "bot";                                                                         
                        return (                                                                                                    
                            <div                                                                                                    
                                key={index}                                                                                         
                                className={`flex gap-3 items-end ${isBot ? "justify-start" : "justify-end"}`}                       
                            >                                                                                                       
                                {/* Avatar de Bot (izquierda) */}                                                                   
                                {isBot && (                                                                                         
                                    <div className="h-8 w-8 rounded-full bg-indigo-950 border border-indigo-500/30 
                                    flex items-center justify-center text-indigo-400 shrink-0 shadow-sm">                                                                               
                                        <Bot className="h-4.5 w-4.5" />                                                             
                                    </div>                                                                                          
                                )}                                                                                                  
                                                                                                                                    
                                {/* Globo de mensaje */}                                                                            
                                <div className={`px-4 py-2.5 rounded-2xl shadow-sm text-sm leading-relaxed ${                       
                                    isBot                                                                                           
                                        ? "bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700/50 max-w-[75%] md:max-w-[70%]"                                                                                                                   
                                        : "bg-indigo-600 text-white rounded-tr-none max-w-[75%] md:max-w-[70%]"                     
                                }`}>                                                                                                
                                    {msg.text}                                                                                      
                                </div>                                                                                              
                                                                                                                                    
                                {/* Avatar de Usuario (derecha) */}                                                                 
                                {!isBot && (                                                                                        
                                    <div className="h-8 w-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 shadow-sm">                                                                                
                                        <User className="h-4.5 w-4.5" />                                                            
                                    </div>                                                                                          
                                )}                                                                                                  
                            </div>                                                                                                  
                        );                                                                                                          
                    })}                                                                                                             
                                                                                                                                    
                    {/* Efecto de cargando (Tres puntos rebotando en colores primaverales/índigo) */}                               
                    {loading && (                                                                                                   
                        <div className="flex gap-3 items-end justify-start">                                                        
                            <div className="h-8 w-8 rounded-full bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">                                                                                         
                                <Bot className="h-4.5 w-4.5" />                                                                     
                            </div>                                                                                                  
                                                                                                                                    
                            <div className="bg-slate-800 text-slate-100 rounded-2xl rounded-tl-none px-4 py-3 border border-slate-700/50 flex items-center gap-1.5 shadow-sm">                                                                                      
                                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce delay-100"></span>               
                                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce delay-200"></span>               
                                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce delay-300"></span>               
                            </div>                                                                                                  
                        </div>                                                                                                      
                    )}                                                                                                              
                </div>                                                                                                              
            </section>                                                                                                              
        );                                                                                                                          
    }                                                                                                                               
                                                                                                                                    
    export default MessageList;      