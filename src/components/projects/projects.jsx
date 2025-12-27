import Image from 'next/image';
import Link from 'next/link';

export default async function Projects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`, {
    cache: 'no-store'
  });
  const {
    data: { items: projects }
  } = await res.json();

  return (
    <div className='projectsWrapper mt-5' data-aos='fade-up' data-aos-duration='1000'>
      <div className='row justify-content-between flex-wrap-wrap'>
        {projects.map((project) => (
          <div key={project.id} className='box col-12 col-md-6'>
            <Link href={`/projects/${project.id}`} className='imgWrapper'>
              <Image src={project.cover_image?.replace(/\\/g, '/')} alt={project.title} loading='eager' width={608} height={500} />
            </Link>
            <div className='info mt-2 p-3'>
              <h2 className='mb-4'>{project.title}</h2>
              <p className='my-3'>{project.sub_title}</p>
            </div>
            <div className='anchors d-flex gap-3 container'>
              <Link href='#'>{project.category}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
