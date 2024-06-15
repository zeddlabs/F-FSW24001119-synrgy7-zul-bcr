import { AccordionItem } from "../ui"

export default function Faq() {
  return (
    <section className='faq section container' id='faq'>
      <div className='row'>
        <div className='col-lg-5'>
          <h2 className='faq__title'>Frequently Asked Question</h2>
          <p className='faq__desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className='col-lg-7'>
          <div
            className='faq__accordion accordion accordion-flush'
            id='faqAccordion'
          >
            <AccordionItem
              title='Apa saja syarat yang dibutuhkan?'
              body='Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto, fuga autem! Eum, labore. Architecto eos
                  reprehenderit eaque, dolorum blanditiis voluptatibus?'
            />
            <AccordionItem
              title='Berapa hari minimal sewa mobil lepas kunci?'
              body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  beatae dignissimos magni maxime ducimus minus aut nisi
                  distinctio perspiciatis ipsum?'
            />
            <AccordionItem
              title='Berapa hari sebelumnya sabaiknya booking sewa mobil?'
              body='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum earum hic non mollitia iusto explicabo, deleniti
                  ducimus ea tenetur libero?'
            />
            <AccordionItem
              title='Apakah Ada biaya antar-jemput?'
              body='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                  iste ipsum recusandae nesciunt sunt libero alias asperiores
                  maxime consequatur consequuntur?'
            />
            <AccordionItem
              title='Bagaimana jika terjadi kecelakaan'
              body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  consequatur commodi sequi at suscipit quo maxime pariatur fuga
                  ipsum corrupti!'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
