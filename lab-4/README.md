# LAB-4: Tailwind CSS Üretken UI Component Yaklaşımı

## Proje Hakkında

LAB-4'te Vite + React + Tailwind CSS v4 kullanarak modern bir UI component kütüphanesi oluşturulmuştur. LAB-2 ve LAB-3'te geliştirilen statik HTML portföyü React component'lerine dönüştürülmüş, responsive tasarım, dark mode ve erişilebilirlik standartları korunmuştur.

## Proje Yapısı

```
lab-4/
├── src/
│   ├── components/
│   │   ├── ui/                    # UI Component Kütüphanesi
│   │   │   ├── Button.jsx        # 4 variant, 3 size, disabled
│   │   │   ├── Input.jsx         # error, help text, disabled
│   │   │   ├── Card.jsx          # elevated, outlined, filled
│   │   │   └── Alert.jsx         # 4 variant, dismissible
│   │   ├── portfolio/             # Portfolio Components
│   │   │   ├── Header.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   └── ThemeToggle.jsx       # Dark mode toggle
│   ├── pages/
│   │   ├── Portfolio.jsx          # Ana portföy sayfası
│   │   └── UIKit.jsx             # Component showcase
│   ├── App.jsx                    # Router setup
│   ├── main.jsx
│   └── index.css                  # Tailwind + @theme
├── vite.config.js
├── package.json
└── README.md                      # Bu dosya
```

## Kurulum ve Çalıştırma

### 1. Bağımlılıkları Yükle

```bash
cd lab-4
npm install
```

### 2. Development Server'ı Başlat

```bash
npm run dev
```

Proje `http://localhost:5173` adresinde açılacaktır.

### 3. Production Build

```bash
npm run build
npm run preview
```

## Teknolojiler

- **Vite**: Modern ve hızlı build tool
- **React 18**: UI framework
- **Tailwind CSS v4**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **@tailwindcss/vite**: Tailwind Vite plugin

## UI Component'leri

### 1. Button Component

**Dosya**: `src/components/ui/Button.jsx`

**Özellikler**:
- 4 Variant: `primary`, `secondary`, `danger`, `ghost`
- 3 Size: `sm`, `md`, `lg`
- Disabled state desteği
- Dark mode uyumlu
- Focus ring (erişilebilirlik)

**Kullanım**:
```jsx
<Button variant="primary" size="md">Click Me</Button>
<Button variant="danger" disabled>Disabled</Button>
```

### 2. Input Component

**Dosya**: `src/components/ui/Input.jsx`

**Özellikler**:
- Label desteği
- Error state ve mesajı
- Help text desteği
- Disabled state
- ARIA attributes (accessibility)
- Dark mode uyumlu

**Kullanım**:
```jsx
<Input 
  label="Email" 
  error="Invalid email"
  helpText="Enter your email"
/>
```

### 3. Card Component

**Dosya**: `src/components/ui/Card.jsx`

**Özellikler**:
- 3 Variant: `elevated` (shadow), `outlined` (border), `filled` (background)
- Hover effects
- Dark mode uyumlu

**Kullanım**:
```jsx
<Card variant="elevated">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### 4. Alert Component

**Dosya**: `src/components/ui/Alert.jsx`

**Özellikler**:
- 4 Variant: `info`, `success`, `warning`, `error`
- Dismissible (kapatılabilir)
- Icon desteği
- role="alert" (erişilebilirlik)
- Dark mode uyumlu

**Kullanım**:
```jsx
<Alert variant="success" dismissible>
  Operation completed successfully!
</Alert>
```

## Önemli Özellikler

### Dark Mode

**Implementasyon**:
- `@custom-variant dark (&:where(.dark, .dark *))` ile CSS'te tanımlandı
- `ThemeToggle` component ile toggle
- localStorage ile theme persistence
- Tüm component'lerde `dark:` prefix desteği

**Kullanım**:
```jsx
import ThemeToggle from './components/ThemeToggle'

<ThemeToggle />
```

### Design Tokens (@theme)

**Dosya**: `src/index.css`

LAB-3'ten taşınan design tokens Tailwind'in `@theme` direktifi ile tanımlandı:

```css
@theme {
  --color-primary: #1e3a8a;
  --color-secondary: #2563eb;
  --spacing-md: 1rem;
  /* ... diğer tokenlar */
}
```

### Responsive Tasarım

Tailwind'in mobile-first breakpoint'leri kullanıldı:

| Prefix | Breakpoint | Kullanım |
|--------|-----------|----------|
| `sm:` | 640px+ | Tablet portrait |
| `md:` | 768px+ | Tablet landscape |
| `lg:` | 1024px+ | Desktop |

**Örnek**:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
```

### Erişilebilirlik

- ✅ `focus:ring-2` tüm interactive element'lerde
- ✅ `aria-label` ve `aria-describedby` kullanımı
- ✅ `role="alert"` error mesajlarında
- ✅ Skip link (Portfolio Header'da)
- ✅ Semantic HTML korundu
- ✅ Keyboard navigation desteği

## Sayfalar

### Portfolio Sayfası

**Route**: `/`

LAB-2 ve LAB-3'teki portföy React'e taşındı:
- Header (sticky, responsive nav)
- About (flexbox layout, skill tags)
- Projects (grid layout, card components)
- Contact (form with validation)
- Footer (sosyal medya linkleri)

### UI Kit Sayfası

**Route**: `/ui-kit`

Tüm component'lerin showcase'i:
- Button variants (8+ örnek)
- Input states (4 örnek)
- Card variants (3 örnek)
- Alert types (4 örnek)
- Responsive grid demo
- Dark mode demo

## Tailwind CSS v4 Özellikleri

### @import direktifi

```css
@import "tailwindcss";
```

### @theme ile Custom Properties

LAB-3'teki CSS variables'ları Tailwind'e entegre ettik:

```css
@theme {
  --color-primary: #1e3a8a;
}

/* Kullanım */
className="bg-[var(--color-primary)]"
```

### @custom-variant

Dark mode için custom selector:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

## LAB-2 ve LAB-3'ten Farklılıklar

| Aspect | LAB-2/3 | LAB-4 |
|--------|---------|-------|
| Teknoloji | Static HTML + CSS | React + Tailwind |
| Stil Yaklaşımı | CSS dosyaları | Utility classes |
| Component | Yok | React components |
| State Management | Vanilla JS | React hooks |
| Dark Mode | Manuel CSS | Tailwind dark: |
| Build | http-server | Vite |

## Git İş Akışı

### Branch

```bash
git checkout -b Lab_4
```

### Commit Geçmişi

```bash
# 1. Initial setup
git commit -m "feat: initialize Vite + React + Tailwind CSS v4 project"

# 2. UI Components
git commit -m "feat: add Button, Input, Card, Alert components"

# 3. Dark mode
git commit -m "feat: implement dark mode with ThemeToggle"

# 4. Portfolio
git commit -m "feat: convert LAB-2/LAB-3 portfolio to React"

# 5. UI Kit
git commit -m "feat: add UI Kit showcase page"

# 6. Documentation
git commit -m "docs: add LAB-4 comprehensive documentation"
```

## Teslim Kontrol Listesi

### Kurulum ✅
- [x] Vite + React çalışıyor
- [x] Tailwind CSS v4 kurulu
- [x] `@theme` ile custom renkler
- [x] Hot reload aktif

### UI Components ✅
- [x] **Button**: 4 variant + 3 size + disabled
- [x] **Input**: Normal, error, help text, disabled
- [x] **Card**: 3 variant (elevated, outlined, filled)
- [x] **Alert**: 4 variant + dismissible

### Özellikler ✅
- [x] **Dark Mode**: Toggle + localStorage
- [x] **Responsive**: `sm:`, `md:`, `lg:` kullanıldı
- [x] **Erişilebilirlik**: `focus:ring`, `aria-*`, `role="alert"`

### Sayfalar ✅
- [x] **Portfolio**: LAB-2/LAB-3'ten React'e taşındı
- [x] **UI Kit**: 8+ component varyantı

### Git ✅
- [x] Lab_4 branch
- [x] Anlamlı commitler
- [x] GitHub'a push hazır

## Öğrenilen Konular

1. ✅ Tailwind CSS v4 kurulumu ve yapılandırması
2. ✅ @theme direktifi ile design tokens
3. ✅ @custom-variant ile dark mode
4. ✅ Utility-first CSS yaklaşımı
5. ✅ React component library oluşturma
6. ✅ Props ve variant pattern
7. ✅ React Router ile routing
8. ✅ Responsive prefix'ler (sm:, md:, lg:)
9. ✅ Tailwind dark mode strategy
10. ✅ Component-driven development

## Kaynaklar

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [LAB-2 Documentation](../LAB-2.md)
- [LAB-3 Documentation](../LAB-3.md)

## Sonraki Adımlar

- [ ] Daha fazla component ekle (Badge, Modal, Dropdown)
- [ ] Component prop types (TypeScript)
- [ ] Storybook entegrasyonu
- [ ] Component testing (Vitest)
- [ ] Animation ve transitions
- [ ] Accessibility audit tool

---

**Proje Durumu**: ✅ Tamamlandı  
**Branch**: Lab_4  
**Framework**: React + Tailwind CSS v4  
**Tarih**: 2025
