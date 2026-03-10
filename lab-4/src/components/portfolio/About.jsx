import Card from '../ui/Card'

export default function About() {
  return (
    <section id="hakkimda" className="py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)] mb-8 border-b-4 border-[var(--color-secondary)] pb-3">
          Hakkımda
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <figure className="flex-shrink-0">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Web developer profil fotoğrafı - çalışma masasında bilgisayar karşısında" 
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
            <figcaption className="text-center mt-3 text-gray-600 dark:text-gray-400 italic">Yazılım Geliştirici</figcaption>
          </figure>
          <div className="flex-1">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Merhaba! Ben bir web geliştiriciyim ve modern web teknolojileri ile kullanıcı dostu uygulamalar geliştiriyorum.
              React, Tailwind CSS ve modern JavaScript framework'leri kullanarak responsive ve erişilebilir web uygulamaları oluşturuyorum.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Kullandığım Teknolojiler</h3>
            <div className="flex flex-wrap gap-2">
              {['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Node.js', 'Git & GitHub', 'Vite'].map((tech) => (
                <span 
                  key={tech}
                  className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity dark:bg-[var(--color-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
