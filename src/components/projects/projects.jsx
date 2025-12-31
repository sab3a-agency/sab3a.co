import Image from 'next/image';
import Link from 'next/link';

export default function Projects({ projects }) {
  return (
    <div className='border-bottom border-gray'>
      <div className='container'>
        <div className='projectsWrapper mt-5' data-aos='fade-up' data-aos-duration='1000'>
          <div className='row justify-content-between flex-wrap-wrap '>
            {projects.map((project) => (
              <div key={project.id} className='box col-12 col-md-6 px-3'>
                <Link href={`/projects/${project.id}`} className='imgWrapper d-inline-block w-100'>
                  <Image src={project.cover_image} alt={project.title} loading='eager' width={608} height={500} />
                </Link>
                <div className='info mt-2 p-3'>
                  <Link href={`/projects/${project.id}`}>
                    <h2 className='mb-4'>{project.title}</h2>
                  </Link>
                  <p className='my-3'>{project.sub_title}</p>
                </div>
                <div className='anchors d-flex gap-3 container'>
                  <span>{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
