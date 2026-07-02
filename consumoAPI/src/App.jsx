import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import ErrorCard from './components/ErrorCard';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  // 2. Función asíncrona para consumir la API de jsonplaceholder                                                               
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=20");

      // Lanzamos error si la respuesta no es exitosa (ej. status 404 o 500)                                                    
      if (!response.ok) {
        throw new Error("No se pudo conectar con el servidor.");
      }

      const data = await response.json();
      setPosts(data.slice(0, 20)); // Guardamos solo los primeros 20 posts                                                      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Apagamos el estado de carga al terminar (exitoso o con error)                                       
    }
  };

  // 3. useEffect para ejecutar la petición automáticamente al montar el componente                                             
  useEffect(() => {
    fetchPosts();
  }, []); // Array de dependencias vacío para ejecutarse una sola vez                                                           

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Práctica: Consumo de APIs con useEffect</h1>

      {/* RENDERIZADO CONDICIONAL DE LOS ESTADOS */}

      {/* Estado 1: Cargando */}
      {loading && <Loading />}

      {/* Estado 2: Error */}
      {!loading && error && <ErrorCard message={error} onRetry={fetchPosts} />}

      {/* Estado 3: Éxito (Listado) y Estado 4: Detalle */}
      {!loading && !error && (
        selectedPost ? (
          <PostDetail
            post={selectedPost}
            onBack={() => setSelectedPost(null)}
          />
        ) : (
          <PostList
            posts={posts}
            onSelectPost={setSelectedPost}
          />
        )
      )}
    </div>
  );

}

export default App;
