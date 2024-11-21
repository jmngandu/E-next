import React, { Children } from "react";

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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{analytics}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  );
}

const letHe = ({
  children,
  analytics,
  revenues,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <h1>{children}</h1>
      <h2>{analytics}</h2>
      <h2>{revenues}</h2>
    </>
  );
};
