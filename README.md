# 🚀 AI Agent Orchestrator: UI8 Landing Page Template

Welcome to the **AI Agent Orchestrator**, a premium, high-fidelity landing page template designed specifically for indie hackers, SaaS startups, and developers building autonomous agents.

This template is built on the **Neon Monolith** design system—a brutalist, cyberpunk aesthetic defined by intentional asymmetry, 0px border radiuses, deep space void backgrounds, and violent bursts of neon light.

## 🛠 Tech Stack

*   **Framework:** Next.js 16.2.4 (App Router)
*   **Styling:** Tailwind CSS v4 (with custom cyber variables)
*   **Animations:** Framer Motion
*   **3D Elements:** `@splinetool/react-spline`
*   **Icons:** Lucide React
*   **Typography:** Google Fonts (Inter, Space Grotesk, JetBrains Mono)
*   **Language:** TypeScript

---

## 💻 Getting Started

### 1. Installation

Clone the repository and install the dependencies using your preferred package manager (npm, yarn, pnpm, or bun):

```shell
npm install
```

### 2. Running the Development Server

Start the local Next.js development server:

```shell
npm run build && npm run start &
```
*(Or use the standard development command outlined in package.json)*

Open `http://localhost:3000` with your browser to see the result.

---

## 🎨 Customizing the Design System

The visual identity of this template is controlled via CSS variables in `src/app/globals.css`. You can easily change the core theme without touching individual components.

### Modifying Colors

Open `src/app/globals.css`. The primary neon colors are defined under the `@theme inline` directive:

*   `--color-primary-container: #00f0ff;` (The core Cyber Cyan)
*   `--color-secondary: #ffb3b2;` (The Neon Magenta accents)
*   `--color-tertiary-container: #33fb0a;` (The Matrix Green terminal logs)

Change these hex codes to instantly recolor buttons, borders, glows, and terminal outputs across the entire application.

### Updating the Spline 3D Scene

The 3D element in the Hero section is powered by Spline. By default, it uses a placeholder scene.

To use your own custom Spline scene:
1. Export your scene from the Spline Editor.
2. Copy the generated URL.
3. Open `src/components/3d/SplineHeroScene.tsx`.
4. Replace the `scene` prop URL inside the `<Spline />` component:

```tsx
<Spline scene="https://prod.spline.design/YOUR-URL-HERE/scene.splinecode" />
```

---

## 📂 Project Structure

*   `src/app/`: Core Next.js App Router files (`page.tsx`, `layout.tsx`, `globals.css`).
*   `src/components/ui/`: Reusable atomic UI elements (e.g., `GlowingButton.tsx`).
*   `src/components/sections/`: Large page sections (`HeroSection`, `TerminalSection`, `BentoGrid`, etc.).
*   `src/components/animations/`: Framer Motion wrapper components (e.g., `ScrollReveal.tsx`).
*   `src/components/3d/`: Spline wrapper and loading logic.
*   `src/lib/`: Utility functions (e.g., Tailwind class merging).

---

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Push your code to a GitHub repository, import it into Vercel, and deploy instantly. No additional configuration is required.

---

*Designed and developed for the future. Initialize your swarm.*
