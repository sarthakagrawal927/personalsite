import projectsData from '@/data/projectsData';

export function GET() {
  return Response.json({
    updatedAt: new Date().toISOString(),
    projects: projectsData,
  });
}
