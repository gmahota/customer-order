export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl rounded-3xl border border-white/10 bg-card/80 p-10 text-center shadow-2xl shadow-black/30 backdrop-blur">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Migration In Progress
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">
          Next.js foundation is ready
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          The Nuxt, Vuex, and Vuetify layers are being replaced with a clean
          app-router architecture, typed components, and a modern dark interface.
        </p>
      </div>
    </main>
  );
}
