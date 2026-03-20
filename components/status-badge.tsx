import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const statusClassMap: Record<string, string> = {
  Active: "border-emerald-400/20 bg-emerald-400/12 text-emerald-200",
  Watchlist: "border-amber-400/20 bg-amber-400/12 text-amber-200",
  New: "border-sky-400/20 bg-sky-400/12 text-sky-200",
  Processing: "border-sky-400/20 bg-sky-400/12 text-sky-200",
  "Ready to Ship": "border-violet-400/20 bg-violet-400/12 text-violet-200",
  Delayed: "border-rose-400/20 bg-rose-400/12 text-rose-200",
  Completed: "border-emerald-400/20 bg-emerald-400/12 text-emerald-200",
  High: "border-rose-400/20 bg-rose-400/12 text-rose-200",
  Medium: "border-amber-400/20 bg-amber-400/12 text-amber-200",
  Low: "border-white/15 bg-white/8 text-slate-200",
};

export function StatusBadge({ value }: { value: string }) {
  return (
    <Badge
      variant="outline"
      className={cn("justify-center rounded-full px-3 py-1", statusClassMap[value])}
    >
      {value}
    </Badge>
  );
}
