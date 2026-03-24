# Dabinder Udhan — Portfolio v3.0

**Live:** [dabinderudhan.com](https://dabinderudhan.com)

A modern, dark-themed IT Administrator & Cybersecurity portfolio built with React — featuring an interactive CyberLab Command Center, network diagram, visual resume, and more.

---

## Pages

| Page | URL | Description |
|------|-----|-------------|
| **Portfolio** | [dabinderudhan.com](https://dabinderudhan.com) | Main portfolio with skills, projects, blog, tools, and GitHub activity |
| **CyberLab Command Center** | [/cyberlab.html](https://dabinderudhan.com/cyberlab.html) | Full cybersecurity training dashboard — lab tracker, cert progress, skill board, career intel, roadmap |
| **Network Diagram** | [/network.html](https://dabinderudhan.com/network.html) | Interactive SVG diagram of cyberlab.local — click machines for specs and services |
| **Visual Resume** | [/resume.html](https://dabinderudhan.com/resume.html) | Styled, printable resume page with print-to-PDF support |

---

## Features

### Portfolio (React SPA)
- Dark/Light mode toggle with full theme support
- Profile photo with gradient border and glow animation
- Interactive terminal with commands: `help`, `about`, `skills`, `projects`, `labs`, `cyberlab`, `certs`, `contact`, and more
- Scroll-aware header with blur backdrop effect
- Smooth scroll-triggered animations (Intersection Observer)
- Mobile-first responsive with hamburger menu
- 6 skill categories with tag pills
- Tools showcase organized by category (Cloud, Security, Infrastructure, Scripting)
- Blog section for write-ups and lab documentation
- Live GitHub activity feed (public API)
- Cyber Lab section with Command Center and Network Diagram launch buttons
- Roadmap with Active/Target status badges
- Stats grid with gradient text
- Animated grid + orb background
- Open Graph meta tags for LinkedIn/social sharing
- "Currently Building & Learning" status badge

### CyberLab Command Center
- Overview dashboard with summary cards
- Lab environment terminal output (cyberlab.local)
- 6-stage cybersecurity roadmap with progress tracking
- Certification tracker (A+, Network+, Security+, MS-900, SC-900)
- Lab tracker with filters (Active Directory, Blue Team, Offensive, Scripting)
- Skill focus board with progress bars
- Next Best Step recommendation engine
- Career intel panel with target roles, strengths, gaps, and interview prep

### Network Diagram
- Interactive SVG topology of cyberlab.local (192.168.10.0/24)
- Click-to-inspect panels for DC01, WIN10-CLIENT01, KALI, and Gateway
- Animated connection lines and status indicators
- Network info cards (subnet, domain, purpose, platform)
- Color-coded legend

### Visual Resume
- Dark-themed styled resume (IT-focused)
- Print-friendly — switches to white background on print
- Print / Save as PDF button
- Download original PDF button
- Sections: Summary, Skills, Experience, Projects, Certifications, Home Lab, Education

---

## Tech Stack

- **React 18** + Create React App
- **Framer Motion** — hero entrance animations
- **React Icons** — Feather icon set
- **CSS Custom Properties** — no Tailwind/SCSS dependency
- **Outfit** + **JetBrains Mono** typography
- **GitHub Pages** — automated deploy via GitHub Actions
- **Open Graph** — LinkedIn and social media link previews

---

## Project Structure

```
src/
├── App.js                 # Main layout with all sections
├── App.css                # All styles including dark/light themes
├── data.js                # Content: skills, projects, labs, blog, tools, roadmap
├── index.js               # React entry point
└── components/
    ├── Header.jsx         # Nav with dark/light toggle and mobile menu
    ├── Hero.jsx           # Profile photo, name, tagline, CTA buttons
    ├── Terminal.jsx        # Interactive terminal with commands
    ├── GridBackground.jsx  # Animated grid + floating orbs
    ├── FadeIn.jsx         # Scroll-triggered fade animation
    ├── SectionHeading.jsx  # Section label + title
    ├── SkillCard.jsx      # Skill category cards
    ├── ProjectCard.jsx    # Project cards with tags and bullets
    └── Footer.jsx         # Footer

public/
├── index.html             # React entry with OG meta tags
├── cyberlab.html          # CyberLab Command Center (standalone)
├── network.html           # Interactive network diagram (standalone)
├── resume.html            # Visual resume page (standalone)
├── profile.jpeg           # Profile photo
├── og-portfolio.png       # LinkedIn preview image — portfolio
├── og-cyberlab.png        # LinkedIn preview image — command center
├── og-network.png         # LinkedIn preview image — network diagram
├── CNAME                  # Custom domain config
└── Dabinder Udhan – Resume.pdf
```

---

## Getting Started

```bash
npm install
npm start
```

## Deploy

Push to `main` — GitHub Actions will build and deploy to GitHub Pages automatically.

## Customization

All content lives in **`src/data.js`** — update your skills, projects, blog posts, tools, certifications, roadmap, and contact info there.

To add a new project:
```js
// In src/data.js → PROJECTS array
{
  id: "my-new-project",
  title: "Project Title",
  subtitle: "Short description",
  impact: "What it achieved",
  tags: ["Tag1", "Tag2"],
  bullets: ["Detail 1", "Detail 2"],
  links: [{ label: "Source", href: "https://github.com/..." }],
},
```

To add a new blog post:
```js
// In src/data.js → BLOG_POSTS array
{
  id: "post-slug",
  title: "Post Title",
  date: "March 2026",
  category: "Security",
  excerpt: "Brief description...",
  tags: ["Tag1", "Tag2"],
  status: "published", // or "draft"
},
```

---

## License

Built by Dabinder Udhan. Feel free to fork and customize for your own portfolio.
