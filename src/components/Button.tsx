import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  style,
  ...rest
}: ButtonProps) {
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: "0.25rem 0.75rem", fontSize: "0.8rem" },
    md: { padding: "0.5rem 1rem", fontSize: "0.875rem" },
    lg: { padding: "0.75rem 1.5rem", fontSize: "1rem" },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: "#1e3a8a",
      color: "#ffffff",
      border: "1px solid #1e3a8a",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#374151",
      border: "1px solid #d1d5db",
    },
    secondary: {
      backgroundColor: "#e5e7eb",
      color: "#111827",
      border: "1px solid #d1d5db",
    },
  };

  return (
    <button
      style={{
        borderRadius: "0.5rem",
        cursor: "pointer",
        fontWeight: 500,
        transition: "opacity 0.15s",
        whiteSpace: "nowrap",
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
