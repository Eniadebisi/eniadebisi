# Design Guidelines: Professional Portfolio Website for Recruiters

## Design Approach: Reference-Based (Linear + Notion + Dribbble)
Drawing inspiration from Linear's sophisticated minimalism, Notion's professional clarity, and Dribbble's portfolio aesthetics. The design emphasizes clean typography, purposeful whitespace, and a polished showcase of work that commands recruiter attention.

## Core Design Principles
- **Recruiter-First**: Information hierarchy optimized for quick scanning (5-10 second attention span)
- **Professional Impact**: Sophisticated, modern aesthetic that builds credibility instantly
- **Project-Centric**: Work samples take center stage with elegant framing
- **Frictionless Contact**: Multiple clear paths to reach out

## Color Palette

**Light Mode:**
- Primary: 220 90% 15% (Deep professional blue - headers, CTAs)
- Background: 0 0% 100% (Pure white)
- Surface: 220 20% 98% (Subtle off-white cards)
- Text Primary: 220 25% 10% (Near black)
- Text Secondary: 220 15% 45% (Muted gray)
- Accent: 220 90% 50% (Vibrant blue - links, highlights)
- Border: 220 20% 90% (Soft dividers)

**Dark Mode:**
- Primary: 220 80% 65% (Lighter blue for contrast)
- Background: 220 25% 8% (Rich dark blue-black)
- Surface: 220 20% 12% (Elevated dark surface)
- Text Primary: 220 20% 95% (Off-white)
- Text Secondary: 220 15% 65% (Medium gray)
- Accent: 220 90% 60% (Bright blue)
- Border: 220 15% 20% (Subtle dark borders)

## Typography

**Font Families:**
- Headings: 'Inter' (Google Fonts) - weights 600, 700, 800
- Body: 'Inter' (Google Fonts) - weights 400, 500
- Code/Technical: 'JetBrains Mono' (Google Fonts) - weight 400

**Scale:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl font-bold
- Section Headers: text-3xl md:text-4xl lg:text-5xl font-bold
- Subsection Headers: text-2xl md:text-3xl font-semibold
- Body Large: text-lg md:text-xl
- Body Standard: text-base
- Captions: text-sm
- Emphasis: font-medium for subtle emphasis, font-semibold for strong

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 8, 12, 16, 24 (p-2, h-8, m-4, gap-12, py-16, mb-24)

**Container Strategy:**
- Full-width sections: w-full with inner max-w-7xl mx-auto px-4 md:px-8
- Content width: max-w-6xl
- Text content: max-w-4xl (comfortable reading)

**Vertical Rhythm:**
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: space-y-8 md:space-y-12
- Micro-spacing: gap-4 to gap-8 within components

## Component Library

### Navigation (Sticky Top)
- Fixed transparent backdrop-blur header
- Logo/name on left, smooth scroll nav links on right
- "Contact Me" CTA button with accent color
- Hamburger menu for mobile with slide-out panel

### Hero Section (80vh)
- Split layout: 2/5 left content, 3/5 right professional headshot/hero image
- Bold headline with gradient text effect on name (from primary to accent)
- Concise value proposition tagline
- 2-button CTA group: "View Projects" (primary) + "Download Resume" (outline)
- Floating skill badges or achievement metrics below CTAs
- Subtle animated gradient background or mesh gradient

### About Section
- 2-column grid on desktop: Personal narrative (left 60%), Quick facts sidebar (right 40%)
- Professional photo (if not in hero) with elegant rounded border
- Timeline or milestone highlights
- Core competencies with icon representations

### Projects Showcase (Primary Focus)
- Masonry or staggered card grid (2 columns on tablet, 3 on desktop)
- Each project card: Large preview image/iframe embed, title, tech stack tags, description, "View Details" link
- Embed support: iframe containers with loading states, fallback to screenshots
- Filter/category tabs at top (optional: "All", "Web Apps", "Design", "Data")
- Hover effects: Gentle lift (shadow-lg) and border accent

### Skills Matrix
- Multi-column grid (grid-cols-2 md:grid-cols-4)
- Icon + label combinations from Heroicons
- Grouped by category: Languages, Frameworks, Tools, Soft Skills
- Progress indicators or proficiency badges

### Contact/Footer CTA
- Centered content with prominent headline
- Multiple contact options: Email (with copy button), LinkedIn, GitHub icons
- Download resume secondary button
- Availability status indicator ("Open to opportunities")

## Images

**Hero Image:** Professional headshot or creative portrait - right side of hero, occupying 3/5 width. Should be high-quality, well-lit, showing personality while maintaining professionalism. Alternative: Abstract geometric background with floating element graphic.

**Project Embeds:** Live iframe previews of projects where possible, fallback to high-quality screenshots with play button overlays for interactive demos.

**About Section:** Candid professional photo or workspace image to humanize the portfolio.

**Background Elements:** Subtle gradient mesh (light mode) or geometric patterns (dark mode) behind hero section only.

## Interactions & Animations

**Minimal & Purposeful:**
- Smooth scroll behavior for anchor navigation
- Entrance animations: Fade-up on scroll for section headers (intersection observer)
- Hover states: Subtle scale (1.02) and shadow on project cards
- Button hovers: System defaults only
- Outline buttons on images: backdrop-blur-md bg-white/20 dark:bg-black/20

## Accessibility
- WCAG AA contrast ratios maintained
- Focus indicators on all interactive elements (ring-2 ring-accent)
- Semantic HTML with proper heading hierarchy
- Alt text for all images
- Keyboard navigation support with visible focus states
- Dark mode toggle in header for user preference

## Visual Hierarchy Priority
1. Hero headline and primary CTA (immediate attention)
2. Project showcase (recruiters' primary interest)
3. Skills and experience (credibility building)
4. Contact options (conversion)

This design creates a recruiter-optimized portfolio that balances professional polish with modern web aesthetics, ensuring your work gets the attention it deserves.