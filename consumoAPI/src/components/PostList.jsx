function PostList({ posts, onSelectPost }) {
  if (posts.length === 0) {
    return <p className="text-center text-stone-500">No hay gatitos disponibles.</p>;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-stone-900 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-stone-250">
          Gatitos Disponibles
        </h2>
        <span className="text-xs font-mono font-semibold px-3 py-1 bg-emerald-950/50 text-emerald-400 rounded-full border border-emerald-900/30">
          {posts.length} Resultados
        </span>
      </div>
      
      {/* Grid responsivo de tarjetas (cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((cat) => (
          <div 
            key={cat.id} 
            onClick={() => onSelectPost(cat)}
            className="flex flex-col bg-stone-900/40 border border-stone-850 hover:border-emerald-500/40 rounded-2xl overflow-hidden cursor-pointer transition-all duration-350 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1.5 group"
          >
            {/* Imagen de la tarjeta */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-stone-950 border-b border-stone-850 relative">
              <img 
                src={cat.url} 
                alt={`Gatito ${cat.id}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 text-[10px] font-mono font-bold tracking-wider text-rose-300 bg-stone-950/90 px-2.5 py-0.5 rounded-md uppercase border border-stone-800">
                ID: {cat.id}
              </span>
            </div>
            
            {/* Cuerpo de la tarjeta */}
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-stone-300 group-hover:text-emerald-400 transition-colors">
                  Gatito de {cat.width} x {cat.height} px
                </h3>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-stone-400 font-semibold group-hover:text-emerald-400 transition-colors">
                  Ver detalles &rarr;
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;