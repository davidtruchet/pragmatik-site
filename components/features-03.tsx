'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import CarouselIllustration from '@/public/images/carousel-illustration-01.jpg'
import FeatureIllustration from '@/public/images/features-illustration.png'
import { BriefcaseBusiness, Lightbulb, Rocket, Search } from 'lucide-react'

export default function Features03() {

  const [tab, setTab] = useState<number>(1)

  return (
    <section className="relative bg-zinc-800 after:absolute after:top-0 after:right-0 after:h-full after:w-96 after:pointer-events-none after:bg-linear-to-l after:from-zinc-800 max-lg:after:hidden">
      <div className="py-12 md:py-20">

        {/* Carousel */}
        <div className="max-w-xl lg:max-w-6xl mx-auto px-4 sm:px-6">
          <div className="lg:flex space-y-12 lg:space-y-0 lg:space-x-12 xl:space-x-24">

            {/* Content */}
            <div className="lg:max-w-none lg:min-w-[524px]">
              <div className="mb-8">
                <h3 className="font-inter-tight text-3xl font-bold text-zinc-200 mb-4">How It Works</h3>
                <p className="text-lg text-zinc-500">From idea to execution—Pragmatik turns your vision into a validated digital business.
                With a smart and supportive flow powered by AI, you'll move from concept to real-world action in record time.</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0 space-y-2">
                <button
                  className={`text-left flex items-center px-6 py-4 rounded-sm border border-transparent ${tab !== 1 ? '' : '[background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,var(--color-zinc-700),--theme(--color-zinc-700/0),var(--color-zinc-700))_border-box]'}`}
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <Lightbulb className="text-zinc-400 mr-4 h-12 w-12" />
                  <div>
                    <div className="font-inter-tight text-lg font-semibold text-zinc-200 mb-1">Define Your Idea</div>
                    <div className="text-zinc-500">Answer a set of thoughtful questions to shape your concept. Our AI co-pilot helps refine your responses, ensuring clarity, structure, and focus.</div>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center px-6 py-4 rounded-sm border border-transparent ${tab !== 2 ? '' : '[background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,var(--color-zinc-700),--theme(--color-zinc-700/0),var(--color-zinc-700))_border-box]'}`}
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <Search className="text-zinc-400 mr-4 h-12 w-12" />
                  <div>
                    <div className="font-inter-tight text-lg font-semibold text-zinc-200 mb-1">Research & Validate</div>
                    <div className="text-zinc-500">Pragmatik taps into live market data to assess demand, trends, and competitors—so you know your idea has real potential before moving forward.</div>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center px-6 py-4 rounded-sm border border-transparent ${tab !== 3 ? '' : '[background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,var(--color-zinc-700),--theme(--color-zinc-700/0),var(--color-zinc-700))_border-box]'}`}
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <BriefcaseBusiness className="text-zinc-400 mr-4 h-12 w-12" />
                  <div>
                    <div className="font-inter-tight text-lg font-semibold text-zinc-200 mb-1">Generate Your Business Plan</div>
                    <div className="text-zinc-500">Instantly create a customized business plan that lays out your goals, strategy, audience, and revenue model—tailored to your unique idea and market.</div>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center px-6 py-4 rounded-sm border border-transparent ${tab !== 4 ? '' : '[background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,var(--color-zinc-700),--theme(--color-zinc-700/0),var(--color-zinc-700))_border-box]'}`}
                  onClick={(e) => { e.preventDefault(); setTab(4); }}
                >
                  <Rocket className="text-zinc-400 mr-4 h-12 w-12" />
                  <div>
                    <div className="font-inter-tight text-lg font-semibold text-zinc-200 mb-1">Execute</div>
                    <div className="text-zinc-500">Follow a guided roadmap to prototype, test, and validate your product with real users. Learn fast, iterate smart, and launch with confidence.</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Tabs items */}
            <div className="relative lg:max-w-none">
              <div className="relative flex flex-col">
                {/* Item 1 */}
                <Transition show={tab === 1}>
                  <div className="transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:translate-x-8 data-closed:absolute data-leave:duration-300 data-leave:data-closed:-translate-x-8">
                    <Image className="lg:max-w-none mx-auto rounded-lg shadow-2xl" src={CarouselIllustration} width={800} height={620} alt="Carousel 01" />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition show={tab === 2}>
                  <div className="transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:translate-x-8 data-closed:absolute data-leave:duration-300 data-leave:data-closed:-translate-x-8">
                    <Image className="lg:max-w-none mx-auto rounded-lg shadow-2xl" src={CarouselIllustration} width={800} height={620} alt="Carousel 02" />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition show={tab === 3}>
                  <div className="transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:translate-x-8 data-closed:absolute data-leave:duration-300 data-leave:data-closed:-translate-x-8">
                    <Image className="lg:max-w-none mx-auto rounded-lg shadow-2xl" src={CarouselIllustration} width={800} height={620} alt="Carousel 03" />
                  </div>
                </Transition>
                {/* Item 4 */}
                <Transition show={tab === 4}>
                  <div className="transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:translate-x-8 data-closed:absolute data-leave:duration-300 data-leave:data-closed:-translate-x-8">
                    <Image className="lg:max-w-none mx-auto rounded-lg shadow-2xl" src={CarouselIllustration} width={800} height={620} alt="Carousel 03" />
                  </div>
                </Transition>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}