import FirstSection from '@/components/ProjectsDetailsComp/FirstSection';
import Hero from '@/components/ProjectsDetailsComp/hero';
import ImagesSection from '@/components/ProjectsDetailsComp/ImgesSection';
import SecondSection from '@/components/ProjectsDetailsComp/SecondSections';
import SimilarWorks from '@/components/ProjectsDetailsComp/Similar works';
import ErrorRequest from '@/components/ErrorRequest';

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/projects/${id}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    return <ErrorRequest />;
  }

  const { data: projectData } = await res.json();

  console.log(projectData);

  return (
    <>
      <Hero
        data={{
          title: projectData.title,
          sub_title: projectData.sub_title,
          category: projectData.category,
          implemented_date: projectData.implemented_date
        }}
      />
      <FirstSection
        data={{
          description: projectData.description,
          cover_image: projectData.cover_image,
          description_below: projectData.description_below
        }}
      />
      <SecondSection data={projectData} />
      <ImagesSection data={projectData.images} />
      <SimilarWorks id={id} />
    </>
  );
}
