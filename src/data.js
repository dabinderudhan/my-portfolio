import { FiCpu, FiShield, FiTool, FiServer, FiHeadphones, FiLock } from "react-icons/fi";

export const EMAIL = "Dabinder.udhan@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/dabinderudhan/";
export const GITHUB = "https://github.com/dabinderudhan";
export const WEBSITE = "https://dabinderudhan.com/";
export const RESUME = "/Dabinder Udhan \u2013 Resume.pdf";

export const SKILL_GROUPS = [
  {
    title: "Microsoft 365",
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
  {
    title: "Infrastructure",
    icon: FiServer,
    items: [
      "Active Directory",
      "Group Policy",
      "DNS / DHCP",
      "Windows Server",
      "Networking",
      "Cloud Architecture",
    ],
  },
  {
    title: "IT Service Mgmt",
    icon: FiHeadphones,
    items: [
      "Ticketing Systems",
      "Remote Support",
      "Hardware Lifecycle",
      "User Onboarding",
      "Documentation",
      "SLA Management",
    ],
  },
  {
    title: "Cybersecurity",
    icon: FiLock,
    items: [
      "Threat Analysis",
      "Incident Response",
      "Vulnerability Mgmt",
      "Network Security",
      "Risk Assessment",
      "Defense in Depth",
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
  "Promoted to L2 — handling escalated tickets, advanced troubleshooting, and deeper Microsoft 365 administration.",
  "Mentoring L1 team members, providing guidance on resolution workflows, and supporting knowledge transfer.",
  "Expanded M365 responsibilities including Intune device management, Entra ID, Exchange Online, and policy configuration.",
  "Hands-on work with endpoint enrollment, onboarding workflows, security hardening, and operational documentation.",
  "Growing practical depth in automation, PowerShell scripting, and cybersecurity-oriented workflows.",
];

export const BLOG_POSTS = [
  {
    id: "getting-started-homelab",
    title: "Building My CyberLab from Scratch",
    date: "Coming Soon",
    category: "Lab Setup",
    excerpt: "How I set up cyberlab.local with Windows Server 2025, Kali Linux, and a Windows 10 client — from planning to first domain join.",
    tags: ["Active Directory", "Windows Server", "Networking"],
    status: "draft",
  },
  {
    id: "intune-deployment-lessons",
    title: "Lessons from Intune Deployment at Scale",
    date: "Coming Soon",
    category: "IT Admin",
    excerpt: "What I learned building a repeatable Intune enrollment SOP — the mistakes, the fixes, and the process that stuck.",
    tags: ["Intune", "Endpoint Management", "SOP"],
    status: "draft",
  },
  {
    id: "email-security-hardening",
    title: "Hardening M365 Email Security",
    date: "Coming Soon",
    category: "Security",
    excerpt: "A practical walkthrough of tightening Defender for Office 365 policies — safer defaults without breaking mail flow.",
    tags: ["Defender for O365", "Exchange Online", "Security"],
    status: "draft",
  },
];

export const TOOLS = [
  { name: "Microsoft 365", category: "Cloud" },
  { name: "Intune", category: "Cloud" },
  { name: "Entra ID", category: "Cloud" },
  { name: "Exchange Online", category: "Cloud" },
  { name: "Defender for O365", category: "Security" },
  { name: "Active Directory", category: "Infrastructure" },
  { name: "Windows Server", category: "Infrastructure" },
  { name: "PowerShell", category: "Scripting" },
  { name: "Group Policy", category: "Infrastructure" },
  { name: "Kali Linux", category: "Security" },
  { name: "Nmap", category: "Security" },
  { name: "Splunk", category: "Security" },
  { name: "Wireshark", category: "Security" },
  { name: "VS Code", category: "Scripting" },
  { name: "Git & GitHub", category: "Scripting" },
  { name: "VirtualBox", category: "Infrastructure" },
  { name: "Sysmon", category: "Security" },
  { name: "Windows 10/11", category: "Infrastructure" },
];

export const CYBER_LABS = [
  {
    id: "ad-lab",
    title: "Active Directory Home Lab",
    subtitle: "Simulated enterprise AD environment",
    status: "coming-soon",
    difficulty: "Intermediate",
    tools: ["Windows Server 2022", "Active Directory", "Group Policy", "PowerShell"],
    description:
      "Building a full domain controller environment to practice enterprise AD administration, GPO deployment, and user management.",
    link: null,
  },
  {
    id: "siem-lab",
    title: "SIEM & Log Analysis Lab",
    subtitle: "Security monitoring and threat detection",
    status: "coming-soon",
    difficulty: "Intermediate",
    tools: ["Splunk", "Windows Event Logs", "Sysmon", "Threat Hunting"],
    description:
      "Setting up a SIEM environment to practice log ingestion, alert creation, and threat detection workflows.",
    link: null,
  },
  {
    id: "phishing-lab",
    title: "Phishing Analysis Lab",
    subtitle: "Email threat investigation",
    status: "coming-soon",
    difficulty: "Beginner",
    tools: ["Defender for O365", "Email Headers", "URL Analysis", "Sandbox"],
    description:
      "Documenting a hands-on workflow for analyzing suspicious emails, tracing headers, and safely detonating URLs.",
    link: null,
  },
];


export const ROADMAP = [
  { name: "MS-900", status: "target" },
  { name: "CompTIA A+", status: "target" },
  { name: "Network+", status: "target" },
  { name: "Security+", status: "target" },
  { name: "PowerShell scripting", status: "active" },
  { name: "Cybersecurity labs & defensive security projects", status: "active" },
];

export const TERMINAL_COMMANDS = [
  "help",
  "about",
  "skills",
  "projects",
  "labs",
  "cyberlab",
  "certs",
  "experience",
  "contact",
  "linkedin",
  "github",
  "resume",
  "clear",
];
