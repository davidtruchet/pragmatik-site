import Image from 'next/image'
import FeatureImage01 from '@/public/images/feature-post-01.png'
import FeatureImage02 from '@/public/images/feature-post-02.png'
import FeatureImage03 from '@/public/images/feature-post-03.png'
import FeatureImage04 from '@/public/images/start-plan.png'
import FeatureImage05 from '@/public/images/feature-post-05.png'
import FeatureImage06 from '@/public/images/key-assump-white.png'
import { Bot, Brain, ChartNoAxesColumnIncreasing, Lightbulb, NotebookPen, Search } from 'lucide-react'

export default function Features02() {
  return (
    <section>
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">The Features That Empower Your Business Journey</h2>
            <p className="text-lg text-zinc-500">From your first idea to full execution, Pragmatik gives you everything you need to build a successful digital business—powered by AI, enhanced by your own insights, and tailored just for you.</p>
          </div>
          <div className="max-w-xs mx-auto sm:max-w-none grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 lg:gap-8">
            <article className="sm:col-span-2 flex flex-col border border-transparent [background:linear-gradient(var(--color-white),var(--color-zinc-50))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <Lightbulb className="text-zinc-400 mr-2 h-6 w-6" />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Idea Development</h3>
                </div>
                <p className="grow text-sm text-zinc-500">Get smart, contextual support to shape your business concept. Our AI guides you through the early-stage questions and helps you refine your vision with clarity and confidence.</p>
              </div>
              <figure>
                <Image className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto" src={FeatureImage01} width={721} height={280} alt="Feature Post 01" />
              </figure>
            </article>
            <article className="flex flex-col border border-transparent [background:linear-gradient(var(--color-white),var(--color-zinc-50))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <ChartNoAxesColumnIncreasing className="text-zinc-400 mr-2 h-6 w-6" />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Smart Market Research</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">Our research agents scan trends, competition, legal landscapes, and demand—delivering clear, data-backed insights to validate your idea.</p>
              </div>
              <figure className="flex items-center justify-center h-[280px]">
                <svg width="128" height="128" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[220px] w-auto">
                  <defs>
                    <radialGradient id="shieldBg2" cx="16" cy="16" r="16" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#C7B8EA" stopOpacity="0.23" />
                      <stop offset="70%" stopColor="#C7B8EA" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="16" cy="16" r="16" fill="url(#shieldBg2)" />
                  <g id="secure_payment" data-name="secure payment">
                    <path d="M27.5 8.21A2.77 2.77 0 0 0 26 6.33l-8.77-4.06a2.8 2.8 0 0 0-2.4 0L6.09 6.34a2.74 2.74 0 0 0-1.53 1.84A19.23 19.23 0 0 0 6 21.32a18 18 0 0 0 9 8.45 2.83 2.83 0 0 0 1 .23 2.74 2.74 0 0 0 1.15-.25A18.21 18.21 0 0 0 26 21.32a19.65 19.65 0 0 0 1.5-13.11zm-3.3 12.21a16.33 16.33 0 0 1-7.85 7.51.82.82 0 0 1-.65 0 15.94 15.94 0 0 1-7.95-7.51A17.26 17.26 0 0 1 6.5 8.66a.75.75 0 0 1 .43-.51l8.75-4.07a.8.8 0 0 1 .71 0l8.73 4.06a.79.79 0 0 1 .43.52 17.6 17.6 0 0 1-1.35 11.76z" fill="#A084E8"/>
                    <path d="m20.2 11.4-5.23 7-3.19-4a1 1 0 0 0-1.4-.16 1 1 0 0 0-.16 1.41l4 5A1 1 0 0 0 15 21a1 1 0 0 0 .78-.4l6-8a1 1 0 1 0-1.6-1.2z" fill="#22223B"/>
                  </g>
                </svg>
              </figure>
            </article>
            <article className="flex flex-col border border-transparent [background:linear-gradient(var(--color-white),var(--color-zinc-50))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <Search className="text-zinc-400 mr-2 h-6 w-6" />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Verified Sources & Human Input</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">We rank research from trusted sites and show source links for transparency. Plus, you can add your own research hints to personalize your journey even further.</p>
              </div>
              <figure>
                <Image className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto" src={FeatureImage03} width={342} height={280} alt="Feature Post 03" />
              </figure>
            </article>
            <article className="flex flex-col border border-transparent [background:linear-gradient(var(--color-white),var(--color-zinc-50))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <NotebookPen className="text-zinc-400 mr-2 h-6 w-6" />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Auto-Generated Business Plan</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">Create a complete, tailored business plan that grows with your idea—your strategic blueprint for launching and scaling.</p>
              </div>
              <figure>
              <Image className="h-[280px] mb-16 object-cover object-left mx-auto sm:object-contain sm:h-auto shadow-lg border-2 border-zinc-200 rounded-md transform rotate-[5deg]" src={FeatureImage04} width={320} height={280} alt="Feature Post 04" />
              </figure>
            </article>
            <article className="flex flex-col border border-transparent [background:linear-gradient(var(--color-white),var(--color-zinc-50))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <Brain className="text-zinc-400 mr-2 h-6 w-6" />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Continuous Context Awareness</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">As you progress, our system learns more about your business, customizing each phase and recommendation to your project's unique needs.</p>
              </div>
              <figure>
                <Image className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto" src={FeatureImage05} width={342} height={280} alt="Feature Post 05" />
              </figure>
            </article>
            <article className="flex flex-col border border-transparent [background:linear-gradient(var(--color-white),var(--color-zinc-50))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <ChartNoAxesColumnIncreasing className="text-zinc-400 mr-2 h-6 w-6" />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Built-In Data Privacy</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">Your data is yours. We don't share, sell, or reuse anything you input—your ideas and plans stay 100% private and secure.</p>
              </div>          
              <figure className="flex items-center justify-center h-[280px]">
                <svg width="128" height="128" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[220px] w-auto">
                  <defs>
                    <radialGradient id="shieldBg2" cx="16" cy="16" r="16" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#C7B8EA" stopOpacity="0.23" />
                      <stop offset="70%" stopColor="#C7B8EA" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="16" cy="16" r="16" fill="url(#shieldBg2)" />
                  <g id="secure_payment" data-name="secure payment">
                    <path d="M27.5 8.21A2.77 2.77 0 0 0 26 6.33l-8.77-4.06a2.8 2.8 0 0 0-2.4 0L6.09 6.34a2.74 2.74 0 0 0-1.53 1.84A19.23 19.23 0 0 0 6 21.32a18 18 0 0 0 9 8.45 2.83 2.83 0 0 0 1 .23 2.74 2.74 0 0 0 1.15-.25A18.21 18.21 0 0 0 26 21.32a19.65 19.65 0 0 0 1.5-13.11zm-3.3 12.21a16.33 16.33 0 0 1-7.85 7.51.82.82 0 0 1-.65 0 15.94 15.94 0 0 1-7.95-7.51A17.26 17.26 0 0 1 6.5 8.66a.75.75 0 0 1 .43-.51l8.75-4.07a.8.8 0 0 1 .71 0l8.73 4.06a.79.79 0 0 1 .43.52 17.6 17.6 0 0 1-1.35 11.76z" fill="#A084E8"/>
                    <path d="m20.2 11.4-5.23 7-3.19-4a1 1 0 0 0-1.4-.16 1 1 0 0 0-.16 1.41l4 5A1 1 0 0 0 15 21a1 1 0 0 0 .78-.4l6-8a1 1 0 1 0-1.6-1.2z" fill="#22223B"/>
                  </g>
                </svg>
              </figure>
            </article>
            <article className="sm:col-span-2 flex flex-col border border-transparent [background:linear-gradient(var(--color-white),var(--color-zinc-50))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <Bot className="text-zinc-400 mr-2 h-6 w-6" />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Execution Made Simple</h3>
                </div>
                <p className="grow text-sm text-zinc-500">Turn your plan into action with a tailored, step-by-step roadmap to prototype, test, and validate your product in real-world scenarios.</p>
              </div>
              <figure>
                <Image className="h-[280px] mb-5 object-cover object-left mx-auto sm:object-contain sm:h-auto border border-gray-300 rounded-xl shadow-lg" src={FeatureImage06} width={690} height={280} alt="Feature Post 01" />
              </figure>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}