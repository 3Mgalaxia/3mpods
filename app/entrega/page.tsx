import { Suspense } from "react";
import EntregaPageContent from "./page-content";

function EntregaFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#01000b] via-[#060328] to-[#07183a] text-white">
      <div className="flex w-full max-w-sm flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-10 py-8 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-fuchsia-300/70">
          Preparando checkout
        </span>
        <p className="text-sm text-slate-300">
          Estamos carregando os detalhes da entrega. Só um instante.
        </p>
        <div className="h-1.5 w-36 overflow-hidden rounded-full bg-white/10">
          <span className="block h-full w-1/3 animate-pulse rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500" />
        </div>
      </div>
    </div>
  );
}

export default function EntregaPage() {
  return (
    <Suspense fallback={<EntregaFallback />}>
      <EntregaPageContent />
    </Suspense>
  );
}
