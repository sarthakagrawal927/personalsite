interface Project {
  title: string
  description: string
  href: string
  imgSrc?: string
}

const projectsData: Project[] = [
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
