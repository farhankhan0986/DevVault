<div align="center">

# 🏗️ DevVault

**Personal Developer Portfolio — Engineered, Not Templated**

A full-stack developer portfolio built with Next.js 16, featuring an AI-powered chatbot, dynamic project showcases, dark/light theming, and smooth Framer Motion animations — all backed by MongoDB and deployed on Vercel.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![Groq](https://img.shields.io/badge/Groq-LLaMA_3.3_70B-FF6B35?style=flat-square)](https://groq.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://dev-vault-alpha.vercel.app)

[🌐 Live Demo](https://dev-vault-alpha.vercel.app) · [🐛 Report Bug](https://github.com/farhankhan0986/DevVault/issues) · [✨ Request Feature](https://github.com/farhankhan0986/DevVault/issues)

</div>

---

## 📖 About

**DevVault** is not a template-based portfolio — it's a fully engineered, full-stack web application designed to showcase real engineering thinking, backend-heavy skills, and a personal technical brand.

At its core, DevVault is a Next.js 16 App Router application with:
- An **AI-powered chatbot** ("AskFarhan") that acts as a digital representative, answering questions about skills, projects, and experience using **Groq's LLaMA 3.3 70B** with real-time streaming
- **Dynamic project detail pages** with slug-based routing, architecture breakdowns, and learning summaries
- **JWT-secured admin authentication** with MongoDB-backed user management
- **Dark/Light theme** support with system-preference detection
- **Smooth page transitions** powered by Framer Motion

### Why DevVault?

- 🤖 **AI-Powered** — An embedded chatbot that streams responses in real-time, making the portfolio interactive and recruiter-friendly
- 🏗️ **Engineered Architecture** — Built with Next.js App Router, API routes, MongoDB models, and JWT auth — not just a static HTML page
- 🎨 **Polished UI** — Gradient accents, ambient glows, responsive grid layouts, and Framer Motion animations
- 🔒 **Secure by Design** — Admin provisioning, bcrypt password hashing, and JWT-based access control
- ⚡ **Production-Ready** — Deployed on Vercel with optimized builds, SSR, and edge-compatible architecture

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 **AskFarhan AI Chatbot** | Embedded AI assistant powered by Groq (LLaMA 3.3 70B) with real-time streaming responses via Server-Sent Events |
| 🗂️ **Dynamic Project Pages** | Slug-based routing (`/projects/[slug]`) with detailed architecture, tech stack, features, and learnings for each project |
| 🌗 **Dark/Light Theme** | Seamless theme switching with `next-themes` and system-preference detection |
| ✨ **Framer Motion Animations** | Smooth scroll reveals, section transitions, and interactive UI effects |
| 🔐 **Admin Authentication** | JWT-based auth with bcrypt hashing and MongoDB user model (one-time admin provisioning) |
| 📱 **Fully Responsive** | Mobile-first design with collapsible navigation and adaptive grid layouts |
| 📊 **Project Showcase** | Filterable project cards with status badges, tech tags, and live/source links |
| 🎓 **Experience & Education** | Detailed timeline sections for work experience and academic background |
| 💡 **Skills Grid** | Categorized skills display with visual indicators |
| 📬 **Contact Section** | Direct email CTA with social links and trust badges |

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | [Next.js 16](https://nextjs.org) | App Router, SSR, API routes |
| **UI Library** | [React 19](https://react.dev) | Component-based UI with React Compiler support |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling with custom design tokens |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Scroll reveals, page transitions, interactive effects |
| **Database** | [MongoDB](https://www.mongodb.com) + [Mongoose](https://mongoosejs.com) | User model with role-based access |
| **AI / LLM** | [Groq API](https://groq.com) (LLaMA 3.3 70B) | Chatbot streaming responses via SSE |
| **Authentication** | [JWT](https://jwt.io) + [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | Secure admin login and token management |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) | Dark/light mode with system detection |
| **Icons** | [Lucide React](https://lucide.dev) + [React Icons](https://react-icons.github.io/react-icons/) | Consistent iconography |
| **Deployment** | [Vercel](https://vercel.com) | Edge-optimized hosting with CI/CD |

---

## 📁 Project Structure

```
DevVault/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.js          # AI chatbot API — Groq streaming endpoint
│   ├── components/
│   │   ├── About.js              # About section with highlights
│   │   ├── ChatWidget.js         # AI chatbot UI with streaming support
│   │   ├── Contact.js            # Contact CTA and social links
│   │   ├── Education.js          # Education timeline
│   │   ├── Experience.js         # Work experience timeline
│   │   ├── Footer.js             # Site footer with navigation
│   │   ├── Header.js             # Responsive navbar with scroll tracking
│   │   ├── Hero.js               # Landing hero section
│   │   ├── Projects.js           # Project cards grid
│   │   ├── Skills.js             # Skills categorization grid
│   │   ├── TrustBadges.js        # Credibility indicators
│   │   ├── theme-provider.jsx    # Dark/light theme context
│   │   └── theme-toggle.jsx      # Theme switch button
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.jsx          # Dynamic project detail pages
│   ├── globals.css               # Global styles & design tokens
│   ├── layout.js                 # Root layout with providers
│   ├── page.js                   # Home page composition
│   └── favicon.ico
├── lib/
│   ├── MotionClient.jsx          # Framer Motion client wrapper
│   ├── db.js                     # MongoDB connection utility
│   ├── farhan-context.js         # AI chatbot system prompt & context
│   └── jwt.js                    # JWT sign/verify utilities
├── models/
│   └── User.js                   # Mongoose user schema (admin roles)
├── public/
│   └── images/                   # Project screenshots & assets
├── seed.js                       # One-time admin user provisioning
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.mjs
├── package.json
└── README.md
```

---

## 🧠 Architecture Highlights

### AI Chatbot (AskFarhan)

```
User Message → POST /api/chat → Build Context → Groq API (stream: true) → SSE → Browser ReadableStream → Live UI
```

- **Conversation Memory** — Full message history sent with each request for context-aware responses
- **Streaming** — Server-Sent Events piped through a `ReadableStream` for word-by-word rendering
- **System Prompt** — Rich context file (`lib/farhan-context.js`) with career data, project details, and formatting rules
- **Model** — LLaMA 3.3 70B via Groq's LPU (500+ tokens/sec inference)

### Authentication Flow

```
seed.js (one-time) → bcrypt hash → MongoDB User → JWT sign → Protected routes
```

- No public signup — admin access is provisioned once via `seed.js`
- Role-based user model with `admin` and `user` enum

### Dynamic Project Pages

```
/projects/[slug] → Server Component → Project data lookup → Rendered detail page
```

- Each project has structured data: description, problem/solution, tech stack, architecture, features, and learnings
- SEO-friendly slug-based routing

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **MongoDB** database (local or cloud — [MongoDB Atlas](https://www.mongodb.com/atlas), [Railway](https://railway.app))
- **Groq API Key** — Free at [console.groq.com](https://console.groq.com)

### 1. Clone the Repository

```bash
git clone https://github.com/farhankhan0986/DevVault.git
cd DevVault
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/devvault
JWT_SECRET=your_super_secret_jwt_key
GROQ_API_KEY=gsk_your_groq_api_key_here
```

### 4. Provision Admin User (One-Time)

```bash
node seed.js
```

> ⚠️ **Important:** Update the credentials in `seed.js` before running. This creates the initial admin user in MongoDB.

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### 6. Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Configure environment variables in the Vercel dashboard:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `GROQ_API_KEY`
3. Deploy — Next.js is auto-detected

The live deployment is available at: **[dev-vault-alpha.vercel.app](https://dev-vault-alpha.vercel.app)**

---

## 🎯 Purpose

DevVault is built to:

- **Demonstrate real engineering thinking** — not a template, but an architected full-stack application
- **Showcase backend-heavy full-stack skills** — API design, auth flows, database modeling, AI integration
- **Act as a personal technical brand** — a living, interactive representation of capabilities
- **Serve as a foundation for future projects and experiments** — modular, extensible, production-ready

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available for reference and learning.

---

## 👤 Author

**Farhan Abid**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/farhan-abid-38967a259)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:farhankhan080304@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/farhankhan0986)

---

<div align="center">

**If you found this project interesting, please consider giving it a ⭐**

Built with 💜 by Farhan Abid

</div>
