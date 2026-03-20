export type CustomerStatus = "Active" | "Watchlist" | "New";
export type OrderStatus = "Processing" | "Ready to Ship" | "Delayed" | "Completed";

export type Customer = {
  id: string;
  name: string;
  company: string;
  email: string;
  city: string;
  totalOrders: number;
  lifetimeValue: number;
  status: CustomerStatus;
  lastOrderDate: string;
};

export type Order = {
  id: string;
  customerId: string;
  customerName: string;
  channel: string;
  status: OrderStatus;
  total: number;
  items: number;
  priority: "Low" | "Medium" | "High";
  placedAt: string;
  eta: string;
};

export const dashboardMetrics = [
  {
    label: "Revenue this month",
    value: "$182.4K",
    delta: "+12.8%",
    note: "Driven by enterprise renewals and bundled hardware orders.",
  },
  {
    label: "Open orders",
    value: "128",
    delta: "+9 today",
    note: "Most orders are within the standard 48-hour processing target.",
  },
  {
    label: "Active customers",
    value: "64",
    delta: "+6.1%",
    note: "Customer retention is holding above the quarterly benchmark.",
  },
  {
    label: "Fulfillment confidence",
    value: "94%",
    delta: "+2.3%",
    note: "Warehouse throughput improved after route balancing last week.",
  },
];

export const customers: Customer[] = [
  {
    id: "CUST-1042",
    name: "Amara Ndlovu",
    company: "Northstar Retail",
    email: "amara@northstar-retail.com",
    city: "Johannesburg",
    totalOrders: 18,
    lifetimeValue: 28400,
    status: "Active",
    lastOrderDate: "Mar 18, 2026",
  },
  {
    id: "CUST-1051",
    name: "Luca Almeida",
    company: "Blue Atlas Logistics",
    email: "luca@blueatlas.io",
    city: "Maputo",
    totalOrders: 9,
    lifetimeValue: 15250,
    status: "Watchlist",
    lastOrderDate: "Mar 12, 2026",
  },
  {
    id: "CUST-1078",
    name: "Maya Chen",
    company: "Helio Commerce",
    email: "maya@heliocommerce.co",
    city: "Singapore",
    totalOrders: 24,
    lifetimeValue: 41780,
    status: "Active",
    lastOrderDate: "Mar 19, 2026",
  },
  {
    id: "CUST-1083",
    name: "Noah Mensah",
    company: "Cinder Labs",
    email: "noah@cinderlabs.dev",
    city: "Accra",
    totalOrders: 4,
    lifetimeValue: 6200,
    status: "New",
    lastOrderDate: "Mar 16, 2026",
  },
  {
    id: "CUST-1095",
    name: "Sara Ibrahim",
    company: "Opaline Studio",
    email: "sara@opaline.studio",
    city: "Cairo",
    totalOrders: 11,
    lifetimeValue: 19860,
    status: "Active",
    lastOrderDate: "Mar 20, 2026",
  },
];

export const orders: Order[] = [
  {
    id: "ORD-7821",
    customerId: "CUST-1042",
    customerName: "Amara Ndlovu",
    channel: "Enterprise",
    status: "Processing",
    total: 12450,
    items: 14,
    priority: "High",
    placedAt: "Mar 20, 2026",
    eta: "Mar 23, 2026",
  },
  {
    id: "ORD-7814",
    customerId: "CUST-1078",
    customerName: "Maya Chen",
    channel: "Online",
    status: "Ready to Ship",
    total: 8320,
    items: 6,
    priority: "Medium",
    placedAt: "Mar 19, 2026",
    eta: "Mar 22, 2026",
  },
  {
    id: "ORD-7799",
    customerId: "CUST-1051",
    customerName: "Luca Almeida",
    channel: "Partner",
    status: "Delayed",
    total: 4280,
    items: 4,
    priority: "High",
    placedAt: "Mar 17, 2026",
    eta: "Mar 24, 2026",
  },
  {
    id: "ORD-7788",
    customerId: "CUST-1095",
    customerName: "Sara Ibrahim",
    channel: "Online",
    status: "Completed",
    total: 6180,
    items: 8,
    priority: "Low",
    placedAt: "Mar 15, 2026",
    eta: "Delivered",
  },
  {
    id: "ORD-7771",
    customerId: "CUST-1083",
    customerName: "Noah Mensah",
    channel: "Direct",
    status: "Processing",
    total: 2950,
    items: 3,
    priority: "Medium",
    placedAt: "Mar 18, 2026",
    eta: "Mar 22, 2026",
  },
];

export const recentActivity = [
  {
    title: "Priority order escalated",
    description: "ORD-7799 was flagged for manual review after a carrier capacity change.",
    time: "18 min ago",
  },
  {
    title: "New customer onboarded",
    description: "Cinder Labs completed its first order and activated express shipping.",
    time: "42 min ago",
  },
  {
    title: "Warehouse sync completed",
    description: "Inventory counts and reserved stock were refreshed across all active SKUs.",
    time: "1 hr ago",
  },
];

export const orderDraftItems = [
  { name: "Pulse X Router", sku: "PXR-001", quantity: 4, price: 480 },
  { name: "Mesh Expansion Kit", sku: "MEK-240", quantity: 2, price: 320 },
  { name: "Priority Handling", sku: "SRV-FAST", quantity: 1, price: 180 },
];

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
