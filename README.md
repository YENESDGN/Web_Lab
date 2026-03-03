# Web_Lab

Web Programlama Dersi Oluşturulmuş Repo.

## Lab Uygulamaları

Derste verilen lab uygulamaları branch şeklinde açılmıştır.

### Aktif Branch'ler

- **main**: Ana branch
- **Portfolio**: Portfolyo sitesi için oluşturulmuştur
- **lab-2**: LAB-2 Semantik HTML5 ve Erişilebilirlik Projesi

## LAB-2: Semantik HTML5 ve Erişilebilirlik

Bu branch, modern web standartlarına uygun semantik HTML5, erişilebilirlik özellikleri ve form validasyonu içeren bir portföy sitesi projesidir.

### Özellikler

- ✅ Semantik HTML5 yapısı
- ✅ WCAG 2.1 Level AA erişilebilirlik standartları
- ✅ ARIA etiketleri ve landmark'lar
- ✅ Klavye navigasyonu desteği
- ✅ Skip navigation linki
- ✅ Doğrulamalı iletişim formu
- ✅ Responsive CSS tasarımı
- ✅ Lighthouse optimizasyonu (90+ hedef)

### Kurulum

```bash
# Branch'e geç
git checkout lab-2

# Bağımlılıkları yükle
npm install

# Development server'ı başlat
npm run dev
```

### Proje Yapısı

```
Web_Lab/
├── src/
│   ├── index.html         # Ana portföy sayfası
│   ├── styles/
│   │   └── main.css       # CSS stilleri
│   └── assets/
│       └── images/        # Görseller için
├── package.json           # NPM yapılandırması
├── LAB-2.md              # Detaylı dokümantasyon
└── README.md             # Bu dosya
```

### Dokümantasyon

Detaylı uygulama adımları ve açıklamalar için [LAB-2.md](LAB-2.md) dosyasına bakın.

### Teknolojiler

- HTML5 (Semantik etiketler)
- CSS3 (Flexbox, Grid, Media Queries)
- ARIA (Accessible Rich Internet Applications)
- HTTP Server (Development)

### Erişilebilirlik Test

Projeyi Lighthouse ile test etmek için:

1. `npm run dev` ile projeyi başlat
2. Chrome DevTools → Lighthouse sekmesi
3. Accessibility kategorisini seç
4. "Analyze page load" çalıştır

Hedef: **90+ Erişilebilirlik Puanı**

---

**Geliştirici:** Web Developer  
**Ders:** Web Programlama  
**Proje:** LAB-2 Semantik HTML5 ve Erişilebilirlik
