import React from "react";
import Image from "next/image";
export const metadata = {
  title: "Project | Portfolio",
  description: "Project Page",
};

function Project() {
  return (
    <div className="dark:bg-[#323232] mx-auto max-w-7xl dark:text-white bg-white text-black lg:pt-10 md:pt-5 pt-5 px-3">
      <div
        className="container mx-auto mt-5 pb-20
      "
      >
        <div className="lg:text-9xl md:text-8xl text-6xl uppercase font-bold mb-12">
          projects
        </div>

        <div className="projects-wrapper mx-auto container grid grid-cols-12 items-center  gap-8">
          <div className="lg:col-span-5 md:col-span-6 col-span-12">
            <Image
              src={
                "https://images.unsplash.com/photo-1610847455028-9e55e62bac33?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={500}
              height={200}
              alt="cinematic"
              className="object-contain h-auto"
            />
          </div>
          <div className="lg:col-span-6 md:col-span-6 col-span-12">
            <div className="lg:text-6xl md:text-4xl text-3xl uppercase font-bold">
              Cinematic Edit
            </div>
            <div className="lg:text-xl md:text-base text-sm">
              A visually immersive storytelling edit designed to capture emotion
              and atmosphere. With seamless transitions, dramatic pacing, and
              rich color grading, this project transforms raw footage into a
              cinematic experience that feels like film.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
