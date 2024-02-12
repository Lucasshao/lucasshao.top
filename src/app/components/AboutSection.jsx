"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  {
    /*useTransition 是 React 的 Concurrent Mode API 中的一个钩子，用于管理状态的过渡过程。
      isPending 是一个布尔值，表示当前是否处于状态转换的过渡过程中。
      startTransition 是一个函数，用于开始一个状态过渡。在状态转换期间，React 会以一种更优雅的方式来处理渲染，以避免页面卡顿或性能问题。
      const handleTabChange = (id) => {...}:
      这是一个处理选项卡切换的函数。当用户切换选项卡时，它会调用 startTransition 启动状态过渡，并在回调函数中设置新的选项卡状态。

      startTransition(() => { setTab(id); });:

      startTransition 函数接受一个回调函数，该回调函数包含在状态过渡期间执行的代码。
      在这里，回调函数中调用了 setTab(id)，用于设置新的选项卡状态。
      由于这个设置操作被包裹在 startTransition 中，React 将以一种更灵活的方式来处理这次状态的更新，以提高性能和用户体验。
      这种处理方式对于在用户界面中进行一些可能引起性能问题的更新操作（例如切换选项卡、加载大量数据等）是很有用的。useTransition 的目的是确保在状态转换期间 React 能够更好地分配资源，提高应用的整体性能。
  */
  }
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  // startTransition 函数接受一个回调函数作为参数，这个回调函数包含在状态过渡期间执行的代码。在这里，回调函数中调用了 setTab(id)，用于设置新的选项卡状态。由于这个设置操作被包裹在 startTransition 中，React 将以一种更灵活的方式来处理这次状态的更新，以提高性能和用户体验。

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about image"
        />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {/* 父组件向子组件传递属性以及子组件如何通过事件回调将信息传递回父组件。 */}
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {/* 这是一个 TabButton 组件，接受两个 props，selectTab 和 active。selectTab 是一个回调函数，当按钮被点击时会调用 handleTabChange("skills")，从而触发选项卡切换。active 则是一个布尔值，表示当前选项卡是否为 "Skills"，用于确定按钮是否应该显示为活动状态。 
              实际上，selectTab 只是一个变量名，而 onClick 是 React 提供的一种标准命名的事件处理函数。在这个特定的场景中，你可以选择使用 onClick 来表达按钮的点击事件，也可以给这个处理函数取别的名字，比如 onTabSelect 或者 onClick -> 这里只是用自己命名或者React给的名字传一个回调函数到子组件，然后子组件最终添加onClick这个功能，使用传过来的回调函数*/}{" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
