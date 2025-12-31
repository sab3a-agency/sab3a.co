import ProjectsHeader from '@/components/projects/projects-header';
import LetsDoit from '@/components/LetsDoit';
import PartnersSection from '@/components/projects/partners-section';
import Projects from '@/components/projects/projects';

export default async function ProjectsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`, {
    cache: 'no-store'
  });
  const { data } = await res.json();

  return (
    <>
      <ProjectsHeader data={data.section} />
      <Projects projects={data.items} />
      <PartnersSection />
      <LetsDoit />
    </>
  );
}
