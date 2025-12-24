import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default async function FaqsSection({ data }) {
  const { faqsSection } = data;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/faqs`, {
    cache: 'no-store'
  });
  const {
    data: { items: faqs }
  } = await res.json();

  return (
    <>
      <section className='questiones' >
        <div className='container ' data-aos='zoom-in'>
          <div className='wrapper'>
            <div className='head text-center'>
              <h3>{faqsSection.title}</h3>
              <p>{faqsSection.content}</p>
              <div className='linkes d-flex gap-3 justify-content-center align-items-center'>
                <span>أتصل بنا</span>
                <Link href={faqsSection.button_url} passHref className='text-decoration-none'>
                  <button type='button' className='btn btn-success d-flex justify-content-center align-items-center'>
                    {faqsSection.button_text} <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                </Link>
              </div>
            </div>

            <div className='Qu mt-5 w-100'>
              <div className='accordion accordion-flush' id='accordionFlushExample'>
                {faqs.map((item) => (
                  <div className='accordion-item' key={item.id}>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target={`#${item.id}`}
                        aria-expanded='false'
                        aria-controls={item.id}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div id={item.id} className='accordion-collapse collapse' data-bs-parent='#accordionFlushExample'>
                      <div className='accordion-body'>{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
