![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-Blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF)
![License](https://img.shields.io/badge/License-MIT-green)

# 🔗 ShortLink SaaS

A modern URL Shortener SaaS built with **Next.js 16**, **Prisma**, **Clerk Authentication**, and **PostgreSQL (Neon)**. Easily create, manage, and track your shortened links through a clean dashboard.

## 🌐 Live Demo

👉 https://shortlink-saas-pro.vercel.app/

---

## ✨ Features

- 🔐 Secure Authentication (Clerk)
- 🔗 Short URL Generation
- ✏️ Edit Existing Links
- 🗑️ Delete Links
- 📋 One-click Copy Short URL
- 📱 QR Code Generator
- 🔍 Search Links
- 📄 Pagination
- ↕️ Sorting
- 🎯 Custom Alias Support
- ⏳ Link Expiration
- 👤 User-specific Dashboard
- 📊 Click Tracking
- 📱 Responsive Design

---

## 🛠️ Tech Stack

### Frontend
- Next.js 16 (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- TanStack Table
- React Hook Form
- Zod

### Backend
- Next.js Route Handlers
- Prisma ORM
- PostgreSQL (Neon)

### Authentication
- Clerk

### Deployment
- Vercel

---

## 📂 Folder Structure

```text
src/
│
├── app/
│   ├── api/
│   ├── dashboard/
│   ├── pricing/
│   ├── features/
│   ├── about/
│   ├── privacy/
│   ├── terms/
│   └── [shortCode]/
│
├── components/
│   ├── dashboard/
│   ├── navbar/
│   ├── footer/
│   ├── shared/
│   └── ui/
│
├── lib/
├── utils/
└── middleware.ts
```

---

## 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/your-username/shortlink-saas.git
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Run the project

```bash
npm run dev
```

---

## 📸 Screenshots

_Add screenshots of the Home Page and Dashboard here._

---

## 📌 Future Improvements

- Analytics Dashboard
- Custom Domain Support
- Password Protected Links
- Team Workspace
- API Access
- Dark Mode
- Link Tags & Categories

---

## 👨‍💻 Author

**MD Mosaiyeb Islam Meheraz**

- GitHub: https://github.com/meheraz1100
- LinkedIn: https://www.linkedin.com/in/dev-mosaiyebmeheraz/

---

## 📄 License

This project is licensed under the MIT License.