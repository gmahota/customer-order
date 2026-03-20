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
import { customers, formatCurrency } from "@/lib/mock-data";

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="CRM"
        title="Customers"
        description="Track account health, status, and recent buying patterns."
        action={
          <Button asChild>
            <Link href="/orders/new">Create order</Link>
          </Button>
        }
      />

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Customer retention</p>
            <p className="mt-3 font-display text-3xl font-semibold text-white">91%</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Returning accounts stayed above target in the last 30 days.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Avg. lifetime value</p>
            <p className="mt-3 font-display text-3xl font-semibold text-white">$22.3K</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Enterprise and partner customers continue to lift blended value.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Accounts needing review</p>
            <p className="mt-3 font-display text-3xl font-semibold text-white">03</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Watchlist customers are mostly affected by delayed partner shipments.
            </p>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Customer directory</CardTitle>
          <CardDescription>
            Mock CRM records prepared for the new order workflow and account monitoring.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Lifetime value</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last order</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-white">{customer.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {customer.company} · {customer.email}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>{customer.city}</TableCell>
                  <TableCell>{customer.totalOrders}</TableCell>
                  <TableCell>{formatCurrency(customer.lifetimeValue)}</TableCell>
                  <TableCell>
                    <StatusBadge value={customer.status} />
                  </TableCell>
                  <TableCell>{customer.lastOrderDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
