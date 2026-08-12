import { projects, getProjectBySlug, getNextProject } from "@/lib/projects";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return <div className="pt-32 px-12 text-center">Project not found</div>;
  const next = getNextProject(slug);
  return <ProjectDetailClient project={project} nextProject={next} />;
}
