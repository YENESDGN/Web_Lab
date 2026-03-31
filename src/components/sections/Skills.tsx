const skills = [
  { name: "React", level: "İleri" },
  { name: "TypeScript", level: "İleri" },
  { name: "Tailwind CSS", level: "İleri" },
  { name: "Node.js", level: "Orta" },
  { name: "Next.js", level: "Orta" },
  { name: "Git & GitHub", level: "İleri" },
  { name: "MongoDB", level: "Orta" },
  { name: "PostgreSQL", level: "Orta" },
];

export default function Skills() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Yetenekler
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Kullandığım teknolojiler ve araçlar
        </p>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200
                px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200
                dark:hover:bg-blue-800 transition-colors"
            >
              {skill.name}
              <span className="ml-1 text-xs opacity-70">({skill.level})</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
