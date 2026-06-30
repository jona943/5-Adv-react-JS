import { Bot, User } from "lucide-react";

function MessageList({ messages = [], loadig = false}) {
    return (
        <section>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        {/*Icono de IA*/}
                        {msg.sender === "bot" && (
                            <div>
                                <Bot/>
                            </div>     
                        )}

                        {/*Globo de mensaje*/}
                        <div>
                            {msg.text}
                        </div>

                        {/*Icono de usuario*/}
                        {msg.sender === "user" && (
                            <div>
                                <User/>
                            </div>   
                        )}

                    </div>
                ))}

                {/*EFECTOS DE CARGANDO (Tres puntos simples))*/}
                {loading && (
                    <div>
                        <div>
                            <Bot/>
                        </div>

                        <div>
                            <span>°</span>
                            <span>°</span>
                            <span>°</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default MessageList; 