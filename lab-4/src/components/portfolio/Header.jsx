import ThemeToggle from '../ThemeToggle'

export default function Header() {
  return (
    <header className="bg-[var(--color-primary)] text-white sticky top-0 z-20 shadow-md dark:bg-[var(--color-secondary)]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:bg-[var(--color-primary)] focus:text-white focus:px-4 focus:py-2 focus:z-50">
        Ana içeriğe atla
      </a>
      <nav className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4" aria-label="Ana navigasyon">
        <div className="flex items-center gap-4">
          <h1 className="text-xl md:text-2xl font-bold">Web Developer Portföyü</h1>
          <ThemeToggle />
        </div>
        <ul className="flex flex-wrap gap-3 md:gap-6">
          <li><a href="#hakkimda" className="hover:underline transition-all">Hakkımda</a></li>
          <li><a href="#projeler" className="hover:underline transition-all">Projeler</a></li>
          <li><a href="#iletisim" className="hover:underline transition-all">İletişim</a></li>
        </ul>
      </nav>
    </header>
  )
}
