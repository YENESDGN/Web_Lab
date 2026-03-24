import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

export default function Input({ id, label, ...rest }: InputProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", flex: 1 }}>
      {label && (
        <label htmlFor={id} style={{ fontSize: "0.875rem", fontWeight: 500, color: "#374151" }}>
          {label}
        </label>
      )}
      <input
        id={id}
        style={{
          padding: "0.5rem 0.75rem",
          borderRadius: "0.5rem",
          border: "1px solid #d1d5db",
          fontSize: "0.875rem",
          outline: "none",
          width: "100%",
          backgroundColor: "#ffffff",
          color: "#111827",
        }}
        {...rest}
      />
    </div>
  );
}
