export default function DashboardLayout({
  children,
  analytics,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
}
