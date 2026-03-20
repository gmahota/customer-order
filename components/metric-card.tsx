import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type MetricCardProps = {
  label: string;
  value: string;
  delta: string;
  note: string;
};

export function MetricCard({ label, value, delta, note }: MetricCardProps) {
  return (
    <Card className="overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]">
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground">{label}</p>
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <p className="font-display text-3xl font-semibold tracking-tight text-white">
              {value}
            </p>
            <p className="mt-3 flex items-center gap-1 text-sm font-medium text-emerald-300">
              <ArrowUpRight className="h-4 w-4" />
              {delta}
            </p>
          </div>
        </div>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">{note}</p>
      </CardContent>
    </Card>
  );
}
