import { PageHeader } from "@/components/page-header";

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="CRM"
        title="Customers"
        description="Track account health, status, and recent buying patterns."
      />
    </div>
  );
}
