import Card from '../ui/Card'

export default function Projects() {
  const projects = [
    {
      title: 'Stok Takip Sistemi',
      image: 'https://via.placeholder.com/600x400',
      description: 'İşletmeler için stok takip ve envanter yönetim uygulaması. Ürün girişi, çıkışı ve raporlama özellikleri içerir.',
      technologies: 'React, Node.js, MongoDB, Chart.js'
    },
    {
      title: 'Dizi-Film Arşivi',
      image: 'https://via.placeholder.com/600x400',
      description: 'Kişisel dizi ve film izleme takip uygulaması. İzleme listesi, değerlendirme ve öneri sistemleri.',
      technologies: 'Next.js, PostgreSQL, Tailwind CSS, TMDB API'
    }
  ]

  return (
    <section id="projeler" className="py-12 md:py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)] mb-8 border-b-4 border-[var(--color-secondary)] pb-3">
          Projelerim
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} variant="elevated" className="hover:scale-105 transition-transform">
              <figure className="mb-4">
                <img 
                  src={project.image} 
                  alt={`${project.title} ekran görüntüsü`}
                  className="w-full h-48 object-cover rounded-md"
                />
              </figure>
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong className="text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                  Teknolojiler:
                </strong> {project.technologies}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
