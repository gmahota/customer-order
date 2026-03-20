import { PageHeader } from "@/components/page-header";

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Operations"
        title="Orders"
        description="Monitor pipeline throughput, high-value transactions, and delivery risk."
      />
    </div>
  );
}
