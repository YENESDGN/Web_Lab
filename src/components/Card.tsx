import type { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  variant?: "default" | "elevated";
  image?: string;
  imageAlt?: string;
}

export default function Card({
  title,
  children,
  variant = "default",
  image,
  imageAlt,
}: CardProps) {
  const baseStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    borderRadius: "0.75rem",
    overflow: "hidden",
    border: "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const elevatedStyle: React.CSSProperties =
    variant === "elevated"
      ? { boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }
      : {};

  return (
    <div style={{ ...baseStyle, ...elevatedStyle }}>
      {image && (
        <div
          style={{
            height: "160px",
            background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3rem",
          }}
          aria-hidden="true"
        >
          🖼️
        </div>
      )}
      <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            color: "#111827",
          }}
        >
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
