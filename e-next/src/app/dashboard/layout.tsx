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
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <div>{analytics}</div>
          <div>{revenue}</div>
        </div>
        <div>{notifications}</div>
      </div>
    </>
  );
}
