export type ReadingPath = {
  title: string
  description: string
  slugs: string[]
}

export type ThemeCluster = {
  id: string
  title: string
  description: string
  tags: string[]
  related: string[]
}

export const readingPaths: ReadingPath[] = [
  {
    title: 'Choosing a direction',
    description: 'Start with desire, constraints, and the work of deciding what is worth wanting.',
    slugs: [
      '2023/11/10-what-are-you-passionate-about',
      '2024/12/15-what-do-you-really-want',
      '2024/09/21-pillars-of-job',
    ],
  },
  {
    title: 'Personal operating system',
    description: 'A practical route through principles, focus, time, and repeated self-correction.',
    slugs: [
      '2023/12/10-rules-for-life',
      '2023/11/20-less-is-more',
      '2023/12/30-time-flies-fast',
      '2023/12/31-oh-dear-next-year',
    ],
  },
  {
    title: 'Resilience and risk',
    description: 'Read these when probability, optimism, and uncertainty are the main problem.',
    slugs: ['2023/10/29-luck', '2023/11/25-delusional-optimism', '2024/01/20-comfort-zone'],
  },
  {
    title: 'Relationships and meaning',
    description:
      'A slower path through friendship, relationships, and what remains after ambition.',
    slugs: [
      '2023/10/22-on-friendship',
      '2023/12/29-what-really-matters.',
      '2023/12/23-next-orbit-as-a-person',
    ],
  },
]

export const themeClusters: ThemeCluster[] = [
  {
    id: 'self-direction',
    title: 'Self-direction',
    description: 'Desire, agency, career choices, and the discipline of choosing deliberately.',
    tags: ['philosophy', 'passion'],
    related: ['personal-systems', 'resilience'],
  },
  {
    id: 'personal-systems',
    title: 'Personal systems',
    description: 'Rules, productivity, attention, and repeatable ways to behave under pressure.',
    tags: ['productivity', 'rules', 'tips'],
    related: ['self-direction', 'resilience'],
  },
  {
    id: 'resilience',
    title: 'Resilience',
    description: 'Optimism, luck, discomfort, and staying useful when outcomes are uncertain.',
    tags: ['startup', 'philosophy', 'tips'],
    related: ['self-direction', 'personal-systems'],
  },
  {
    id: 'relationships',
    title: 'Relationships',
    description: 'Friendship, family, status, and the people who make an ambition worth having.',
    tags: ['philosophy', 'passion'],
    related: ['self-direction'],
  },
  {
    id: 'imagination',
    title: 'Imagination',
    description: 'Stories, games, fiction, and playful frames for thinking about ordinary life.',
    tags: ['story', 'tech'],
    related: ['personal-systems'],
  },
]
