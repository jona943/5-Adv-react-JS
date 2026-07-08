import { createContext, useState, useEffect, useContext } from 'react';

// 1. Creación del Contexto                                                                                                     
// Esta constante actúa como la "caja de datos" que compartirá la información del usuario.                                      
const UserContext = createContext(null);

// 2. Componente Proveedor (Provider)                                                                                           
// Este componente envolverá a toda nuestra aplicación (en App.jsx o main.jsx) para proveer el estado.                                     
export function UserProvider({ children }) {

    // A. Estado inicial con lectura diferida (Lazy Initial State)                                                                
    // En lugar de iniciar con null, ejecutamos una función que busca si ya hay un usuario guardado                               
    // en el almacenamiento del navegador (localStorage). Si existe, lo carga de inmediato.                                       
    const [user, setUser] = useState(() => {
        try {
            const saved = localStorage.getItem('user');
            return saved ? JSON.parse(saved) : null;
        } catch (error) {
            console.error("Error al leer el localStorage", error);
            return null;
        }
    });

    // B. Función de Login                                                                                                        
    // Recibe el email, extrae el nombre quitando el dominio (ej: 'juan@gmail.com' -> 'juan')                                     
    // y actualiza el estado.                                                                                                     
    const login = (email) => {
        const username = email.split('@')[0];
        setUser({
            email,
            name: username.charAt(0).toUpperCase() + username.slice(1), // Capitaliza la primera letra                                
        });
    };

    // C. Función de Logout                                                                                                       
    // Borra al usuario del estado estableciéndolo de nuevo en null.                                                              
    const logout = () => {
        setUser(null);
    };

    // D. Sincronización con localStorage (Efecto Secundario)                                                                     
    // Cada vez que el estado 'user' cambie (ya sea por login o logout), este useEffect se activa.                                
    // - Si user tiene datos: lo guardamos en formato JSON en el localStorage.                                                    
    // - Si user es null: lo eliminamos de la memoria para limpiar la sesión.                                                     
    useEffect(() => {
        try {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                localStorage.removeItem('user');
            }
        } catch (error) {
            console.error("Error al guardar en localStorage", error);
        }
    }, [user]); // Se ejecuta solo cuando cambia el estado 'user'                                                                 

    // E. Renderizado del Proveedor                                                                                               
    // Pasamos el usuario y las funciones en el objeto "value" para que estén disponibles.                                        
    // 'children' representa a todos los componentes hijos que estarán envueltos por este Provider.                               
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

// 3. Hook Personalizado (Custom Hook)                                                                                          
// En lugar de importar useContext(UserContext) en cada componente, solo importaremos useUser().                                
// Esto nos protege de usar el contexto fuera de su proveedor.                                                                  
export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser debe ser utilizado dentro de un UserProvider');
    }
    return context;
}
