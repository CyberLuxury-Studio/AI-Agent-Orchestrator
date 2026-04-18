# 🚀 Project Plan: AI Agent Orchestrator Landing Page

**Tech Stack:** Next.js 16.2.4 (App Router), Tailwind CSS, Framer Motion, Spline, TypeScript.
**Target Audience:** Indie Developers & SaaS Startups.
**Aesthetic:** Cyberpunk/Cyber (Neons, Darks, Glows, Terminal Effects, Nodes).

---

## 1. Project Structure (Next.js App Router)
```text
ai-agent-orchestrator/
├── public/
│   ├── assets/
│   │   ├── images/       # Static mockups, logos
│   │   └── models/       # Spline fallbacks/previews
│   └── fonts/            # Custom local fonts
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout (fonts, providers, global styles)
│   │   ├── page.tsx      # Landing page composition
│   │   ├── globals.css   # Tailwind directives & custom CSS variables
│   │   └── loading.tsx   # Global loading state
│   ├── components/
│   │   ├── ui/           # Reusable atomic components (Buttons, Badges)
│   │   ├── sections/     # Page sections (Hero, Features, Pricing)
│   │   ├── 3d/           # Spline wrapper components
│   │   └── animations/   # Framer Motion wrapper components
│   ├── lib/
│   │   ├── utils.ts      # Helper functions (e.g., cn for Tailwind classes)
│   │   └── constants.ts  # Site config, nav links, pricing data
│   └── hooks/            # Custom React hooks (e.g., useScroll, useMousePosition)
├── tailwind.config.ts    # Tailwind theme extensions (colors, glows, animations)
├── tsconfig.json
└── package.json
```

---

## 2. Design System
**Color Palette:**
*   **Backgrounds:** Deep Space Black (`#050505`), Void Violet (`#0B0B13`).
*   **Primary Accent:** Cyber Cyan (`#00F0FF`) - Used for primary buttons, active nodes, and glowing text.
*   **Secondary Accent:** Neon Magenta (`#FF003C`) - Used for warnings, terminal errors, and contrasting accents.
*   **Tertiary Accent:** Matrix Green (`#39FF14`) - Used for "success" states and terminal logs.
*   **Surface/Borders:** Dark Glass (`rgba(255, 255, 255, 0.05)`), Cybernetic Gray (`#1F1F2E`).

**Typography:**
*   **Headings/Display:** *Orbitron* or *Syncopate* (Geometric, futuristic, wide).
*   **Body:** *Inter* (Clean, highly legible for indie hackers/SaaS).
*   **Monospace/Terminal:** *Space Mono* or *JetBrains Mono* (For code snippets, terminal effects, and node IDs).

**Tailwind Utility Strategy:**
*   Extensive use of backdrop-blur (`backdrop-blur-md`, `bg-black/40`) for glassmorphism.
*   Custom drop-shadows and box-shadows in `tailwind.config.ts` for neon glows (e.g., `shadow-cyan-glow`).
*   Border gradients and radial gradient backgrounds for section transitions.

---

## 3. Section-by-Section Breakdown

### A. Navigation Bar (Sticky/Floating)
*   **Layout:** Floating pill-shaped glassmorphic navbar with logo (left), links (center), CTA (right).
*   **Animations:** Slide down on mount, subtle border glow on hover for links.

### B. Hero Section
*   **Layout:** Split-screen or centered overlay. Huge glowing headline, terminal-style typing subheadline, primary CTA, secondary "View Docs" button. Background features the Spline 3D Scene.
*   **Content:** "Orchestrate Autonomous Agents in the Void."
*   **Spline Usage:** Floating, interactive 3D nodes representing AI agents. Reacts to mouse movement.
*   **Animations:** Staggered fade-up for text. Spline scene fades in with a slight scale-up.

### C. Dashboard Mockup/Terminal Section
*   **Layout:** Centered, tilted 3D mockup of the dashboard.
*   **Content:** Static/animated mockup featuring visual node mapping, side panels, and terminal logs.
*   **Animations:** Framer Motion `useScroll` to un-tilt and scale up the dashboard as the user scrolls into view. Simulated typing effect inside the terminal window mockup.

### D. Features Section (Grid)
*   **Layout:** 3-column bento-box grid.
*   **Content:**
    1.  *Visual Node Mapping:* Mockup snippet showing interconnected nodes.
    2.  *Real-time Execution Logs:* Scrolling terminal log window.
    3.  *Autonomous Agent Routing:* Glowing paths between data points.
*   **Animations:** Cards reveal via scroll (Framer Motion `whileInView`). Hovering a card intensifies its specific neon border glow and triggers a micro-animation inside the card.

### E. Social Proof / Integrations
*   **Layout:** Infinite scrolling marquee of logos (OpenAI, Anthropic, HuggingFace, etc.) styled in monochrome/neon lines.

### F. Pricing Section
*   **Layout:** 2 or 3 tier cards. "Pro" tier highlighted with animated gradient borders.
*   **Content:** Free tier (Indie), Pro tier (SaaS), Enterprise.
*   **Animations:** Hover lifts the card slightly and casts a heavy neon shadow (`shadow-[0_0_30px_rgba(0,240,255,0.3)]`).

### G. Call to Action (CTA) & Footer
*   **Layout:** Massive centered typography, pulsating primary button. Minimal footer with matrix-style decorative borders.
*   **Animations:** Background pulsing radial gradient.

---

## 4. Animation Plan (Framer Motion)
*   **Variants:**
    *   `fadeUp`: `{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }`
    *   `staggerContainer`: `{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }`
    *   `glitchEffect`: Keyframe animation alternating opacity, slight x/y skews, and text-shadow colors (Cyan/Magenta) for occasional terminal text glitches.
*   **Scroll Triggers:** Heavy use of `viewport={{ once: true, margin: "-100px" }}` to ensure animations trigger naturally as users scroll down.

---

## 5. Spline Integration Plan
*   **Concept:** A dark, atmospheric 3D cluster of glowing orbs (nodes) connected by pulsating light lines (routing paths). When the user moves the mouse, the camera slightly shifts (parallax), and nodes closer to the cursor glow brighter.
*   **Implementation:** Use `@splinetool/react-spline`.
*   **Performance:**
    *   **Lazy Loading:** Wrap the Spline component in `next/dynamic` with `ssr: false`.
    *   **Fallback:** While Spline loads, display a high-quality WebP static image of the scene with a CSS pulse animation or a lightweight CSS-based particle background.
    *   **Optimization:** Keep Spline materials unlit/baked where possible, minimize polygon count, rely on bloom post-processing within Spline for the "neon" look rather than heavy real-time lighting.

---

## 6. Component Architecture
*   `SplineHeroScene.tsx`: Dynamically imported. Handles Spline rendering and loading states.
*   `TerminalTyper.tsx`: Props: `lines: string[]`, `speed: number`. Simulates typing logs with Matrix Green text.
*   `BentoCard.tsx`: Props: `title`, `description`, `icon`, `glowColor`. Handles the glassmorphic container and hover glow logic.
*   `GlowingButton.tsx`: Props: `variant ('primary' | 'secondary')`, `children`. Wraps standard buttons with animated neon drop-shadows.
*   `ScrollReveal.tsx`: Wrapper component using Framer Motion to apply standard scroll-based entry animations to children.

---

## 7. Performance Strategy
*   **Images:** All mockups exported as WebP and served via Next.js `<Image>` component for automatic sizing and optimization.
*   **Fonts:** Load `Inter`, `Orbitron`, and `Space Mono` via `next/font/google` to eliminate layout shift and block external requests.
*   **Code Splitting:** Spline is isolated and lazy-loaded. Heavy dashboard mockups lower down the page are prioritized appropriately.
*   **CSS:** Tailwind handles all styling, resulting in minimal CSS bundle size.

---

## 8. UI8 Packaging Checklist
*   [ ] **Clean Codebase:** Remove all `console.log`s, unused imports, and `node_modules`.
*   [ ] **Documentation (`README.md`):** Detailed instructions on how to run the project (`npm install`, `npm run dev`), how to customize colors in `tailwind.config.ts`, and how to replace the Spline URL.
*   [ ] **Figma File:** Include the original Figma design file containing the UI elements, typography scale, and color palette.
*   [ ] **Assets Folder:** A neatly organized folder containing all exported images, videos (if any), and font files used.
*   [ ] **Preview Images:** High-resolution screenshots of the landing page sections formatted to UI8's specific presentation dimensions (typically 1920x1080 and custom tall layouts).
*   [ ] **Live Demo Link:** Deploy a fast, working version to Vercel and include the URL in the submission metadata.