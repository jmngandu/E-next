import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Inner layout</h1>
      {children}
    </>
  );
}
