import React from "react";

// ── Types ────────────────────────────────────────────────────────────────────

export type SkillColor = "blue" | "cyan" | "indigo" | "emerald" | "violet" | "sky";

export interface SkillGroup {
  category: string;
  color: SkillColor;
  icon: React.ReactNode;
  items: string[];
}

export interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Cert {
  name: string;
  issuer: string;
  year: string;
  status: "earned" | "in-progress";
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  color: string;
}

// ── Color maps ───────────────────────────────────────────────────────────────

export const SKILL_COLORS: Record<SkillColor, { badge: string; heading: string; cardClass: string }> = {
  blue:    { badge: "bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/15",         heading: "text-blue-400",    cardClass: "skill-card-blue" },
  cyan:    { badge: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/15",         heading: "text-cyan-400",    cardClass: "skill-card-cyan" },
  indigo:  { badge: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/15", heading: "text-indigo-400",  cardClass: "skill-card-indigo" },
  emerald: { badge: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/15", heading: "text-emerald-400", cardClass: "skill-card-emerald" },
  violet:  { badge: "bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:bg-violet-500/15", heading: "text-violet-400",  cardClass: "skill-card-violet" },
  sky:     { badge: "bg-sky-500/10 text-sky-300 border border-sky-500/20 hover:bg-sky-500/15",             heading: "text-sky-400",     cardClass: "skill-card-sky" },
};

// ── Skills ───────────────────────────────────────────────────────────────────

export const SKILLS: SkillGroup[] = [
  {
    category: "Cloud & Identity", color: "blue",
    icon: React.createElement("svg", { xmlns:"http://www.w3.org/2000/svg", width:14, height:14, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:2, strokeLinecap:"round", strokeLinejoin:"round", "aria-hidden":"true" },
      React.createElement("path", { d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" })
    ),
    items: ["Azure AD / Entra ID","Microsoft 365","Microsoft Graph API","Intune MDM / MAM","Mobicontrol MDM","Conditional Access","MFA","License Management"],
  },
  {
    category: "Scripting & Automation", color: "cyan",
    icon: React.createElement("svg", { xmlns:"http://www.w3.org/2000/svg", width:14, height:14, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:2, strokeLinecap:"round", strokeLinejoin:"round", "aria-hidden":"true" },
      React.createElement("polyline", { points:"4 17 10 11 4 5" }),
      React.createElement("line", { x1:12, x2:20, y1:19, y2:19 })
    ),
    items: ["PowerShell","Python","OpenAI API","Anthropic Claude API","Prompt Engineering","REST API Integration","SQL"],
  },
  {
    category: "Infrastructure", color: "indigo",
    icon: React.createElement("svg", { xmlns:"http://www.w3.org/2000/svg", width:14, height:14, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:2, strokeLinecap:"round", strokeLinejoin:"round", "aria-hidden":"true" },
      React.createElement("rect", { width:20, height:8, x:2, y:2, rx:2 }),
      React.createElement("rect", { width:20, height:8, x:2, y:14, rx:2 }),
      React.createElement("line", { x1:6, x2:"6.01", y1:6, y2:6 }),
      React.createElement("line", { x1:6, x2:"6.01", y1:18, y2:18 })
    ),
    items: ["VMware vSphere / ESXi","Windows Server","Windows Autopilot","Active Directory","GPO · DHCP · DNS","Veeam Backup","HPE · Dell Servers"],
  },
  {
    category: "Linux & Monitoring", color: "emerald",
    icon: React.createElement("svg", { xmlns:"http://www.w3.org/2000/svg", width:14, height:14, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:2, strokeLinecap:"round", strokeLinejoin:"round", "aria-hidden":"true" },
      React.createElement("polyline", { points:"22 12 18 12 15 21 9 3 6 12 2 12" })
    ),
    items: ["Ubuntu Linux","Zabbix","Nginx Reverse Proxy","SSL / TLS Management","Service Health Monitoring"],
  },
  {
    category: "Networking", color: "violet",
    icon: React.createElement("svg", { xmlns:"http://www.w3.org/2000/svg", width:14, height:14, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:2, strokeLinecap:"round", strokeLinejoin:"round", "aria-hidden":"true" },
      React.createElement("rect", { x:2, y:2, width:6, height:6, rx:1 }),
      React.createElement("rect", { x:16, y:2, width:6, height:6, rx:1 }),
      React.createElement("rect", { x:9, y:16, width:6, height:6, rx:1 }),
      React.createElement("path", { d:"M5 8v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" }),
      React.createElement("path", { d:"M12 8v8" })
    ),
    items: ["Ubiquiti","Cisco / HP Switching","TCP / IP","VLAN Configuration","Network Troubleshooting"],
  },
  {
    category: "Enterprise Apps", color: "sky",
    icon: React.createElement("svg", { xmlns:"http://www.w3.org/2000/svg", width:14, height:14, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:2, strokeLinecap:"round", strokeLinejoin:"round", "aria-hidden":"true" },
      React.createElement("rect", { width:16, height:20, x:4, y:2, rx:2 }),
      React.createElement("path", { d:"M9 22v-4h6v4" }),
      React.createElement("path", { d:"M8 6h.01" }),
      React.createElement("path", { d:"M16 6h.01" }),
      React.createElement("path", { d:"M12 6h.01" }),
      React.createElement("path", { d:"M12 10h.01" }),
      React.createElement("path", { d:"M12 14h.01" }),
      React.createElement("path", { d:"M16 10h.01" }),
      React.createElement("path", { d:"M16 14h.01" }),
      React.createElement("path", { d:"M8 10h.01" }),
      React.createElement("path", { d:"M8 14h.01" })
    ),
    items: ["Dynamics GP","Dynamics CRM","IT Asset Management","Software License Management"],
  },
];

// ── Experience ───────────────────────────────────────────────────────────────

export const EXPERIENCE: Job[] = [
  {
    role: "Manager of IT Operations", company: "Ronnoco Coffee",
    period: "Aug 2016 – Present", location: "St. Louis, MO",
    highlights: [
      "Manage all identity and device management for 300+ users across Azure AD / Entra ID, Microsoft 365, and Mobicontrol MDM: provisioning, Conditional Access, MFA, and license tracking.",
      "Use AI tools to write PowerShell scripts and Graph API integrations that automate provisioning, license assignment, and compliance checks — this is how I've been learning scripting.",
      "Moved device setup to Windows Autopilot and handle IT support for Dynamics GP and Dynamics CRM.",
      "Run a VMware vSphere environment with 40+ VMs: patching, capacity planning, performance monitoring, and snapshot management.",
      "Cut help desk ticket volume by 40% by rolling out self-service password reset and building an internal knowledge base.",
    ],
  },
  {
    role: "Senior Support Technician", company: "Apex Systems (contracted to Ronnoco Coffee)",
    period: "Oct 2015 – Aug 2016", location: "St. Louis, MO",
    highlights: [
      "Cut new computer setup time from ~1 week to a few hours by building a custom Windows image deployable over the network via WDS/MDT.",
      "Handled all help desk tickets outside of SQL database issues: hardware, software, and end-user support.",
      "Managed full onboarding for new hires: account creation, computer imaging, and access provisioning across all systems.",
    ],
  },
  {
    role: "Technical Support Analyst", company: "Enterprise Holdings",
    period: "May 2013 – Aug 2015", location: "Weldon Springs, MO",
    highlights: [
      "Phone-based technical support for Android, iOS, Citrix, Windows 7, and Windows Server 2008 — up to 30 calls/day.",
      "98% resolution rate, rarely escalating; regularly pulled onto escalated calls and trained new hires.",
      "Tracked recurring issues and documented root causes so the team could get ahead of them.",
    ],
  },
];

// ── Certifications ───────────────────────────────────────────────────────────

export const CERTIFICATIONS: Cert[] = [
  {
    name: "CompTIA A+", issuer: "CompTIA", year: "2015", status: "earned",
    description: "Foundational IT certification covering hardware, networking, operating systems, and troubleshooting.",
  },
  {
    name: "AZ-104: Azure Administrator Associate", issuer: "Microsoft", year: "In Progress", status: "in-progress",
    description: "Azure infrastructure administration — identity & governance, storage, compute, virtual networking, and monitoring.",
  },
];

// ── Stats ────────────────────────────────────────────────────────────────────

export const STATS: Stat[] = [
  { value: "9+",   label: "Years in IT",      color: "text-blue-400"    },
  { value: "300+", label: "Users Managed",    color: "text-cyan-400"    },
  { value: "40+",  label: "VMs Managed",      color: "text-indigo-400"  },
  { value: "40%",  label: "Ticket Reduction", color: "text-emerald-400" },
];

// ── Nav ──────────────────────────────────────────────────────────────────────

export const NAV_LINKS = ["About", "Skills", "Experience", "Certifications", "Contact"] as const;
export const SECTION_IDS = ["about", "skills", "experience", "certifications", "contact"] as const;

// ── Marquee ──────────────────────────────────────────────────────────────────

export const MARQUEE_ITEMS = [
  "Azure AD / Entra ID","Microsoft 365","PowerShell","Python","VMware vSphere",
  "Microsoft Graph API","Intune MDM","Windows Autopilot","Ubuntu Linux","Nginx","Zabbix",
  "Active Directory","Veeam Backup","OpenAI API","Claude API","Ubiquiti","Mobicontrol",
  "Dynamics CRM","SQL","HPE / Dell Servers","Windows Server",
];
