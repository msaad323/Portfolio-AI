# Mohd Saad | Full-Stack Engineer Portfolio

A premium, high-performance portfolio website built with modern technologies focusing on visual excellence, performance, and professional storytelling.

## 🚀 Key Features

- **Dynamic Experience Calculation**: Automatically calculates professional years of experience from June 2021.
- **Interactive Chronological Timeline**: A minimalist, alternating vertical timeline for the Experience section with "Show More" functionality and smooth GSAP-like animations using Framer Motion.
- **Bento Box Skills Layout**: A professional, grouped categorization of tech stack items using a responsive Bento-style grid.
- **Commercial-Grade Contact System**: Integrated with **Resend** and **Prisma** (PostgreSQL) for reliable lead capture and automated email notifications.
- **Premium Aesthetics**: Dark mode by default, featuring glassmorphism, subtle micro-animations, and a standardized symmetrical layout for an "unquestionable" professional feel.
- **SEO Optimized**: Fully configured metadata, OpenGraph tags, and sitemaps for maximum visibility.

## 🛠️ Tech Stack

- **Core**: [Next.js 14](https://nextjs.org/) (App Router), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [Prisma ORM](https://www.prisma.io/) with PostgreSQL
- **Email**: [Resend](https://resend.com/)
- **Validation**: [Zod](https://zod.dev/)

## 🏁 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- A PostgreSQL database (e.g., Vercel Postgres, Supabase, or Railway)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/msaad323/Portfolio-AI.git
   cd Portfolio-AI
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://..."
   RESEND_API_KEY="re_..."
   CONTACT_EMAIL="your-email@example.com"
   ```

4. Initialize the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

## 📄 License

Project by Mohd Saad. Built for professional representation. 
Built with ❤️ using Next.js.
