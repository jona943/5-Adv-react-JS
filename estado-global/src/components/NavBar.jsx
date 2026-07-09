import { useState } from 'react';
import { useUser } from '../context/UserContext';

export default function NavBar() {
    // Consumimos el estado y funciones globales de nuestro contexto                                                              
    const { user, login, logout } = useUser();

    // Estados locales para controlar el modal y el formulario de inicio de sesión                                                
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [emailInput, setEmailInput] = useState('');

    // Maneja el envío del formulario                                                                                             
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (emailInput.trim()) {
            login(emailInput.trim()); // Llama a la función de login del contexto                                                     
            setEmailInput('');
            setIsModalOpen(false); // Cierra el modal                                                                                 
        }
    };

    return (
        <nav className="navbar">
            {/* Logotipo del Blog */}
            <div className="logo">
                <div className="logo-icon">✍️</div>
                <span>DevBlog</span>
            </div>

            {/* Sección derecha de navegación (Dinámica) */}
            <div className="nav-actions">
                {user ? (
                    // Si el usuario está logueado, muestra su perfil y el botón de salir                                                 
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div className="user-profile">
                            <img
                                src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${user.name}`}
                                alt="avatar"
                                className="avatar"
                            />
                            <span className="username">Hola, {user.name}</span>
                        </div>
                        <button className="btn btn-danger" onClick={logout}>
                            Cerrar Sesión
                        </button>
                    </div>
                ) : (
                    // Si no está logueado, muestra el botón para iniciar sesión                                                          
                    <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                        Iniciar Sesión
                    </button>
                )}
            </div>

            {/* Modal de Inicio de Sesión */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
                        <h2 className="modal-title">Iniciar Sesión</h2>

                        <form onSubmit={handleLoginSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input"
                                    placeholder="ejemplo@correo.com"
                                    value={emailInput}
                                    onChange={(e) => setEmailInput(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-actions">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancelar
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Ingresar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </nav>
    );
}
