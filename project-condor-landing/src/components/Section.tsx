import React from "react";

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`flex py-10 px-10 ${className}`}>{children}</section>
  );
}
