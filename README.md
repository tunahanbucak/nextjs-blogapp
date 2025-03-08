# Next.js Blog App

Bu proje, modern bir blog platformu oluşturmak için geliştirilmiş bir Next.js uygulamasıdır. Kullanıcılar blog yazıları ekleyebilir, güncelleyebilir ve silebilir. Yetkilendirme süreci Kinde kullanılarak sağlanmıştır.

## 🚀 Canlı Demo

[Next.js Blog App](https://nextjs-blogapp-opal.vercel.app/)

## 🛠 Teknolojiler

- **Next.js** – React tabanlı bir framework
- **TypeScript** – Daha güvenli ve ölçeklenebilir bir kod yapısı
- **Tailwind CSS** – Modern ve esnek bir stil yapısı
- **Kinde Auth** – Kullanıcı kimlik doğrulama ve yetkilendirme
- **Prisma** – Veritabanı yönetimi
- **Neon** – PostgreSQL veritabanı hizmeti

## 📌 Özellikler

- Kullanıcı kimlik doğrulama (Kinde ile)
- Blog yazısı oluşturma
- Kullanıcı dostu arayüz
- PostgreSQL (Neon) ile veritabanı yönetimi

## 📦 Kurulum

### 1️⃣ Projeyi Klonla

```bash
git clone https://github.com/tunahanbucak/nextjs-blogapp.git
cd nextjs-blogapp
```

### 2️⃣ Bağımlılıkları Yükle

```bash
npm install  # veya npm install
```

### 3️⃣ Çevre Değişkenlerini Tanımla

`.env.local` dosyasını oluştur ve aşağıdaki değişkenleri ekle:

```env
KINDE_ISSUER_URL=YOUR_KINDE_ISSUER_URL
KINDE_CLIENT_ID=YOUR_KINDE_CLIENT_ID
KINDE_CLIENT_SECRET=YOUR_KINDE_CLIENT_SECRET
KINDE_REDIRECT_URI=http://localhost:3000/api/auth/callback
DATABASE_URL=YOUR_NEON_DATABASE_URL
```

### 4️⃣ Veritabanını Ayarla

```bash
npx prisma migrate dev  # veya yarn prisma migrate dev
```

### 5️⃣ Geliştirme Ortamında Çalıştır

```bash
npm run dev  # veya yarn dev
```
