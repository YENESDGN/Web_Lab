import type { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  variant?: "error" | "warning" | "success" | "info";
  title?: string;
}

export default function Alert({ children, variant = "info", title }: AlertProps) {
  const styles: Record<string, React.CSSProperties> = {
    error: { backgroundColor: "#fee2e2", borderColor: "#fca5a5", color: "#991b1b" },
    warning: { backgroundColor: "#fef9c3", borderColor: "#fde047", color: "#854d0e" },
    success: { backgroundColor: "#dcfce7", borderColor: "#86efac", color: "#166534" },
    info: { backgroundColor: "#dbeafe", borderColor: "#93c5fd", color: "#1e40af" },
  };

  return (
    <div
      role="alert"
      style={{
        padding: "1rem",
        borderRadius: "0.5rem",
        border: "1px solid",
        marginBottom: "1rem",
        ...styles[variant],
      }}
    >
      {title && <strong style={{ display: "block", marginBottom: "0.25rem" }}>{title}</strong>}
      {children}
    </div>
  );
}
