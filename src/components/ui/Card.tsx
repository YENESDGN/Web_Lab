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
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700
        overflow-hidden flex flex-col transition-all hover:shadow-lg
        ${variant === "elevated" ? "shadow-md" : ""}`}
    >
      {image && (
        <div
          className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600
            flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="text-4xl opacity-50">💻</span>
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
