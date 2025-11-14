# Appiq Telefon Mağazası Web Sitesi

İzmir Buca'da telefon satışı, alımı ve tamiri yapan Appiq mağazası için modern, tek sayfalık web sitesi.

## Özellikler

- 🎨 Apple benzeri modern ve şık tasarım
- 📱 Responsive tasarım (mobil uyumlu)
- 💬 WhatsApp ve telefon araması entegrasyonu
- 📰 Telefon dünyasından güncel haberler
- ❓ Sıkça Sorulan Sorular (SSS) bölümü
- ⚡ Next.js 14 ile yüksek performans

## Teknolojiler

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development modunda çalıştır
npm run dev

# Production build
npm run build

# Production modunda çalıştır
npm start
```

## Yapılandırma

`app/page.tsx` dosyasında WhatsApp ve telefon numaralarını güncelleyin:

```typescript
const whatsappNumber = "905551234567"; // Kendi numaranızı ekleyin
const phoneNumber = "+905551234567"; // Kendi numaranızı ekleyin
```

## Deployment

Bu proje Dokploy ile deploy edilmek üzere hazırlanmıştır. GitHub'a push edildikten sonra Dokploy üzerinden otomatik deploy yapılabilir.

## Lisans

© 2025 Appiq. Tüm hakları saklıdır.

