'use client'

import React from "react";
import Accordion from "./accordion";

const faqs = [
    {
        title: 'Can I use the product for free?',
        text: 'Absolutely! Pragmatik allows you to create a free account and use our platform for free.',
        active: false,
    },
    {
        title: 'Who is this platform for?',
        text: 'Our platform is designed for entrepreneurs, startups, and founders looking to validate and refine their business ideas before launching.',
        active: false,
    },
    {
        title: 'Do I need prior business experience?',
        text: 'No! Whether you\'re a first-time founder or an experienced entrepreneur, our AI-powered system adapts to your level of experience.',
        active: false,
    },
    {
        title: 'How does AI help in the process?',
        text: 'AI assists in refining your answers, conducting market research, generating business plans, and providing actionable steps to bring your idea to life.',
        active: false,
    },
    {
        title: 'Can I iterate on my business idea?',
        text: 'Absolutely! You can continuously refine your idea, request additional research, and iterate on your business plan at any stage.',
        active: false,
    },
    {
        title: 'What happens after the business plan?',
        text: 'We help you take action with real-world steps, from building a prototype to testing your product with potential customers.',
        active: false,
    },
]

const FAQ: React.FC = () => {
    return (
        <section className="relative bg-zinc-800 after:absolute after:top-0 after:right-0 after:h-full after:w-96 after:pointer-events-none after:bg-linear-to-l after:from-zinc-800 max-lg:after:hidden">
            <div className="py-12 md:py-20">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-8 text-center">
                        <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-200 mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-2">
                        {faqs.map((faq, index) => (
                            <Accordion
                                key={index}
                                title={faq.title}
                                id={`faqs-${index}`}
                                active={faq.active}
                            >
                                {faq.text}
                            </Accordion>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FAQ;