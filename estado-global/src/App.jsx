import NavBar from './components/NavBar';
import PostList from './components/PostList';

function App() {
  return (
    <div className="app-container">
      {/* Barra de navegación global */}
      <NavBar />

      {/* Contenido principal del blog */}
      <main className="main-content">
        <PostList />
      </main>
    </div>
  );
}

export default App;