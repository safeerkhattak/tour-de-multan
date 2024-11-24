'use client'
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full z-50">
      {/* <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 
        text-white lg:bg-[rgba(0,64,128,0.85)] lg:bg-opacity-80 lg:backdrop-blur-sm"
        aria-label="Global"
      > */}
         <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 
        text-white"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Tour De Multan</span>
            <Image
              className="h-8 w-auto"
              src="/tour-de-multan.png"
              alt="logo"
              width={50}
              height={50}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => document.getElementById('mobile-menu')?.classList.remove('hidden')}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-sm font-semibold hover:text-gray-300">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold hover:text-gray-300">
            Company
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-4">
          {/* <a
            href="#"
            className="text-sm font-semibold hover:text-gray-300"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
             <Image
              className="cursor-pointer"
              src="/twitter.svg"
              alt="logo"
              width={26}
              height={26}
            />
                 <Image
              className="cursor-pointer"
              src="/instagram.svg"
              alt="logo"
              width={26}
              height={26}
            />
                 <Image
              className="cursor-pointer"
              src="/facebook.svg"
              alt="logo"
              width={26}
              height={26}
            />
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="hidden lg:hidden fixed inset-0 z-10 bg-black bg-opacity-90 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Tour De Multan</span>
            <Image
              className="h-8 w-auto"
              src="/tour-de-multan.png"
              alt="logo"
              width={50}
              height={50}
            />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-white"
            onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700"
              >
                About Multan
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700"
              >
                Company
              </a>
            </div>
            <div className="py-6">
              {/* <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-gray-700"
              >
                Log in
              </a> */}
               <Image
              className="h-8 w-auto"
              src="/tour-de-multan.png"
              alt="logo"
              width={50}
              height={50}
            />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
