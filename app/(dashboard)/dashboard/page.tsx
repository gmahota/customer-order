import { MetricCard } from "@/components/metric-card";
import { PageHeader } from "@/components/page-header";
import { StatusBadge } from "@/components/status-badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboardMetrics, formatCurrency, orders, recentActivity } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Overview"
        title="Dashboard"
        description="A high-signal control center for customer, order, and fulfillment activity."
      />

      <section className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
        <Card>
          <CardHeader>
            <CardTitle>Pipeline momentum</CardTitle>
            <CardDescription>
              A quick view of high-value orders currently shaping this week&apos;s revenue.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {orders.slice(0, 4).map((order, index) => (
              <div
                key={order.id}
                className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 lg:grid-cols-[1.1fr_0.7fr_0.6fr]"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-medium text-white">{order.id}</p>
                    <StatusBadge value={order.status} />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {order.customerName} via {order.channel}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Order total
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {formatCurrency(order.total)}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Queue position
                  </p>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-[linear-gradient(90deg,#7c9cff,#8b5cf6)]"
                      style={{ width: `${90 - index * 18}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
            <CardDescription>
              Operational events worth attention before the next fulfillment window.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-white">{item.title}</p>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {item.time}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
