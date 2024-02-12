"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center place-self-center sm:text-left justify-self-start"
        >
          {/* motion 是 Framer Motion 库的一部分，它是一个用于 React 的动画库。它提供了一种声明式的方式来添加动画效果，能够轻松地处理复杂的 UI 动画。

            在你的代码中，motion.div 包裹的部分使用了 Framer Motion 的动画效果。下面是你使用的一些属性：

            initial: 设置初始状态。在你的代码中，初始状态包括透明度（opacity）和缩放比例（scale）。

            animate: 设置动画结束时的状态。在你的代码中，动画结束时透明度和缩放比例都是 1，表示完全显示且不缩放。

            transition: 设置动画的过渡效果，包括持续时间（duration）。 */}
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-8xl lg:leading-normal">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Lucas",
                2000,
                "Job Seeker",
                2000,
                "Frontend Developer",
                2000,
                "Fullstack Developer",
                2000,
              ]}
              wrapper="span"
              speed={35}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            As a fast and keen learner, I am seeking an entry-level position
            with the company to use my skills in coding, assisting in the timely
            completion of projects, and interacting with team members.
          </p>
          <div>
            {/* <Link
              href="/#contact"
              className="inline-block w-full px-6 py-3 mr-4 text-white rounded-full sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200"
            >
              Hire Me
            </Link> */}
            <a
              download
              href="/pdf/RESUME_LucasShao_12_02.pdf"
              className="inline-block w-full px-1 py-1 mt-3 text-white rounded-full sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center lg:mt-0"
        >
          {/* <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div> */}
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('/images/hero-image.png')` }}
            >
              {/* 这里是背景图片 */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
