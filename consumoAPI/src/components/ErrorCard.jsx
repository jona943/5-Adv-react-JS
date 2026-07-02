export default function ErrorCard({ message, onRetry }) {
  return (
    <div className="bg-gradient-to-br from-rose-500 to-orange-500 p-[1px] rounded-2xl shadow-xl max-w-md mx-auto my-8">
      <div className="bg-stone-950 rounded-[15px] p-8 text-center">
        <div className="text-4xl mb-4">⚠️</div>
        <h3 className="text-stone-100 text-lg font-bold tracking-tight mb-2">
          Error de Conexión
        </h3>
        <p className="text-stone-400 mb-6 text-sm leading-relaxed">
          {message}
        </p>
        {onRetry && (
          <button 
            onClick={onRetry}
            className="w-full bg-gradient-to-r from-rose-500 to-orange-500 hover:opacity-90 text-white font-semibold py-2.5 px-6 rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer"
          >
            Reintentar petición
          </button>
        )}
      </div>
    </div>
  );
}