import React from "react";

interface SectionProps {
  children?: React.ReactNode;
}
export function Section({ children }: SectionProps) {
  return <div className="py-20 px-20">{children}</div>;
}
