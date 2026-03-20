export default function DashboardLoading() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="h-3 w-28 animate-pulse rounded-full bg-white/10" />
        <div className="h-12 w-72 animate-pulse rounded-full bg-white/10" />
        <div className="h-4 w-full max-w-2xl animate-pulse rounded-full bg-white/10" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-48 animate-pulse rounded-[28px] border border-white/10 bg-white/5"
          />
        ))}
      </div>
    </div>
  );
}
