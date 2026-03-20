import { PageHeader } from "@/components/page-header";

export default function NewOrderPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Create"
        title="New Order"
        description="Compose a new order with structured customer, shipping, and pricing details."
      />
    </div>
  );
}
