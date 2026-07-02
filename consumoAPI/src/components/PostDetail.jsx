function PostDetail({ post, onBack }) {
  return (
    // Contenedor con borde degradado muy fino y vivo (efecto premium minimalista)
    <div className="bg-gradient-to-tr from-emerald-500 via-teal-400 to-pink-500 p-[1px] rounded-2xl shadow-2xl max-w-xl mx-auto">
      <div className="bg-stone-950 rounded-[15px] p-6 sm:p-8">
        
        {/* Botón de volver con acento rosa */}
        <button 
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 text-stone-400 hover:text-pink-400 border border-stone-900 hover:border-pink-900 bg-stone-950 hover:bg-pink-950/10 py-2 px-4 rounded-xl transition-all font-semibold text-xs tracking-wider uppercase cursor-pointer"
        >
          &larr; Volver al listado
        </button>

        <article className="space-y-6">
          <header className="border-b border-stone-900 pb-4 space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full uppercase">
              Identificador: {post.id}
            </span>
            <h2 className="text-3xl font-black tracking-tight text-stone-100 mt-2">
              Detalle del Gatito
            </h2>
            <p className="text-stone-500 text-xs font-mono">
              Dimensiones: {post.width}px de ancho por {post.height}px de alto
            </p>
          </header>
          
          {/* Imagen encuadrada de forma minimalista */}
          <div className="overflow-hidden rounded-xl border border-stone-900 bg-stone-950 shadow-inner">
            <img 
              src={post.url} 
              alt={`Gatito ${post.id}`} 
              className="w-full h-auto object-cover max-h-[400px] transition-transform duration-500 hover:scale-102"
            />
          </div>
        </article>
        
      </div>
    </div>
  );
}

export default PostDetail;