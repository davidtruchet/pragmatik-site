import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-zinc-200">

          {/* 1st block */}
          <div className="sm:col-span-8 md:col-span-6 lg:col-span-8 max-sm:order-1 flex flex-col">
            <div className="mb-4">
              {/* Logo */}
              <Link className="flex items-center justify-center bg-white w-8 h-8 rounded-sm shadow-xs shadow-zinc-950/20" href="/">
                <Image src={Logo} width={24} height={24} alt="Logo" />
              </Link>
            </div>
            <div className="grow text-sm text-zinc-500">&copy; Pragmatik All rights reserved.</div>
            {/* Social links */}
            <ul className="flex space-x-4 mt-4 mb-1">
              <li>
                <a className="flex justify-center items-center text-zinc-700 hover:text-zinc-900 transition" href="#0" aria-label="Twitter">
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path d="m7.063 3 3.495 4.475L14.601 3h2.454l-5.359 5.931L18 17h-4.938l-3.866-4.893L4.771 17H2.316l5.735-6.342L2 3h5.063Zm-.74 1.347H4.866l8.875 11.232h1.36L6.323 4.347Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a className="flex justify-center items-center text-zinc-700 hover:text-zinc-900 transition" href="#0" aria-label="Medium">
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path d="M17 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V12.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241V7.993L9.6 14.124h-.329l-2.81-6.13V12.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472V7.351A.416.416 0 0 0 5.683 7l-1-1.209V5.61H7.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-zinc-800 font-medium mb-2">Company</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">About us</a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-zinc-800 font-medium mb-2">Legals</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">Refund policy</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">Terms of use</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">Privacy policy</a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  )
}
