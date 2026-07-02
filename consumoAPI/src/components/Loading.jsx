export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-24 space-y-6">
      {/* Spinner minimalista de doble color primaveral */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 border-4 border-stone-900 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-emerald-400 border-r-pink-400 rounded-full animate-spin"></div>
      </div>
      <p className="text-stone-500 text-sm font-semibold tracking-widest uppercase animate-pulse">
        Cargando gatitos...
      </p>
    </div>
  );
}