import { useState, useEffect } from "react";
import type { Project, Category, SortField, SortOrder } from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import Alert from "./components/Alert";

export default function App() {
  // --- STATE ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- VERİ ÇEKME ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Bilinmeyen hata"
        );
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- TÜRETİLMİŞ (DERIVED) VERİ ---
  const filtered = applyFilters(
    projects,
    search,
    category,
    sortField,
    sortOrder
  );

  const categories: (Category | "all")[] = [
    "all",
    "frontend",
    "fullstack",
    "backend",
  ];

  // --- UI ---
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "2rem 1rem",
      }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        {/* BAŞLIK */}
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "2rem",
          }}
        >
          Projelerim
        </h1>

        {/* HATA DURUMU */}
        {error && (
          <Alert variant="error" title="Hata">
            {error}
          </Alert>
        )}

        {/* FİLTRELER */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "2rem",
            alignItems: "flex-end",
          }}
        >
          <Input
            id="search"
            placeholder="Proje ara... (başlık, açıklama, teknoloji)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={category === cat ? "primary" : "ghost"}
                size="sm"
                onClick={() => setCategory(cat)}
              >
                {cat === "all" ? "Tümü" : cat}
              </Button>
            ))}
          </div>

          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <select
              value={sortField}
              onChange={(e) => setSortField(e.target.value as SortField)}
              style={{
                padding: "0.4rem 0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid #d1d5db",
                fontSize: "0.875rem",
                backgroundColor: "#ffffff",
                color: "#111827",
                cursor: "pointer",
              }}
            >
              <option value="year">Yıl</option>
              <option value="title">Başlık</option>
            </select>
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                setSortOrder((o) => (o === "asc" ? "desc" : "asc"))
              }
            >
              {sortOrder === "asc" ? "↑ Artan" : "↓ Azalan"}
            </Button>
          </div>
        </div>

        {/* YÜKLENİYOR */}
        {loading && (
          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
              fontSize: "1.125rem",
              marginTop: "3rem",
            }}
          >
            Yükleniyor...
          </p>
        )}

        {/* PROJE LİSTESİ */}
        {!loading && filtered.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
              fontSize: "1.125rem",
              marginTop: "3rem",
            }}
          >
            Eşleşen proje bulunamadı.
          </p>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((project) => (
            <Card
              key={project.id}
              variant="elevated"
              title={project.title}
              image={project.image}
              imageAlt={`${project.title} ekran görüntüsü`}
            >
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#4b5563",
                  marginBottom: "0.75rem",
                  lineHeight: 1.5,
                }}
              >
                {project.description}
              </p>

              {/* Teknoloji etiketleri */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.25rem",
                  marginBottom: "0.5rem",
                }}
              >
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      backgroundColor: "#dbeafe",
                      color: "#1e40af",
                      fontSize: "0.75rem",
                      padding: "0.125rem 0.5rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Yıl ve kategori */}
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#9ca3af",
                  marginTop: "auto",
                }}
              >
                {project.year} &middot; {project.category}
                {project.featured && (
                  <span
                    style={{
                      marginLeft: "0.5rem",
                      backgroundColor: "#fef9c3",
                      color: "#854d0e",
                      padding: "0.125rem 0.5rem",
                      borderRadius: "9999px",
                    }}
                  >
                    ⭐ Öne çıkan
                  </span>
                )}
              </p>

              {/* Bağlantılar */}
              {(project.demoUrl ?? project.sourceUrl) && (
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.75rem", color: "#2563eb" }}
                    >
                      Demo →
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.75rem", color: "#2563eb" }}
                    >
                      Kaynak kod →
                    </a>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* SONUÇ SAYISI */}
        {!loading && (
          <p
            style={{
              fontSize: "0.875rem",
              color: "#6b7280",
              marginTop: "1rem",
              textAlign: "center",
            }}
          >
            {filtered.length} / {projects.length} proje gösteriliyor
          </p>
        )}
      </div>
    </div>
  );
}
