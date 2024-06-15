import { useState } from "react"

type AccordionItemProps = {
  title: string
  body: string
}

export default function AccordionItem({ title, body }: AccordionItemProps) {
  const [collapsed, setCollapsed] = useState(true)

  const toggleAccordion = () => setCollapsed(!collapsed)

  return (
    <div className='accordion-item'>
      <h2 className='accordion-header'>
        <button
          className={`accordion-button ${collapsed ? "collapsed" : ""}`}
          type='button'
          onClick={toggleAccordion}
        >
          {title}
        </button>
      </h2>
      <div
        id='flush-collapseOne'
        className={`accordion-collapse collapse ${collapsed ? "" : "show"}`}
        data-bs-parent='#faqAccordion'
      >
        <div className='accordion-body'>{body}</div>
      </div>
    </div>
  )
}
