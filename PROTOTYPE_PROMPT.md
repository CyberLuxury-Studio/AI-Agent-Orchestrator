# Prompt for Generating the "AI Agent Orchestrator" Prototype

**Context:** I am building a Next.js 16.2 (App Router) landing page for an "AI Agent Orchestrator". The template is meant to be sold on UI8 to indie developers and SaaS startups. The visual style is highly Cyberpunk/Cyber aesthetic.

**Tech Stack Requirements:**
*   Next.js App Router
*   Tailwind CSS (utilize arbitrary values for glows/shadows if needed)
*   Framer Motion (for scroll and hover animations)
*   Lucide React (for icons)
*   TypeScript

**Design System Directives:**
*   **Colors:** Background is Deep Space Black (`#050505`), cards/surfaces are Cybernetic Gray (`#1F1F2E`) or glassmorphic (`bg-white/5` with `backdrop-blur-md`).
*   **Accents:** Cyber Cyan (`#00F0FF`) as primary, Neon Magenta (`#FF003C`) as secondary, and Matrix Green (`#39FF14`) for terminal/code success states.
*   **Typography:** Use a clean sans-serif like `Inter` for body text, but styled strongly. Use a monospace font for tags, badges, and terminal logs. If possible, simulate a futuristic display font for main headings.
*   **Aesthetic Features:** Heavy use of neon text shadows, box shadows for glowing buttons, subtle grid backgrounds or radial gradient overlays to give a "void" feeling.

**Instructions for the Generator (v0 / Stitch):**

Generate a complete, single-page scrollable landing page with the following sections in order:

1.  **Floating Navbar:**
    *   Sticky at the top, pill-shaped, glassmorphic (`backdrop-blur`).
    *   Logo text on the left: "ORCHESTRATOR.AI".
    *   Links in the center: "Features", "Terminal", "Pricing".
    *   "Get Early Access" button on the right with a Cyber Cyan glow.

2.  **Hero Section:**
    *   Centered layout. Large, bold heading: "Orchestrate Autonomous Agents in the Void."
    *   Subheadline below it simulating a terminal typing effect or just monospace font in Matrix Green: `> System initialized. Awaiting routing protocols...`
    *   Two buttons: Primary (Solid Cyan with heavy glow), Secondary (Outline with subtle neon hover).
    *   *Note:* Leave a large empty `div` wrapper behind or below the text acting as a placeholder for a 3D Spline scene. Give it a subtle pulsing border to signify it's a node container.

3.  **Dashboard/Terminal Mockup Section:**
    *   A tilted or large centered card meant to represent the software interface.
    *   Make it look like a macOS window but cyber-themed (dark gray header, red/yellow/green neon dots).
    *   Inside the mockup: Split the view. Left side shows a list of "Agents" (Node 1, Node 2) with status indicators (green pulsing dots). Right side shows a scrolling terminal window outputting fake logs (e.g., `[INFO] Routing request to Node-7... [SUCCESS]`).

4.  **Bento Box Features Grid:**
    *   A 3-column grid layout.
    *   Card 1: "Visual Node Mapping" - Include a mini illustration using basic shapes and lines connecting them.
    *   Card 2: "Real-time Logs" - A dark box with monospace green text.
    *   Card 3: "Autonomous Routing" - Use icons (Lucide) to show a path between points.
    *   *Hover Effects:* When hovering over any of these cards, the border should glow Cyan or Magenta.

5.  **Pricing Section:**
    *   Two cards side-by-side: "Indie" (Free) and "SaaS Pro" ($29/mo).
    *   The "SaaS Pro" card should stand out: give it a gradient border or a stronger background glow. Include a list of features with checkmark icons.

6.  **Footer:**
    *   Minimal. A pulsing radial gradient in the background.
    *   Massive text: "INITIALIZE YOUR SWARM."
    *   A final Call to Action button.
    *   Simple copyright text at the very bottom.

**Code Requirements for the Generator:**
*   Ensure the code is fully responsive (mobile-first).
*   Use standard Tailwind classes.
*   Implement basic Framer Motion `motion.div` tags for scroll-reveal animations if the platform supports it (e.g., `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}`). If Framer Motion is not supported by the generator, fall back to standard CSS transitions on hover.
*   Output the result as a single, cohesive React component/page.