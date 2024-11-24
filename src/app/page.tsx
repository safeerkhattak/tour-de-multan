

export default function Home() {
  return (
    <>
    <section>

    
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
        {/* <div className="text-white text-base sm:text-lg md:text-xl font-semibold leading-relaxed mb-6 sm:mb-8">
          <p>
            Multan, nicknamed &apos;The City of Saints&apos;, has been a place of interest for tourists because of its spiritual
            thrust and gaudy shrines. It is one of the oldest cities of Pakistan with almost 5,000 years of history,
            heritage, and culture dripping from its buildings. One of the must-visit places here is the Tomb of Shah Ali Akbar,
            a rustic structure with exquisite blue tile and mirror work reflecting Islamic architecture and design. The tomb
            boasts similarity to the Tomb of Shah Rukne Alam, another monument exuding the spiritualism deeply set in Multan.
          </p>
        </div> */}

        {/* Motto */}
        <div className="mt-1 text-white text-2xl sm:text-3xl font-bold italic">
          <p>&quot;Explore the Unexplored&quot;</p>
        </div>
      </div>
    </div>
    </section>
{/* //about section */}
    {/* <section className="lg:px-40 bg-white  p-16">
      <h1 className="text-2xl text-black sm:text-3xl font-bold italic py-3">Places To Visit In Multan </h1>
      <div className="flex flex-row">

          <div className="w-2/4">
            <Image src={"https://www.chalopakistan.com.pk/Destination-images/da-18-2.jpg"} alt="" height={400} width={400} />
          </div>
          
             <div className="text-black text-base w-2/4 sm:text-lg md:text-xl  leading-relaxed mb-6 sm:mb-8">
          <p>
            Multan, nicknamed &apos;The City of Saints&apos;, has been a place of interest for tourists because of its spiritual
            thrust and gaudy shrines. It is one of the oldest cities of Pakistan with almost 5,000 years of history,
            heritage, and culture dripping from its buildings. One of the must-visit places here is the Tomb of Shah Ali Akbar,
            a rustic structure with exquisite blue tile and mirror work reflecting Islamic architecture and design. The tomb
            boasts similarity to the Tomb of Shah Rukne Alam, another monument exuding the spiritualism deeply set in Multan.
          </p>
        </div>
          
      </div>
    </section> */}
    </>
  );
}
