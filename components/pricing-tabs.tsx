'use client'

import { useState, useEffect } from 'react'

import Image from 'next/image'
import PricingDecoration from '@/public/images/pricing-decoration.png'
import Tooltip from '@/components/tooltip'
import Accordion from '@/components/accordion'

export default function PricingTabs() {
  const prices = {
    essential: '5',
    premium: '9',
    enterprise: '19'
  }

  return (
    <section>
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Plans</h2>
            <p className="text-lg text-zinc-500">Choose the plan that best fits your needs.</p>
          </div>

          {/* Pricing tabs component */}
          <div className="pb-12 md:pb-20">

            <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">

              {/* Pricing tab 1 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-lg border border-transparent [background:linear-gradient(var(--color-zinc-50),var(--color-zinc-50))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box]">
                  <div className="mb-4">
                    <div className="text-lg text-zinc-900 font-semibold mb-1">Essential</div>
                    <div className="font-inter-tight inline-flex items-baseline mb-2">
                      <span className="text-zinc-900 font-bold text-2xl">$</span>
                      <span className="text-zinc-900 font-bold text-3xl">{prices.essential}</span>
                      <span className="text-zinc-500 font-medium">/mo</span>
                    </div>
                    <div className="text-zinc-500">For power users who want access to creative features.</div>
                  </div>
                  <div className="grow">
                    <div className="text-sm text-zinc-900 font-medium mb-4">Includes:</div>
                    <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 grow">
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="01" content="Lorem Ipsum is simply dummy text of the printing.">
                          Unlimited workspace boards
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="02" content="Lorem Ipsum is simply dummy text of the printing.">
                          Unlimited viewers
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="03" content="Lorem Ipsum is simply dummy text of the printing.">
                          Unlimited project templates
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="04" content="Lorem Ipsum is simply dummy text of the printing.">
                          Change management
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="05" content="Lorem Ipsum is simply dummy text of the printing.">
                          Taxonomy development
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="06" content="Lorem Ipsum is simply dummy text of the printing.">
                          Customer success manager
                        </Tooltip>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <a className="btn text-zinc-100 bg-linear-to-r from-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-900 w-full shadow-sm" href="#0">
                      Try for Free
                    </a>
                  </div>
                </div>
              </div>

              {/* Pricing tab 2 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-lg bg-zinc-800">
                  <Image className="absolute right-6 -top-5 mix-blend-exclusion" src={PricingDecoration} alt="Pricing decoration" width={76} height={74} aria-hidden="true" />
                  <div className="mb-4">
                    <div className="text-lg text-zinc-200 font-semibold mb-1">Premium</div>
                    <div className="font-inter-tight inline-flex items-baseline mb-2">
                      <span className="text-zinc-200 font-bold text-2xl">$</span>
                      <span className="text-zinc-200 font-bold text-3xl">{prices.premium}</span>
                      <span className="text-zinc-500 font-medium">/mo</span>
                    </div>
                    <div className="text-zinc-500">For creative organizations that need full control & support.</div>
                  </div>
                  <div className="grow">
                    <div className="text-sm text-zinc-200 font-medium mb-4">Includes:</div>
                    <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 grow">
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="07" content="Lorem Ipsum is simply dummy text of the printing." dark>
                          Unlimited workspace boards
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="08" content="Lorem Ipsum is simply dummy text of the printing." dark>
                          Unlimited viewers
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="09" content="Lorem Ipsum is simply dummy text of the printing." dark>
                          Unlimited project templates
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="10" content="Lorem Ipsum is simply dummy text of the printing." dark>
                          Change management
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="11" content="Lorem Ipsum is simply dummy text of the printing." dark>
                          Taxonomy development
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="12" content="Lorem Ipsum is simply dummy text of the printing." dark>
                          Customer success manager
                        </Tooltip>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <a className="btn text-zinc-600 bg-white hover:text-zinc-900 w-full shadow-sm" href="#0">
                      Try for Free
                    </a>
                  </div>
                </div>
              </div>

              {/* Pricing tab 3 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-lg border border-transparent [background:linear-gradient(var(--color-zinc-50),var(--color-zinc-50))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box]">
                  <div className="mb-4">
                    <div className="text-lg text-zinc-900 font-semibold mb-1">Enterprise</div>
                    <div className="font-inter-tight inline-flex items-baseline mb-2">
                      <span className="text-zinc-900 font-bold text-2xl">$</span>
                      <span className="text-zinc-900 font-bold text-3xl">{prices.enterprise}</span>
                      <span className="text-zinc-500 font-medium">/mo</span>
                    </div>
                    <div className="text-zinc-500">For creative organizations that need full control & support.</div>
                  </div>
                  <div className="grow">
                    <div className="text-sm text-zinc-900 font-medium mb-4">Includes:</div>
                    <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 grow">
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="13" content="Lorem Ipsum is simply dummy text of the printing.">
                          Unlimited workspace boards
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="14" content="Lorem Ipsum is simply dummy text of the printing.">
                          Unlimited viewers
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="15" content="Lorem Ipsum is simply dummy text of the printing.">
                          Unlimited project templates
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="16" content="Lorem Ipsum is simply dummy text of the printing.">
                          Change management
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="17" content="Lorem Ipsum is simply dummy text of the printing.">
                          Taxonomy development
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="18" content="Lorem Ipsum is simply dummy text of the printing.">
                          Customer success manager
                        </Tooltip>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <a className="btn text-zinc-100 bg-linear-to-r from-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-900 w-full shadow-sm" href="#0">
                      Try for Free
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}