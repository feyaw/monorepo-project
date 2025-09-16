import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = (props) => (
  <input
    {...props}
    style={{
      width: "100%",
      padding: "8px 12px",
      borderRadius: "10px",
      border: "1px solid #e5e7eb"
    }}
  />
);
