interface Project {
  title: string
  description: string
  href: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Resume Tailor',
    description:
      'A LaTeX resume editor with AI-powered job tailoring and cover letter generation. Paste a job description, get a tuned resume and matching cover letter.',
    href: 'https://github.com/sarthakagrawal927/resume-tailor',
  },
  {
    title: 'Reel Maker',
    description:
      'An AI-powered TikTok/Reels video generator built on Remotion — scripted scenes, voiceover, captions, and programmatic compositing.',
    href: 'https://github.com/sarthakagrawal927/reel-maker',
  },
  {
    title: 'Starboard',
    description:
      'Organize and filter your GitHub starred repos. Tagging, search, and grouping on top of the GitHub API to make large star lists usable again.',
    href: 'https://github.com/sarthakagrawal927/starboard',
  },
  {
    title: 'LoopTV',
    description:
      'A TV-like random YouTube player with 13 stations and 36K quality-filtered videos, auto-tagged using a HuggingFace NER pipeline.',
    href: 'https://github.com/sarthakagrawal927/looptv',
  },
  {
    title: 'NanoClaw',
    description:
      'A lightweight containerized messaging agent on Anthropic\'s Agents SDK — connects WhatsApp, Telegram, Slack, Discord, and Gmail with memory and scheduled jobs.',
    href: 'https://github.com/sarthakagrawal927/nanoclaw',
  },
  {
    title: 'Email Manager',
    description:
      'A Gmail manager built on Next.js, NextAuth, and the Gmail API. Browse, search, compose, and mass-unsubscribe from a clean keyboard-driven UI.',
    href: 'https://github.com/sarthakagrawal927/email-manager',
  },
  {
    title: 'Open Historia',
    description:
      'An LLM-powered grand strategy simulation game where AI controls nations with a diplomacy engine, dynamic 3D maps via Three.js, and multi-provider AI support.',
    href: 'https://github.com/sarthakagrawal927/open-historia',
  },
  {
    title: 'Interview Coder',
    description:
      'A full-stack coding interview preparation platform with real-time code execution, AI-powered hints, Monaco editor, and Excalidraw whiteboard integration.',
    href: 'https://github.com/sarthakagrawal927/swe-interview-prep',
  },
  {
    title: 'AgentData',
    description:
      'A research platform for analyzing subreddits and aggregating persona-style insights using AI, with a FastAPI backend and Next.js frontend.',
    href: 'https://github.com/sarthakagrawal927/agentMode',
  },
  {
    title: 'Web Annotator',
    description:
      'An advanced web annotation and reading tool with session recording via rrweb, content extraction with Mozilla Readability, and Playwright-based scraping.',
    href: 'https://github.com/sarthakagrawal927/reader',
  },
  {
    title: 'GitTinder',
    description:
      'A developer networking platform to connect, share ideas, and find collaborators. Full-stack with React, Redux, Node.js, Express, MongoDB, and AWS S3.',
    href: 'https://github.com/sarthakagrawal927/GitTinder',
  },
  {
    title: 'Stumble',
    description:
      'A social media application to rekindle old school conversation by the advent of technology.',
    href: 'https://getstumble.app/',
  },
  {
    title: 'All-in-One Productivity Application',
    description:
      'A productivity app that aims to do everything 4 other applications on my phone are not able to efficiently do. Designed to help people become the best version of themselves.',
    href: 'https://app.significanthobbies.com/',
  },
]

export default projectsData
