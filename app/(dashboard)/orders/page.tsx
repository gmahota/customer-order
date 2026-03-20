import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency, orders } from "@/lib/mock-data";

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Operations"
        title="Orders"
        description="Monitor pipeline throughput, high-value transactions, and delivery risk."
        action={
          <Button asChild>
            <Link href="/orders/new">New order</Link>
          </Button>
        }
      />

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Orders in motion</p>
            <p className="mt-3 font-display text-3xl font-semibold text-white">17</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Includes processing and ready-to-ship records across all channels.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Average order value</p>
            <p className="mt-3 font-display text-3xl font-semibold text-white">$6.8K</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Weighted heavily by enterprise replenishment bundles this week.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Orders at risk</p>
            <p className="mt-3 font-display text-3xl font-semibold text-white">01</p>
            <p className="mt-2 text-sm text-muted-foreground">
              A single delayed partner order needs manual intervention.
            </p>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Order pipeline</CardTitle>
          <CardDescription>
            Mock operational records showing the flow from placement to delivery.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Channel</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>ETA</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-white">{order.id}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Placed {order.placedAt}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{order.channel}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>{formatCurrency(order.total)}</TableCell>
                  <TableCell>
                    <StatusBadge value={order.status} />
                  </TableCell>
                  <TableCell>
                    <StatusBadge value={order.priority} />
                  </TableCell>
                  <TableCell>{order.eta}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
