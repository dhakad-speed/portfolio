import React from "react";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "About | PortFolio",
  description: "About Page",
};
function about() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 dark:bg-[#1f1f1f] bg-white text-black dark:text-white pt-30 items-center">
      <div className="aboutme-headline">
        <div className="about dark:text-[#fff] text-black  lg:tracking-[-9.12px] lg:uppercase lg:whitespace-nowrap lg:leading-[144px] lg:font-bold lg:text-[145.5px] md:uppercase  md:font-bold md:tracking-[-4.5px] md:text-[52px] md:leading-[52px]  tracking-[-3px] whitespace-nowrap text-[63px] leading-[55px] uppercase font-bold">
          about me
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center pt-3">
        <div className="flex flex-col gap-y-20 lg:mr-15 ">
          <div className="intro-text-wrapper">
            <div className="intro-text text-3xl dark:text-[#ffffffa3] text-black font-bold">
              {" "}
              Hey There I'm
            </div>
            <div className="intro-text-name font-bold text-3xl">
              Ayush Dhakad
            </div>
          </div>
          <Link href={"/contact"}>
            <button className="rounded-full w-[146px] h-[146px] dark:bg-[#323232] bg-[#9b36f2] text-white uppercase">
              Let's Chat
            </button>
          </Link>
        </div>
        <div className="rounded mx-auto ">
          <Image
            src="https://iili.io/3znizAJ.png"
            alt="ayush-img"
            width={500} // set width
            height={500} // set height
            className="object-contain rounded"
          />
        </div>
        <div className="flex flex-col gap-y-20 lg:ml-15 mt-6">
          <div className="skill-wrapper">
            <div className="skill-text dark:text-[#ffffffa3] text-black font-bold">
              A passionate video editor blending creativity with storytelling to
              craft engaging, polished content. Skilled in Premiere Pro, After
              Effects, and DaVinci Resolve with expertise in cutting, color
              grading, sound, and motion graphics.
            </div>
          </div>
        </div>
      </div>
      <div className="info-element-block grid lg:grid-cols-5 lg:gap-5 grid-cols-2 md:gap-5  pt-15 ">
        <div className="flex flex-col">
          <div className="info-head text-[72px]">12</div>
          <div className="info-text text-[#ffffffa3]">Years of experience</div>
        </div>
        <div className="flex flex-col">
          <div className="info-head text-[72px]">60+</div>
          <div className="info-text text-[#ffffffa3]">Projects Completed</div>
        </div>
        <div className="flex flex-col">
          <div className="info-head text-[72px]">20</div>
          <div className="info-text text-[#ffffffa3]">Award winner</div>
        </div>
        <div className="flex flex-col">
          <div className="info-head text-[72px]">98%</div>
          <div className="info-text text-[#ffffffa3]">Client satisfied</div>
        </div>
        <div className="flex flex-col">
          <div className="info-head text-[72px]">14+</div>
          <div className="info-text text-[#ffffffa3]">Industries served</div>
        </div>
      </div>
      <div className="flex justify-self-center my-25">
        <span className="text-6xl font-bold ">Why Choose Me?</span>
      </div>
      <div className="why-choose-me grid lg:grid-cols-2 grid-cols-1 gap-x-20">
        <div className="why-choose-me-section-img max-w-[584px]">
          <img
            src="https://images.unsplash.com/photo-1614963326505-843868e1d83a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="video-editor"
            className="max-w-[100%] h-auto"
          />
        </div>
        <div className="why-choose-me-text-block flex flex-col gap-y-10 mt-[16px]">
          <div className="gap-x-30 flex">
            <div className="why-choose-num text-2xl">(01)</div>
            <div className="why-choose-text-block">
              <div className="block-head text-2xl font-bold">
                Expert in tools
              </div>
              <div className="block-text text-[#ffffffa3] font-bold">
                My branding services are designed to help your business
                establish a strong and memorable identity. From crafting
                compelling brand stories to developing visual.
              </div>
            </div>
          </div>
          <div className="gap-x-30 flex">
            <div className="why-choose-num text-2xl">(02)</div>
            <div className="why-choose-text-block">
              <div className="block-head text-2xl font-bold">
                Creative ideas
              </div>
              <div className="block-text text-[#ffffffa3] font-bold">
                My branding services are designed to help your business
                establish a strong and memorable identity. From crafting
                compelling brand stories to developing visual.
              </div>
            </div>
          </div>
          <div className="gap-x-30 flex">
            <div className="why-choose-num text-2xl">(03)</div>
            <div className="why-choose-text-block">
              <div className="block-head text-2xl font-bold">
                Proven results
              </div>
              <div className="block-text text-[#ffffffa3] font-bold">
                My branding services are designed to help your business
                establish a strong and memorable identity. From crafting
                compelling brand stories to developing visual.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
