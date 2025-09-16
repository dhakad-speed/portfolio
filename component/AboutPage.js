"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
function AboutPage() {
  return (
    <motion.div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 dark:bg-[#1f1f1f] bg-white text-[#0c0407] dark:text-white lg:pt-10 md:pt-4 pt-5 items-center">
      <div className="aboutme-headline">
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="about dark:text-[#fff] text-[#0c0407]  lg:tracking-[-9.12px] lg:uppercase lg:whitespace-nowrap lg:leading-[144px] lg:font-bold lg:text-[145.5px] md:uppercase  md:font-bold md:tracking-[-4.5px] md:text-[52px] md:leading-[52px]  tracking-[-3px] whitespace-nowrap text-[63px] leading-[55px] uppercase font-bold"
        >
          about me
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center pt-3">
        <div className="flex flex-col gap-y-20 lg:mr-15 ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="intro-text-wrapper"
          >
            <div className="intro-text text-3xl  font-bold">Hey There I'm</div>
            <div className="intro-text-name font-bold text-3xl">
              Ayush Dhakad
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href={"/contact"}>
              <button className="rounded-full w-[146px] h-[146px] dark:bg-[#323232] bg-[#9b36f2] text-white uppercase">
                Let's Chat
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded mx-auto "
        >
          <Image
            src="https://iili.io/3znizAJ.png"
            alt="ayush-img"
            width={500}
            height={500}
            className="object-contain ayush-img-about   dark:border dark:border-transparent border border-black rounded-full"
            priority
          />
        </motion.div>
        <div className="flex flex-col gap-y-20 lg:ml-15 mt-6">
          <div className="skill-wrapper">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="skill-text font-bold"
            >
              A passionate video editor blending creativity with storytelling to
              craft engaging, polished content. Skilled in Premiere Pro, After
              Effects, and DaVinci Resolve with expertise in cutting, color
              grading, sound, and motion graphics.
            </motion.div>
          </div>
        </div>
      </div>
      <div className="info-element-block grid lg:grid-cols-4 lg:gap-5 grid-cols-2   md:gap-5  pt-15 ">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center "
        >
          <div className="info-head text-[72px] font-bold">3</div>
          <div className="info-text">Years of experience</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="info-head text-[72px] font-bold">10+</div>
          <div className="info-text">Projects Completed</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="info-head text-[72px] font-bold">98%</div>
          <div className="info-text ">Client satisfied</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="info-head text-[72px] font-bold">10+</div>
          <div className="info-text">Tools Mastered</div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="flex justify-self-center lg:my-25 mt-10 mb-4"
      >
        <div className="lg:text-6xl text-4xl font-bold dark:text-white text-[#0c0407]">
          Why Choose Me?
        </div>
      </motion.div>
      <div className="why-choose-me grid lg:grid-cols-2 grid-cols-1 gap-x-20">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="why-choose-me-section-img max-w-[584px] justify-self-center"
        >
          <Image
            src="https://images.unsplash.com/photo-1614963326505-843868e1d83a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="video-editor"
            width={1170}
            height={780}
            className="max-w-full h-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="why-choose-me-text-block flex flex-col gap-y-10 mt-[16px]"
        >
          <div className="gap-x-30 flex">
            <div className="why-choose-num text-2xl md:block hidden">(01)</div>
            <div className="why-choose-text-block">
              <div className="block-head text-2xl font-bold">
                Expert in tools
              </div>
              <div className="block-text  text-[#4c4c4c] lg:text-xl text-[14px] font-bold">
                Expert in video editing tools, I craft seamless, high-quality
                visuals that engage and inspire. Every project is delivered with
                precision, creativity, and a polished finish.
              </div>
            </div>
          </div>
          <div className="gap-x-30 flex">
            <div className="why-choose-num text-2xl md:block hidden">(02)</div>
            <div className="why-choose-text-block">
              <div className="block-head text-2xl font-bold">
                Creative ideas
              </div>
              <div className="block-text  text-[#4c4c4c] lg:text-xl text-[14px] font-bold">
                From smooth transitions to cinematic effects, I transform simple
                clips into visually stunning stories that leave a lasting
                impact.
              </div>
            </div>
          </div>
          <div className="gap-x-30 flex">
            <div className="why-choose-num text-2xl md:block hidden">(03)</div>
            <div className="why-choose-text-block">
              <div className="block-head text-2xl font-bold">
                Proven results
              </div>
              <div className="block-text lg:text-xl text-[14px] text-[#4c4c4c] font-bold">
                Every frame is crafted with precision to achieve professional
                quality and proven success in reaching audience goals.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
