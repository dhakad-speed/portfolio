"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
function ProjectPage() {
  return (
    <motion.div className="dark:bg-[#323232] mx-auto max-w-7xl dark:text-white bg-white text-black lg:pt-10 md:pt-5 pt-5 px-4">
      <div className="container mx-auto lg:mt-5 lg:pb-20 lg:p-0 md:p-0 ">
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="lg:text-9xl md:text-8xl text-6xl uppercase font-bold mb-12"
        >
          projects
        </motion.div>

        <div className="grid grid-cols-12 items-center gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 col-span-12"
          >
            <Image
              src="https://images.unsplash.com/photo-1610847455028-9e55e62bac33?q=80&w=1170&auto=format&fit=crop"
              width={500}
              height={200}
              alt="cinematic"
              style={{ height: "auto" }}
              className="object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-7 col-span-12"
          >
            <h2 className="lg:text-6xl md:text-4xl text-3xl uppercase font-bold">
              Cinematic Edit
            </h2>
            <p className="lg:text-xl md:text-base text-sm">
              A visually immersive storytelling edit designed to capture emotion
              and atmosphere. With seamless transitions, dramatic pacing, and
              rich color grading, this project transforms raw footage into a
              cinematic experience that feels like film.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 items-center gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-7 col-span-12 order-2 lg:order-1"
          >
            <h2 className="lg:text-6xl md:text-4xl text-3xl uppercase font-bold">
              Montage Edit
            </h2>
            <p className="lg:text-xl md:text-base text-sm">
              Fast-paced, dynamic editing style that combines multiple short
              clips to showcase progress, energy, or emotion.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 col-span-12 order-1 lg:order-2"
          >
            <Image
              src="https://images.pexels.com/photos/17209322/pexels-photo-17209322.jpeg"
              width={500}
              height={200}
              alt="montage"
              style={{ height: "auto" }}
              className="object-contain"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-12 items-center gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 col-span-12"
          >
            <Image
              src="https://images.pexels.com/photos/32647498/pexels-photo-32647498.jpeg"
              width={500}
              height={200}
              alt="commercial"
              style={{ height: "auto" }}
              className="object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-7 col-span-12"
          >
            <h2 className="lg:text-6xl md:text-4xl text-3xl uppercase font-bold">
              Commercial Edit
            </h2>
            <p className="lg:text-xl md:text-base text-sm">
              A clean, professional editing style focused on branding,
              storytelling, and client goals. Perfect for ads and promos.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectPage;
