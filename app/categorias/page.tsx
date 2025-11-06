import { Suspense } from "react";
import CategoriasPageContent from "./page-content";

function CategoriasFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#01000b] via-[#050321] to-[#071637] text-white">
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-10 py-8 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-fuchsia-300/70">
          Carregando catálogo
        </span>
        <p className="max-w-sm text-sm text-slate-300">
          Estamos preparando as coleções de pods da 3Mpods. Aguarde só um instante.
        </p>
        <div className="h-1.5 w-40 overflow-hidden rounded-full bg-white/10">
          <span className="block h-full w-1/3 animate-pulse rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500" />
        </div>
      </div>
    </div>
  );
}

export default function CategoriasPage() {
  return (
    <Suspense fallback={<CategoriasFallback />}>
      <CategoriasPageContent />
    </Suspense>
  );
}
