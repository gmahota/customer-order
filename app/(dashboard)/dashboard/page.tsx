import { PageHeader } from "@/components/page-header";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Overview"
        title="Dashboard"
        description="A high-signal control center for customer, order, and fulfillment activity."
      />
    </div>
  );
}
