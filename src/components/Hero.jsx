import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="h-full flex w-full flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row ">
      {/* IMAGE CONTAINER  */}
      <div className="relative h-1/2 lg:h-full lg:w-1/2   ">
        <Image
          src="/hero.png"
          fill
          className="z-1"
          style={{ objectFit: "contain" }}
        ></Image>
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-6 items-center justify-center pt-10 lg:h-full lg:w-1/2">
        {/* HEADING  */}
        <h1 className="text-4xl font-bold md:text-6xl">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        {/* PARAGRAPH */}
        <p className="md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum fugiat
          fugit nisi et dicta
        </p>
        {/* BUTTON DIV  */}
        <div className=" flex gap-4 w-full">
          <button className="p-3 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-3 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero
