import { FiCpu, FiShield, FiTool } from "react-icons/fi";

export const EMAIL = "Dabinder.udhan@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/dabinderudhan/";
export const GITHUB = "https://github.com/dabinderudhan";
export const WEBSITE = "https://dabinderudhan.com/";
export const RESUME = "/resume.pdf";

export const SKILL_GROUPS = [
  {
    title: "Microsoft Stack",
    icon: FiCpu,
    items: [
      "Microsoft 365",
      "Intune",
      "Entra ID",
      "Exchange Online",
      "Teams Admin",
      "Endpoint Deployment",
    ],
  },
  {
    title: "Security",
    icon: FiShield,
    items: [
      "Defender for Office 365",
      "Email Security",
      "Policy Hardening",
      "Least Privilege",
      "Secure Configuration",
      "Operational Security",
    ],
  },
  {
    title: "Automation",
    icon: FiTool,
    items: [
      "PowerShell",
      "Task Automation",
      "Reporting",
      "Process Standardization",
      "SOP Documentation",
      "Workflow Improvement",
    ],
  },
];

export const PROJECTS = [
  {
    id: "intune",
    title: "Intune Deployment SOP",
    subtitle: "Standardized endpoint onboarding workflow",
    impact: "Reduced deployment inconsistency and made onboarding easier to repeat.",
    tags: ["Intune", "Entra ID", "Endpoint", "SOP"],
    bullets: [
      "Built a repeatable process for new and repurposed Windows devices.",
      "Improved app readiness, profile setup, and enrollment consistency.",
      "Reduced manual setup mistakes with clearer operational steps.",
    ],
    links: [{ label: "Source", href: GITHUB }],
  },
  {
    id: "security",
    title: "Email Security Hardening",
    subtitle: "Safer Microsoft 365 email defaults",
    impact: "Improved protection posture for risky users and everyday mail flow.",
    tags: ["Defender for O365", "Exchange Online", "Security"],
    bullets: [
      "Configured safer inbound protection and stricter policy handling.",
      "Strengthened malicious link and attachment controls.",
      "Focused on practical tenant hardening with policy-based protection.",
    ],
    links: [{ label: "Source", href: GITHUB }],
  },
  {
    id: "automation",
    title: "Automation Dashboard",
    subtitle: "Operational visibility through scripting",
    impact: "Reduced repetitive work and improved reporting consistency.",
    tags: ["PowerShell", "Automation", "Reporting"],
    bullets: [
      "Built scripts and dashboard-style workflows for recurring operational tasks.",
      "Improved visibility and consistency across day-to-day support processes.",
      "Made repetitive actions easier to maintain and reuse.",
    ],
    links: [{ label: "Source", href: GITHUB }],
  },
];

export const EXPERIENCE = [
  "IT administration across Microsoft 365, endpoint operations, user support, and process standardization.",
  "Hands-on work with Intune enrollment, device setup, onboarding workflows, and operational documentation.",
  "Security-minded administration with focus on email protection, policy configuration, and safer defaults.",
  "Growing practical depth in automation, PowerShell, and cybersecurity-oriented workflows.",
];

export const ROADMAP = [
  "MS-900",
  "CompTIA A+",
  "Network+",
  "Security+",
  "PowerShell scripting",
  "Cybersecurity labs and defensive security projects",
];

export const TERMINAL_COMMANDS = [
  "help",
  "about",
  "skills",
  "projects",
  "certs",
  "experience",
  "contact",
  "linkedin",
  "github",
  "resume",
  "clear",
];
