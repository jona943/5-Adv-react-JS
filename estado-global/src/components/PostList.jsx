import { useState } from 'react';
import { useUser } from '../context/UserContext';

// Publicaciones iniciales para que el blog no aparezca vacío al cargar                                                         
const INITIAL_POSTS = [
    {
        id: 1,
        title: 'Introducción a React 19 y Context API',
        category: 'React',
        body: 'El estado global con Context API nos ayuda a compartir datos entre componentes sin necesidad de pasar props a través de múltiples niveles. React 19 introduce mejoras de rendimiento increíbles.',
        author: 'Admin',
        date: '07 de Julio, 2026'
    },
    {
        id: 2,
        title: '¿Por qué evitar el Prop Drilling?',
        category: 'Arquitectura',
        body: 'Pasar propiedades a través de componentes que no las necesitan hace que nuestro código sea difícil de mantener y depurar. Context API soluciona esto proveyendo un canal directo.',
        author: 'Jona',
        date: '06 de Julio, 2026'
    }
];

export default function PostList() {
    // Consumimos el usuario del contexto                                                                                         
    const { user } = useUser();

    // Estados locales para los posts y para controlar el modal de creación                                                       
    const [posts, setPosts] = useState(INITIAL_POSTS);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Estados para el formulario del nuevo post                                                                                  
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('General');
    const [body, setBody] = useState('');

    // Agrega el nuevo post al estado local de publicaciones                                                                      
    const handleCreatePost = (e) => {
        e.preventDefault();
        if (!title.trim() || !body.trim()) return;

        const newPost = {
            id: Date.now(),
            title: title.trim(),
            category: category,
            body: body.trim(),
            author: user?.name || 'Invitado', // Autor tomado de la sesión del usuario                                                
            date: new Date().toLocaleDateString('es-ES', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        };

        setPosts([newPost, ...posts]); // Agrega el nuevo post al principio de la lista                                             
        setTitle('');
        setBody('');
        setCategory('General');
        setIsModalOpen(false); // Cierra el modal                                                                                   
    };

    return (
        <section className="blog-section">
            <div className="section-header">
                <h2 className="section-title">Publicaciones Recientes</h2>

                {/* RENDERIZADO CONDICIONAL: Solo mostramos el botón si el usuario existe (sesión activa) */}
                {user && (
                    <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                        + Nuevo Post
                    </button>
                )}
            </div>

            <div className="posts-grid">
                {posts.map((post) => (
                    <article key={post.id} className="post-card">
                        <div>
                            <span className="post-category">{post.category}</span>
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-body">{post.body}</p>
                        </div>

                        <div className="post-footer">
                            <div className="post-author">
                                <div
                                    className="post-author-avatar"
                                    style={{
                                        backgroundImage: `url(https://api.dicebear.com/7.x/adventurer/svg?seed=${post.author})`,
                                        backgroundSize: 'cover'
                                    }}
                                />
                                <span className="post-author-name">{post.author}</span>
                            </div>
                            <span className="post-date">{post.date}</span>
                        </div>
                    </article>
                ))}
            </div>

            {/* Modal para crear un nuevo post */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
                        <h2 className="modal-title">Nueva Publicación</h2>

                        <form onSubmit={handleCreatePost}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="post-title">Título</label>
                                <input
                                    type="text"
                                    id="post-title"
                                    className="form-input"
                                    placeholder="Título del post"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="post-category">Categoría</label>
                                <select
                                    id="post-category"
                                    className="form-input"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="General">General</option>
                                    <option value="React">React</option>
                                    <option value="CSS">CSS</option>
                                    <option value="Arquitectura">Arquitectura</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="post-body">Contenido</label>
                                <textarea
                                    id="post-body"
                                    className="form-textarea"
                                    placeholder="Escribe el contenido de tu publicación aquí..."
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
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
                                    Publicar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}