// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


// import Image from "next/image";

// export default function Home() {
//   return (
//     <div
//       className="relative  w-screen min-h-screen bg-cover bg-no-repeat text-center"
//       style={{ backgroundImage: "url('/hazrat-bahahuddin.jpg')", backgroundPosition: "center center",  }}
//     >
//       <div className="absolute inset-0 h-full w-full bg-black bg-opacity-50 px-24">
//         <div className="flex h-full items-center justify-start">
//           <div className="text-white drop-shadow-lg">
//             {/* <h2 className="mb-4 text-7xl font-bold ">Tour De Multan</h2>
//             <h4 className="mb-6 text-xl font-semibold">Discover the History, Culture, and Charm of Multan</h4> */}
//             <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:text-7xl font-[family-name:var(--font-bebas-neue)">
//               TOUR DE MULTAN
//             </h2>
//             <h4 className="mb-6 text-lg font-semibold sm:text-xl md:text-2xl font-[family-name:var(--font-geist-mono)]">
//               Discover the History, Culture, and Charm of Multan
//             </h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div
//       className="relative w-screen min-h-screen bg-cover bg-no-repeat text-center"
//       style={{ backgroundImage: "url('/hazrat-bahahuddin.jpg')", backgroundPosition: "center center" }}
//     >
//       <div className="absolute inset-0 h-full w-full bg-black bg-opacity-50 px-24 flex flex-col justify-center">
//         {/* Hero Content (Header) */}
//         <div className="text-white drop-shadow-lg mb-8">
//           <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:text-7xl font-[family-name:var(--font-bebas-neue)]">
//             TOUR DE MULTAN
//           </h2>
//           <h4 className="mb-6 text-lg font-semibold sm:text-xl md:text-2xl font-[family-name:var(--font-geist-mono)]">
//             Discover the History, Culture, and Charm of Multan
//           </h4>
//         </div>

//         {/* Description */}
//         <div className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed">
//           <p>
//             Multan, nicknamed 'The City of Saints', has been a place of interest for tourists because of its spiritual
//             thrust and gaudy shrines. It is one of the oldest cities of Pakistan with almost 5,000 years of history,
//             heritage, and culture dripping from its buildings. One of the must-visit places here is the Tomb of Shah Ali Akbar,
//             a rustic structure with exquisite blue tile and mirror work reflecting Islamic architecture and design. The tomb
//             boasts similarity to the Tomb of Shah Rukne Alam, another monument exuding the spiritualism deeply set in Multan.
//           </p>
//         </div>
//         <div className="mt-8 text-white text-2xl sm:text-3xl font-bold italic">
//   <p>"Explore the Unexplored"</p>
// </div>
//       </div>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div
      className="relative w-screen min-h-screen bg-cover bg-no-repeat text-center"
      style={{ backgroundImage: "url('/hazrat-bahahuddin.jpg')", backgroundPosition: "center center" }}
    >
      <div className="absolute inset-0 h-full w-full bg-black bg-opacity-50 px-6 sm:px-12 lg:px-24 flex flex-col justify-center items-center text-center">
        {/* Hero Content (Header) */}
        <div className="text-white drop-shadow-lg mb-6 sm:mb-8">
          <h2 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-bebas-neue)]">
            TOUR DE MULTAN
          </h2>
          <h4 className="mb-6 text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-geist-mono)]">
            Discover the History, Culture, and Charm of Multan
          </h4>
        </div>

        {/* Description */}
        <div className="text-white text-base sm:text-lg md:text-xl font-semibold leading-relaxed mb-6 sm:mb-8">
          <p>
            Multan, nicknamed &apos;The City of Saints&apos;, has been a place of interest for tourists because of its spiritual
            thrust and gaudy shrines. It is one of the oldest cities of Pakistan with almost 5,000 years of history,
            heritage, and culture dripping from its buildings. One of the must-visit places here is the Tomb of Shah Ali Akbar,
            a rustic structure with exquisite blue tile and mirror work reflecting Islamic architecture and design. The tomb
            boasts similarity to the Tomb of Shah Rukne Alam, another monument exuding the spiritualism deeply set in Multan.
          </p>
        </div>

        {/* Motto */}
        <div className="mt-6 text-white text-2xl sm:text-3xl font-bold italic">
          <p>&quot;Explore the Unexplored&quot;</p>
        </div>
      </div>
    </div>
  );
}
