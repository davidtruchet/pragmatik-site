'use client'

import { useState, useEffect } from 'react'

type AccordionpProps = {
  children: React.ReactNode
  title: string
  id: string,
  active?: boolean
}

export default function Accordion({
  children,
  title,
  id,
  active = false
}: AccordionpProps) {

  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)

  useEffect(() => {
    setAccordionOpen(active)
  }, [])

  return (
    <div className="bg-zinc-100 rounded-sm">
      <h2>
        <button
          className="flex items-center justify-between w-full font-inter-tight text-left font-medium text-zinc-200 [background:linear-gradient(#323237,#323237)_padding-box,linear-gradient(120deg,var(--color-zinc-700),--theme(--color-zinc-700/0),var(--color-zinc-700))_border-box] px-4 py-2.5"
          onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span>{title}</span>
          <svg className="fill-zinc-400 shrink-0 ml-8" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <rect y="5" width="12" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${accordionOpen && 'rotate-180!'}`} />
            <rect y="5" width="12" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && 'rotate-180!'}`} />
          </svg>           
        </button>        
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm [background:linear-gradient(#323237,#323237)_padding-box,linear-gradient(120deg,var(--color-zinc-700),--theme(--color-zinc-700/0),var(--color-zinc-700))_border-box] text-zinc-500 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-3">
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}
