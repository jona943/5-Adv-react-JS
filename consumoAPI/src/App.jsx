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

  const fetchCats = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=20");
      if (!response.ok) {
        throw new Error("No se pudo conectar con el servidor de gatitos.");
      }

      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans p-6 sm:p-12 transition-colors duration-300">
      <header className="max-w-4xl mx-auto mb-12 text-center">
        {/* Título minimalista con gradiente primaveral muy vivo */}
        <h1 className="text-4.5xl sm:text-5.5xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-pink-400 bg-clip-text text-transparent">
          Práctica: Consumo de The Cat API
        </h1>
        <p className="text-stone-500 mt-2 text-sm font-medium tracking-wide uppercase">
          Estructura Limpia & Estilos Minimalistas
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        {loading && <Loading />}

        {!loading && error && <ErrorCard message={error} onRetry={fetchCats} />}

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
      </main>
    </div>
  );
}

export default App;
