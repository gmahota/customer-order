import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency, orderDraftItems } from "@/lib/mock-data";

const subtotal = orderDraftItems.reduce(
  (sum, item) => sum + item.quantity * item.price,
  0,
);
const shipping = 240;
const total = subtotal + shipping;

export default function NewOrderPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Create"
        title="New Order"
        description="Compose a new order with structured customer, shipping, and pricing details."
      />

      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <Card>
          <CardHeader>
            <CardTitle>Order intake</CardTitle>
            <CardDescription>
              A production-ready form structure with mock values to model the new workflow.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="customer">Customer</Label>
                <Select id="customer" defaultValue="Northstar Retail">
                  <option>Northstar Retail</option>
                  <option>Blue Atlas Logistics</option>
                  <option>Helio Commerce</option>
                  <option>Cinder Labs</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="channel">Sales channel</Label>
                <Select id="channel" defaultValue="Enterprise">
                  <option>Enterprise</option>
                  <option>Direct</option>
                  <option>Online</option>
                  <option>Partner</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reference">Order reference</Label>
                <Input id="reference" defaultValue="PO-20481" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select id="priority" defaultValue="High">
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipping">Shipping method</Label>
                <Select id="shipping" defaultValue="Priority Air">
                  <option>Priority Air</option>
                  <option>Standard Freight</option>
                  <option>Courier</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="requested-date">Requested date</Label>
                <Input id="requested-date" type="date" defaultValue="2026-03-23" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="delivery-address">Delivery address</Label>
              <Input
                id="delivery-address"
                defaultValue="24 Meridian Road, Sandton, Johannesburg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Operational notes</Label>
              <Textarea
                id="notes"
                defaultValue="Include installation checklist, reserve stock from warehouse A3, and notify finance once the invoice is queued."
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button type="button">Submit order</Button>
              <Button type="button" variant="secondary">
                Save draft
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Draft summary</CardTitle>
              <CardDescription>
                Mock line items aligned with the selected account and channel.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {orderDraftItems.map((item) => (
                <div
                  key={item.sku}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-white">{item.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.sku}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.quantity} x {formatCurrency(item.price)}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Commercial totals</CardTitle>
              <CardDescription>
                Snapshot of the draft financials before submission.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Shipping</span>
                <span>{formatCurrency(shipping)}</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">Grand total</span>
                <span className="font-display text-2xl font-semibold text-white">
                  {formatCurrency(total)}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
