# LAB-2: Semantik HTML5, Erişilebilirlik (a11y) ve Form Temelleri

## Proje Hakkında

Bu proje, modern web standartlarına uygun semantik HTML5 yapısı, erişilebilirlik özellikleri ve form validasyonu içeren bir portföy sitesidir.

## Proje Yapısı

```
Web_Lab/
├── src/
│   ├── index.html           # Ana portföy sayfası
│   ├── styles/
│   │   └── main.css         # CSS stilleri
│   └── assets/
│       └── images/          # Görseller için klasör
├── package.json             # NPM yapılandırması
├── LAB-2.md                 # Bu dokümantasyon
└── README.md                # Proje açıklaması
```

## Kurulum ve Çalıştırma

### 1. Bağımlılıkları Yükle

```bash
npm install
```

### 2. Development Server'ı Başlat

```bash
npm run dev
```

Bu komut `http://localhost:8080` adresinde projeyi açacaktır.

## Uygulama Adımları

### ✅ Uygulama-1: Semantik İskelet Oluştur

Proje `src/index.html` dosyasında aşağıdaki semantik yapıyı içerir:

- `<header>` ile navigasyon menüsü
- `<nav aria-label="Ana navigasyon">` ile erişilebilir menü
- `<main id="main-content">` ana içerik alanı
- 3 ayrı `<section>` (hakkımda, projeler, iletişim)
- `<footer>` ile telif bilgileri ve sosyal medya linkleri

### ✅ Uygulama-2: Heading ve Alt Metin Kontrolü

**Başlık Hiyerarşisi:**
- `<h1>` ana başlık: "Web Developer Portföyü"
- `<h2>` bölüm başlıkları: "Hakkımda", "Projelerim", "İletişim"
- `<h3>` alt başlıklar: Teknolojiler listesi, proje adları

**Semantik Görsel Yapısı:**
- `<figure>` ve `<figcaption>` kullanımı
- Her görselde anlamlı `alt` metni
- Profil fotoğrafı için detaylı açıklama

### ✅ Uygulama-3: Tab Gezinme Testi ve ARIA Ekleme

**Erişilebilirlik Özellikleri:**

1. **Skip Navigation Link:**
```html
<a href="#main-content" class="skip-link">Ana içeriğe atla</a>
```
- Klavye kullanıcıları için navigasyonu atlama
- Focus aldığında görünür olur

2. **ARIA Etiketleri:**
- `aria-label="Ana navigasyon"` menü için
- `aria-describedby` form alanları için
- `role="alert"` hata mesajları için

3. **Focus Göstergesi:**
- CSS'te `outline: 2px solid #2563EB`
- Asla `outline: none` kullanılmadı
- Tüm interaktif elemanlarda görünür

### ✅ Uygulama-4: Doğrulamalı İletişim Formu

Form özellikleri:

**Ad Soyad Alanı:**
```html
<input type="text" id="name" name="name" required minlength="2" 
       aria-describedby="name-error" />
```

**E-posta Alanı:**
```html
<input type="email" id="email" name="email" required 
       aria-describedby="email-error" />
```

**Konu Seçimi:**
```html
<select id="subject" name="subject" required 
        aria-describedby="subject-error">
  <option value="">-- Seçiniz --</option>
  <option value="is">İş Teklifi</option>
  <option value="soru">Soru</option>
  <option value="oneri">Öneri</option>
</select>
```

**Mesaj Alanı:**
```html
<textarea id="message" name="message" rows="5" required minlength="10" 
          aria-describedby="message-error"></textarea>
```

**Hata Mesajları:**
```html
<small id="name-error" class="error-msg" role="alert"></small>
```

### ✅ Uygulama-5: Portföy Sayfasını Tamamla

**Tamamlanan Bölümler:**

1. **Header:**
   - Logo/başlık alanı
   - Navigasyon menüsü (Hakkımda, Projeler, İletişim)
   - Skip navigation linki

2. **Hakkımda Bölümü:**
   - Profil fotoğrafı (figure/figcaption)
   - Kısa tanıtım paragrafı
   - Kullanılan teknolojiler listesi (HTML5, CSS3, JavaScript, React, Node.js, Git)

3. **Projelerim Bölümü:**
   - 2 proje kartı (`<article>` etiketleriyle)
   - Her proje için: başlık, görsel, açıklama, kullanılan teknolojiler

4. **İletişim Bölümü:**
   - Tam doğrulamalı iletişim formu

5. **Footer:**
   - Telif hakkı bilgisi
   - Sosyal medya linkleri (GitHub, LinkedIn, E-posta)

### ✅ Uygulama-6: Temel CSS ile Stil Ver

**CSS Özellikleri:**

1. **Genel Sıfırlama:**
   - `box-sizing: border-box`
   - Margin ve padding sıfırlama

2. **Skip Link Stilleri:**
```css
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
}
.skip-link:focus { 
  top: 0; 
}
```

3. **Focus Göstergesi:**
```css
:focus { 
  outline: 2px solid #2563EB; 
  outline-offset: 2px; 
}
```

4. **Form Stilleri:**
   - Input, textarea, select stillendirme
   - Focus durumu vurgulama
   - Invalid state gösterimi
   - Error message stilleri

5. **Responsive Tasarım:**
   - Mobil cihazlar için medya sorguları
   - Esnek grid yapısı

### ✅ Uygulama-7: Lighthouse Raporu Oluştur

**Lighthouse Testi Adımları:**

1. Projeyi çalıştır:
```bash
npm run dev
```

2. Google Chrome'da aç: `http://localhost:8080`

3. DevTools'u aç (F12 veya sağ tık → Inspect)

4. **Lighthouse Sekmesi:**
   - Mode: Navigation
   - Device: Desktop veya Mobile
   - Categories: **Accessibility** işaretle

5. "Analyze page load" butonuna tıkla

6. **Hedef:** 90+ Erişilebilirlik Puanı

**Olası Düzeltmeler:**

- ✅ Tüm görsellerde `alt` metni var
- ✅ Başlık hiyerarşisi doğru (h1→h2→h3)
- ✅ ARIA etiketleri uygun şekilde kullanıldı
- ✅ Form alanları düzgün etiketlendi
- ✅ Renk kontrastı yeterli
- ✅ Focus göstergeleri aktif
- ✅ Klavye navigasyonu çalışıyor

**Kontrol Listesi:**

- [ ] Lighthouse testi çalıştırıldı mı?
- [ ] Erişilebilirlik puanı 90'ın üzerinde mi?
- [ ] Tüm hata ve uyarılar giderildi mi?
- [ ] Tab ile tüm elemanlara ulaşılabiliyor mu?
- [ ] Skip link çalışıyor mu?
- [ ] Form validasyonu aktif mi?

### ✅ Uygulama-8: Git ile Kaydet ve GitHub'a Yükle

**Git İşlemleri:**

1. **Branch Oluşturma:**
```bash
git checkout -b lab-2
```

2. **Dosyaları Ekleme ve Commit:**
```bash
git add src/index.html
git commit -m "feat: add semantic HTML portfolio structure"

git add src/styles/main.css
git commit -m "style: add base CSS and skip link"

git add package.json
git commit -m "chore: add package.json with dev server config"

git add LAB-2.md
git commit -m "docs: add LAB-2 documentation"
```

3. **GitHub'a Push:**
```bash
git push -u origin lab-2
```

## Teknik Detaylar

### Erişilebilirlik Standartları (WCAG 2.1 Level AA)

1. **Perceivable (Algılanabilir):**
   - Tüm görsellerde alternatif metin
   - Yeterli renk kontrastı
   - Semantik HTML yapısı

2. **Operable (Kullanılabilir):**
   - Klavye erişilebilirliği
   - Focus göstergeleri
   - Skip navigation linki

3. **Understandable (Anlaşılır):**
   - Tutarlı navigasyon
   - Form hata mesajları
   - Anlamlı bağlantı metinleri

4. **Robust (Sağlam):**
   - Geçerli HTML5
   - ARIA kullanımı
   - Cross-browser uyumluluk

### Semantik HTML5 Etiketleri Kullanımı

| Etiket | Kullanım Amacı |
|--------|---------------|
| `<header>` | Sayfa başlığı ve navigasyon |
| `<nav>` | Navigasyon menüsü |
| `<main>` | Ana içerik alanı |
| `<section>` | İçerik bölümleri |
| `<article>` | Bağımsız içerik parçaları (projeler) |
| `<figure>` | Görseller ve açıklamaları |
| `<figcaption>` | Görsel açıklaması |
| `<footer>` | Sayfa altbilgisi |

### Form Validasyon Özellikleri

| Öznitelik | Açıklama |
|-----------|----------|
| `required` | Zorunlu alan |
| `minlength` | Minimum karakter sayısı |
| `type="email"` | E-posta formatı kontrolü |
| `aria-describedby` | Hata mesajı bağlantısı |
| `role="alert"` | Ekran okuyucu bildirimi |
| `novalidate` | Tarayıcı varsayılan mesajlarını devre dışı bırak |

## Öğrenilen Konular

1. ✅ Semantik HTML5 yapısı oluşturma
2. ✅ WCAG 2.1 erişilebilirlik standartları
3. ✅ ARIA (Accessible Rich Internet Applications) kullanımı
4. ✅ Klavye navigasyonu ve focus yönetimi
5. ✅ HTML5 form validasyonu
6. ✅ Skip navigation pattern
7. ✅ Başlık hiyerarşisi
8. ✅ Alt text yazma best practices
9. ✅ Lighthouse erişilebilirlik testi
10. ✅ Git conventional commits

## Kaynaklar

- [MDN Web Docs - HTML Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM - Web Accessibility In Mind](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements)

## Sonraki Adımlar

- [ ] JavaScript ile form validasyonu ekleme
- [ ] Dinamik hata mesajları gösterme
- [ ] Responsive tasarımı iyileştirme
- [ ] Dark mode ekleme
- [ ] Animasyonlar ekleme (accessibility-safe)
- [ ] SEO optimizasyonu

## Notlar

- Görsel dosyaları `src/assets/images/` klasörüne eklenmeli
- Lighthouse testleri için gerçek görsel dosyaları kullanın
- Renk seçimlerinde kontrast oranına dikkat edin (4.5:1 minimum)
- ARIA kullanımında "HTML first" yaklaşımını tercih edin
- Focus göstergelerini asla kaldırmayın

---

**Proje Durumu:** ✅ Tamamlandı  
**Erişilebilirlik Hedefi:** 90+ Lighthouse Puanı  
**Branch:** lab-2  
**Son Güncelleme:** 2025
