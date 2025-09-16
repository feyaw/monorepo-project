import * as React from "react";

export const Card: React.FC<React.PropsWithChildren<{ title?: string }>> = ({ title, children }) => (
  <div style={{
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  }}>
    {title && <h3 style={{ marginTop: 0, marginBottom: 8 }}>{title}</h3>}
    {children}
  </div>
);
