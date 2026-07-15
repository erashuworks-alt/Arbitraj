Bu proje, kripto para/finansal arbitraj fırsatlarını yakalamak ve yönetmek için geliştirilmiş kapsamlı bir sistemdir. Temelinde modern bir web arayüzü ve arka planda çalışan dağıtık mikro servis benzeri işçiler (worker) barındırmaktadır.

İncelediğim arbitrage-prod (ve benzeri) klasörlerin içeriklerine ve package.json dosyasına göre projenin temel özellikleri şunlar:

🛠️ Kullanılan Teknolojiler
Frontend: Next.js 15, React, Tailwind CSS, Framer Motion (Animasyonlar için)
Backend: Next.js API Routes, Prisma ORM (Veritabanı yönetimi), Next-Auth (Kimlik doğrulama)
Arka Plan İşlemleri (Background Jobs): BullMQ ve ioredis (Redis tabanlı kuyruk yönetimi)
Dağıtık Servisler (TSX ile çalışan):
fetcher.ts: Piyasadan veri çeken servis.
sniper.ts: Arbitraj fırsatlarını kovalayan ve işlem (trade) giren servis.
risk-service.ts: Risk yönetimini sağlayan servis.
event-hub.ts: Olay yöneticisi, muhtemelen servisler arası iletişimi sağlıyor.
worker.ts: Genel amaçlı arka plan işlerini yürüten servis.
Sunucu Yönetimi: PM2 (ecosystem.config.js) kullanılarak üretim ortamında servislerin ayakta tutulması sağlanmış.
