import Projects from '../projects/projects';

export default async function SimilarWorks({ id }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`, {
    cache: 'no-store'
  });
  const { data } = await res.json();

  const projects = data.items.filter((project) => project.id !== +id).slice(0, 2);

  return (
    <section className='SimilarWorks mt-80'>
      <div className='container'>
        <div className='Hero'>
          <div className='headWrapper d-flex align-items-center justify-content-between'>
            <div className='leftSide d-flex flex-column gap-4'>
              <small className='d-flex align-items-center gap-3'>
                <span className='dot mb-0'></span>
                أعمال مشابهة
              </small>
              <p>خارج كل علامة تجارية، هناك حل يحدث فرقًا.</p>
            </div>
          </div>
        </div>

        <Projects projects={projects} />
      </div>
    </section>
  );
}
