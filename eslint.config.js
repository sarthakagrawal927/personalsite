import nextConfig from 'eslint-config-next';

const config = nextConfig.map((entry) => {
  if (!entry.rules) return entry;

  return {
    ...entry,
    rules: Object.fromEntries(
      Object.entries(entry.rules).filter(([rule]) => !rule.startsWith('react/'))
    ),
  };
});

export default [
  {
    ignores: ['.contentlayer/**', '.next/**', '.open-next/**', '.yarn/**', 'node_modules/**'],
  },
  ...config,
  {
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
];
