import { notFound } from 'next/navigation';
import ProjectContent from '../components/ProjectContent';
import { getSanityProjectBySlug, getSanityProjectSlugs } from '@/sanity/lib/queries';

export async function generateStaticParams() {
  const projects = await getSanityProjectSlugs();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getSanityProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.title,
  };
}

const SanityProjectPage = async ({ params }) => {
  const { slug } = await params;
  const project = await getSanityProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-11/12 lg:w-10/12 pb-10">
      <h2 className="text-base md:text-lg lg:text-2xl mb-8">{project.title}</h2>
      <ProjectContent blocks={project.content} />
    </div>
  );
};

export default SanityProjectPage;
