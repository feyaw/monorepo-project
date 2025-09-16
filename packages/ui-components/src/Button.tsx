import * as React from "react";

export type ButtonProps = React.PropsWithChildren<{
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}>;

export const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button" }) => (
  <button
    type={type}
    style={{
      padding: "8px 16px",
      borderRadius: "10px",
      background: "#2563eb",
      color: "white",
      border: "none",
      fontWeight: 600,
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}
    onClick={onClick}
  >
    {children}
  </button>
);
